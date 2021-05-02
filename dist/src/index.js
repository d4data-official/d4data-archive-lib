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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Getters = exports.Services = exports.ParsingUtils = exports.StandardizerFactory = exports.Standardizer = exports.Archive = exports.ArchiveFactory = void 0;
const Services_1 = __importDefault(require("./types/Services"));
exports.Services = Services_1.default;
const Getters_1 = __importDefault(require("./types/standardizer/Getters"));
exports.Getters = Getters_1.default;
const ArchiveFactory_1 = __importDefault(require("./classes/ArchiveFactory"));
exports.ArchiveFactory = ArchiveFactory_1.default;
const Archive_1 = __importDefault(require("./classes/Archive/Archive"));
exports.Archive = Archive_1.default;
const Standardizer_1 = __importDefault(require("./classes/Standardizer/Standardizer"));
exports.Standardizer = Standardizer_1.default;
const StandardizerFactory_1 = __importDefault(require("./classes/StandardizerFactory"));
exports.StandardizerFactory = StandardizerFactory_1.default;
const ParsingUtils = __importStar(require("./modules/Parsing"));
exports.ParsingUtils = ParsingUtils;
exports.default = {
    ArchiveFactory: ArchiveFactory_1.default,
    StandardizerFactory: StandardizerFactory_1.default,
};
