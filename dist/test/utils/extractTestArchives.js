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
exports.EXTRACTION_DIR = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const src_1 = require("../../src");
const Services_1 = __importDefault(require("../../src/types/Services"));
exports.EXTRACTION_DIR = '.d4data_archive_lib';
function extractTestArchives(archiveDir, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const report = {};
        const files = yield fs_1.default.promises.readdir(archiveDir, { withFileTypes: true })
            .then(entries => entries.filter(entry => !entry.isDirectory()))
            .then(fileEntries => fileEntries.map(entry => entry.name));
        const extractionProcesses = files.map((file) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const archiveFactory = yield src_1.ArchiveFactory.init(path_1.default.resolve(archiveDir, file));
            const identifiedService = yield archiveFactory.identify();
            const extractionDir = path_1.default.resolve(archiveDir, exports.EXTRACTION_DIR, identifiedService.toLowerCase());
            if (identifiedService === Services_1.default.UNKNOWN) {
                (_a = options === null || options === void 0 ? void 0 : options.onSkip) === null || _a === void 0 ? void 0 : _a.call(options, `Unknown service: ${file}`);
                return;
            }
            report[identifiedService] = extractionDir;
            if (fs_1.default.existsSync(extractionDir)) {
                (_b = options === null || options === void 0 ? void 0 : options.onSkip) === null || _b === void 0 ? void 0 : _b.call(options, `Already extracted: ${file}`);
                return;
            }
            return archiveFactory.getPlugin()
                .then(plugin => plugin.extract({
                outputDir: extractionDir,
            }))
                .then(() => { var _a; return (_a = options === null || options === void 0 ? void 0 : options.onExtracted) === null || _a === void 0 ? void 0 : _a.call(options, file); });
        }));
        yield Promise.all(extractionProcesses);
        return report;
    });
}
exports.default = extractTestArchives;
