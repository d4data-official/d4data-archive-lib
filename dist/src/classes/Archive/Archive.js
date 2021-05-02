"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.OUTPUT_DIR = exports.PLUGINS_DIR = void 0;
const fs_1 = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const ArchiveExtraction_1 = __importStar(require("../../modules/ArchiveExtraction"));
const Services_1 = __importDefault(require("../../types/Services"));
const Config_1 = __importDefault(require("../../modules/Config"));
exports.PLUGINS_DIR = 'plugins';
exports.OUTPUT_DIR = Config_1.default.archiveOutputDir;
class Archive {
    constructor(archivePath, outputDir) {
        this.path = archivePath;
        this.outputDir = outputDir !== null && outputDir !== void 0 ? outputDir : this.defaultOutputDir;
    }
    get defaultOutputDir() {
        return path_1.default.resolve(exports.OUTPUT_DIR, `${this.service}-${uuid_1.v4()}`);
    }
    /**
     * Is archive has been extracted
     */
    isExtracted() {
        return this.extractedArchivePath !== undefined;
    }
    /**
     * Identify archive file format
     */
    identifyFormat() {
        return __awaiter(this, void 0, void 0, function* () {
            return ArchiveExtraction_1.identifyArchiveFormat(this.path);
        });
    }
    /**
     * Get archive metadata
     */
    getMetadata() {
        return __awaiter(this, void 0, void 0, function* () {
            const stat = yield fs_1.promises.stat(this.path);
            return {
                service: this.service,
                size: stat.size,
                creationDate: stat.birthtime,
            };
        });
    }
    /**
     * Extract archive to given path
     */
    extract(options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const outputDir = (_a = options === null || options === void 0 ? void 0 : options.outputDir) !== null && _a !== void 0 ? _a : this.outputDir;
            return ArchiveExtraction_1.default(this.path, outputDir, options)
                .then(() => this.extractedArchivePath = outputDir)
                .then(() => this);
        });
    }
    /**
     * List all Archive plugins contained in the services sub-directory asynchronously
     */
    static getPlugins() {
        return fs_1.default.promises.readdir(path_1.default.resolve(__dirname, exports.PLUGINS_DIR))
            .then(dirContent => dirContent
            .filter(file => Object.values(Services_1.default).includes(path_1.default.parse(file).name))
            .map(service => Promise.resolve().then(() => __importStar(require(path_1.default.resolve(__dirname, exports.PLUGINS_DIR, service)))).then(importedModule => importedModule.default)))
            .then(promiseArr => Promise.all(promiseArr));
    }
    /**
     * List all Archive plugins contained in the services sub-directory synchronously
     */
    static getPluginsSync() {
        return fs_1.default.readdirSync(path_1.default.resolve(__dirname, exports.PLUGINS_DIR))
            .filter(file => Object.values(Services_1.default).includes(path_1.default.parse(file).name))
            .map(
        // eslint-disable-next-line import/no-dynamic-require,global-require
        service => require(path_1.default.resolve(__dirname, exports.PLUGINS_DIR, service)).default);
    }
}
exports.default = Archive;
