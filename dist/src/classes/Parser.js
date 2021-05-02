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
const path_1 = __importDefault(require("path"));
const listFiles_1 = __importDefault(require("../modules/Parsing/listFiles"));
const findFiles_1 = __importDefault(require("../modules/Parsing/findFiles"));
const parseDir_1 = __importDefault(require("../modules/Parsing/parseDir"));
const parseFile_1 = __importDefault(require("../modules/Parsing/parseFile"));
const parseAsText_1 = __importDefault(require("../modules/Parsing/parseAsText"));
const parseAsJSON_1 = __importDefault(require("../modules/Parsing/parseAsJSON"));
const parseAsJSONL_1 = __importDefault(require("../modules/Parsing/parseAsJSONL"));
const parseAsHTML_1 = __importDefault(require("../modules/Parsing/parseAsHTML"));
const parseAsCSV_1 = __importDefault(require("../modules/Parsing/parseAsCSV"));
const parseAsMBOX_1 = __importDefault(require("../modules/Parsing/parseAsMBOX"));
const parseAsVCARD_1 = __importDefault(require("../modules/Parsing/parseAsVCARD"));
const parseAsICS_1 = __importDefault(require("../modules/Parsing/parseAsICS"));
const Pipeline_1 = __importDefault(require("./Pipeline"));
class Parser {
    constructor(extractedArchivePath, preprocessors = []) {
        this.path = extractedArchivePath;
        this.preprocessors = preprocessors;
    }
    /**
     * Add global level pre-processor (Parser level)
     * Will be applied on all parsing methods of this Parser
     */
    addPreprocessor(preprocessor) {
        this.preprocessors.push(preprocessor);
    }
    /**
     * Resolve path relative to the archive root
     */
    resolveRelativePath(relativePath) {
        return path_1.default.resolve(this.path, relativePath);
    }
    /**
     * Merge parsing options with default Parser options
     */
    mergeOptions(options) {
        return Object.assign(Object.assign({ 
            // Default pagination option values
            pagination: {
                offset: 0,
                items: 50,
            } }, options), { preprocessors: (options === null || options === void 0 ? void 0 : options.preprocessors) ? this.preprocessors.concat(options.preprocessors) : this.preprocessors });
    }
    /**
     * List all files recursively in given directory path and return absolute path list
     * Throw error if can't access directory
     */
    listFiles(relativeDirPath, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return listFiles_1.default(this.resolveRelativePath(relativeDirPath), options);
        });
    }
    /**
     * List all files that matches the given regular expression
     */
    findFiles(regex, relativePath, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return findFiles_1.default(regex, this.resolveRelativePath(relativePath || '.'), options);
        });
    }
    /**
     * Parse directory files recursively from given path for any supported file format
     */
    parseDir(relativeDirPath, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return parseDir_1.default(this.resolveRelativePath(relativeDirPath), this.mergeOptions(options));
        });
    }
    /**
     * Parse file from given path for any supported file format
     * Throw error if can't access file or if parsing fail
     */
    parseFile(relativeFilePath, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return parseFile_1.default(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options));
        });
    }
    /**
     * Parse Text (txt) file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsText(relativeFilePath, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedOptions = this.mergeOptions(options);
            return parseAsText_1.default(Pipeline_1.default.fromFile(this.resolveRelativePath(relativeFilePath), mergedOptions.preprocessors), mergedOptions);
        });
    }
    /**
     * Parse JSON file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsJSON(relativeFilePath, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedOptions = this.mergeOptions(options);
            return parseAsJSON_1.default(Pipeline_1.default.fromFile(this.resolveRelativePath(relativeFilePath), mergedOptions.preprocessors), mergedOptions);
        });
    }
    /**
     * Parse JSON Lines file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsJSONL(relativeFilePath, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedOptions = this.mergeOptions(options);
            return parseAsJSONL_1.default(Pipeline_1.default.fromFile(this.resolveRelativePath(relativeFilePath), mergedOptions.preprocessors), mergedOptions);
        });
    }
    /**
     * Parse HTML file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsHTML(relativeFilePath, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedOptions = this.mergeOptions(options);
            return parseAsHTML_1.default(Pipeline_1.default.fromFile(this.resolveRelativePath(relativeFilePath), mergedOptions.preprocessors), mergedOptions);
        });
    }
    /**
     * Parse CSV file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsCSV(relativeFilePath, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedOptions = this.mergeOptions(options);
            return parseAsCSV_1.default(Pipeline_1.default.fromFile(this.resolveRelativePath(relativeFilePath), mergedOptions.preprocessors), mergedOptions);
        });
    }
    /**
     * Parse MBOX file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsMBOX(relativeFilePath, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedOptions = this.mergeOptions(options);
            return parseAsMBOX_1.default(Pipeline_1.default.fromFile(this.resolveRelativePath(relativeFilePath), mergedOptions.preprocessors), mergedOptions);
        });
    }
    /**
     * Parse VCARD file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsVCARD(relativeFilePath, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedOptions = this.mergeOptions(options);
            return parseAsVCARD_1.default(Pipeline_1.default.fromFile(this.resolveRelativePath(relativeFilePath), mergedOptions.preprocessors), mergedOptions);
        });
    }
    /**
     * Parse ICS file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsICS(relativeFilePath, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedOptions = this.mergeOptions(options);
            return parseAsICS_1.default(Pipeline_1.default.fromFile(this.resolveRelativePath(relativeFilePath), mergedOptions.preprocessors), mergedOptions);
        });
    }
}
exports.default = Parser;
