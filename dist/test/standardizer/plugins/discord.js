"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const standardizerPluginsGetters_1 = __importDefault(require("../../utils/testGenerators/standardizerPluginsGetters"));
const extractTestArchives_1 = require("../../utils/extractTestArchives");
const Discord_1 = __importDefault(require("../../../src/classes/Standardizer/plugins/Discord/Discord"));
const { LOCAL_ARCHIVE_DIR } = process.env;
standardizerPluginsGetters_1.default(new Discord_1.default(path_1.default.resolve(LOCAL_ARCHIVE_DIR !== null && LOCAL_ARCHIVE_DIR !== void 0 ? LOCAL_ARCHIVE_DIR : '', extractTestArchives_1.EXTRACTION_DIR, 'discord')));
