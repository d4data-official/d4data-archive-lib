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
exports.getFileFromZIP = void 0;
const yauzl_1 = __importDefault(require("yauzl"));
const ArchiveExtraction_1 = require("./ArchiveExtraction");
const handlers = [
    { format: ArchiveExtraction_1.ArchiveFormat.ZIP, handler: getFileFromZIP },
];
function getFileFromArchive(archivePath, relativePathList) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const archiveFormat = yield ArchiveExtraction_1.identifyArchiveFormat(archivePath);
        const handler = (_a = handlers.find(item => item.format === archiveFormat)) === null || _a === void 0 ? void 0 : _a.handler;
        if (!handler) {
            throw new Error('Unknown archive format');
        }
        return handler(archivePath, relativePathList);
    });
}
exports.default = getFileFromArchive;
function getFileFromZIP(archivePath, relativePathList) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const result = Array(relativePathList.length).fill(undefined);
            yauzl_1.default.open(archivePath, { lazyEntries: true }, (err, zipfile) => {
                if (err)
                    throw err;
                if (!zipfile) {
                    return;
                }
                zipfile.readEntry();
                zipfile.on('entry', entry => {
                    if (/\/$/.test(entry.fileName)) {
                        // Directory entry
                        // Directory file names end with '/'.
                        zipfile.readEntry();
                    }
                    else {
                        // File entry
                        const wantedPathIdx = relativePathList.findIndex(path => path === entry.fileName);
                        if (wantedPathIdx > -1) {
                            zipfile.openReadStream(entry, (streamErr, readStream) => {
                                if (streamErr)
                                    throw streamErr;
                                if (!readStream) {
                                    return;
                                }
                                result[wantedPathIdx] = readStream;
                                zipfile.readEntry();
                            });
                        }
                        else {
                            zipfile.readEntry();
                        }
                    }
                });
                zipfile.on('error', error => reject(error));
                zipfile.on('end', () => resolve(result));
            });
        });
    });
}
exports.getFileFromZIP = getFileFromZIP;
