"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countFileInZip = exports.identifyArchiveFormat = exports.ArchiveFormat = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const yauzl_1 = __importDefault(require("yauzl"));
var ArchiveFormat;
(function (ArchiveFormat) {
    ArchiveFormat["ZIP"] = "zip";
    ArchiveFormat["UNKNOWN"] = "unknown";
})(ArchiveFormat = exports.ArchiveFormat || (exports.ArchiveFormat = {}));
/**
 * Identify archive file format
 */
function identifyArchiveFormat(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const extensions = [
            [ArchiveFormat.ZIP, ['zip']],
        ];
        const fileExtension = path.split('.').pop();
        for (const [format, extList] of extensions) {
            if (extList.includes(fileExtension)) {
                return format;
            }
        }
        return ArchiveFormat.UNKNOWN;
    });
}
exports.identifyArchiveFormat = identifyArchiveFormat;
function extractArchive(path, outputPath, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const format = yield identifyArchiveFormat(path);
        switch (format) {
            case ArchiveFormat.ZIP:
                yield unzip(path, outputPath, options);
                break;
            default:
                throw new Error('Unknown Format');
        }
    });
}
exports.default = extractArchive;
function countFileInZip(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            let fileCount = 0;
            yauzl_1.default.open(filePath, (yauzlError, zipFile) => {
                if (yauzlError)
                    reject(yauzlError);
                if (!zipFile) {
                    return;
                }
                zipFile.on('entry', entry => {
                    // If it's file entry
                    if (!(/\/$/.test(entry.fileName))) {
                        fileCount += 1;
                    }
                });
                zipFile.on('close', () => resolve(fileCount));
                zipFile.on('error', error => reject(error));
            });
        });
    });
}
exports.countFileInZip = countFileInZip;
function unzip(filePath, outputPath, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileCount = yield countFileInZip(filePath);
        let extractedCount = 0;
        yield fs_1.promises.mkdir(outputPath, { recursive: true });
        return new Promise((resolve, reject) => {
            yauzl_1.default.open(filePath, (yauzlError, zipFile) => {
                if (yauzlError)
                    reject(yauzlError);
                zipFile.on('entry', (entry) => {
                    if (!(/\/$/.test(entry.fileName))) {
                        zipFile.openReadStream(entry, (streamErr, readStream) => __awaiter(this, void 0, void 0, function* () {
                            if (streamErr)
                                reject(streamErr);
                            const outputFilePath = path_1.default.resolve(outputPath, entry.fileName);
                            yield fs_1.promises.mkdir(path_1.default.dirname(outputFilePath), { recursive: true });
                            const writeStream = fs_1.createWriteStream(outputFilePath);
                            readStream.pipe(writeStream)
                                .on('finish', () => {
                                var _a;
                                extractedCount += 1;
                                (_a = options === null || options === void 0 ? void 0 : options.onProgress) === null || _a === void 0 ? void 0 : _a.call(options, entry.fileName, extractedCount, fileCount);
                            })
                                .on('error', (error) => reject(error));
                        }));
                    }
                });
                // Extraction ending handler
                zipFile.on('close', () => resolve(outputPath));
                zipFile.on('error', (error) => reject(error));
            });
        });
    });
}
