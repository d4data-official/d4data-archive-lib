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
exports.ParserTypes = exports.SupportedFileFormats = void 0;
const parseAsText_1 = __importDefault(require("./parseAsText"));
const parseAsJSON_1 = __importDefault(require("./parseAsJSON"));
const parseAsJSONL_1 = __importDefault(require("./parseAsJSONL"));
const parseAsHTML_1 = __importDefault(require("./parseAsHTML"));
const parseAsCSV_1 = __importDefault(require("./parseAsCSV"));
const parseAsMBOX_1 = __importDefault(require("./parseAsMBOX"));
const parseAsVCARD_1 = __importDefault(require("./parseAsVCARD"));
const parseAsICS_1 = __importDefault(require("./parseAsICS"));
const Pipeline_1 = __importDefault(require("../../classes/Pipeline"));
/**
 * List all file extensions for a file type
 */
exports.SupportedFileFormats = {
    TEXT: ['txt'],
    JSON: ['json'],
    JSONL: ['jsonl'],
    HTML: ['html'],
    CSV: ['csv'],
    MBOX: ['mbox'],
    VCARD: ['vcard'],
    ICS: ['ics'],
};
/**
 * Associations of file extension list to parsing functions
 * Used in parseFile function to get the good parser from a file extension
 */
exports.ParserTypes = [
    [exports.SupportedFileFormats.TEXT, parseAsText_1.default],
    [exports.SupportedFileFormats.JSON, parseAsJSON_1.default],
    [exports.SupportedFileFormats.JSONL, parseAsJSONL_1.default],
    [exports.SupportedFileFormats.HTML, parseAsHTML_1.default],
    [exports.SupportedFileFormats.CSV, parseAsCSV_1.default],
    [exports.SupportedFileFormats.MBOX, parseAsMBOX_1.default],
    [exports.SupportedFileFormats.VCARD, parseAsVCARD_1.default],
    [exports.SupportedFileFormats.ICS, parseAsICS_1.default],
];
/**
 * Parse file from given path for any supported file format
 * Throw error if can't access file or if parsing fail
 */
function parseFile(filePath, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const extension = (_b = (_a = filePath.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
        const result = exports.ParserTypes.find(([extensions]) => extensions.includes(extension));
        if (!result) {
            return parseAsText_1.default(Pipeline_1.default.fromFile(filePath), options);
        }
        return result === null || result === void 0 ? void 0 : result[1](Pipeline_1.default.fromFile(filePath), options);
    });
}
exports.default = parseFile;
