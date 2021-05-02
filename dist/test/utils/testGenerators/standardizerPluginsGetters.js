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
const path_1 = __importDefault(require("path"));
const ava_1 = __importDefault(require("ava"));
const extractTestArchives_1 = __importStar(require("../extractTestArchives"));
const Getters_1 = __importDefault(require("../../../src/types/standardizer/Getters"));
const Standardizer_1 = __importDefault(require("../../../src/classes/Standardizer/Standardizer"));
const deleteUndefinedProperties_1 = __importDefault(require("../deleteUndefinedProperties"));
const { LOCAL_ARCHIVE_DIR } = process.env;
const skippedGetters = [Getters_1.default.CHAT_MESSAGES];
const getterValidators = Standardizer_1.default.getterDataAssertions();
const parsingOptions = {
    pagination: {
        offset: 0,
        items: 10,
    },
};
const test = ava_1.default;
const maybeTest = LOCAL_ARCHIVE_DIR ? test : test.skip;
function macro(t, standardizer, getter) {
    return __awaiter(this, void 0, void 0, function* () {
        if (skippedGetters.includes(getter)) {
            throw new Error(`Can not test ${getter}, spacial test required for this getter`);
        }
        const result = yield standardizer[getter]({ parsingOptions });
        if (result === null) {
            t.pass();
            return;
        }
        // Remove all properties with undefined value
        // Workaround for the typescript-is lib special behavior (design choice) with optional interface fields
        // https://github.com/woutervh-/typescript-is/issues/25
        const cleanData = (data) => {
            if (Array.isArray(data)) {
                return data.map(item => deleteUndefinedProperties_1.default(item));
            }
            if (typeof data === 'object') {
                return deleteUndefinedProperties_1.default(result.data);
            }
            return data;
        };
        t.notThrows(() => getterValidators[getter](cleanData(result.data)));
    });
}
function standardizerPluginsGetters(standardizer) {
    test.before('Extract test archives', (t) => __awaiter(this, void 0, void 0, function* () {
        yield extractTestArchives_1.default(LOCAL_ARCHIVE_DIR, {
            onSkip: reason => t.log(reason),
            onExtracted: archivePath => t.log(`Archive extracted: ${archivePath}`),
        });
        t.log(`Test archives extracted in ${path_1.default.resolve(LOCAL_ARCHIVE_DIR, extractTestArchives_1.EXTRACTION_DIR)}`);
    }));
    for (const getter of Object.values(Getters_1.default)) {
        if (skippedGetters.includes(getter)) {
            test.todo(`${standardizer.service}: ${getter} must return valid type`);
        }
        else {
            maybeTest(`${standardizer.service}: ${getter} must return valid type`, macro, standardizer, getter);
        }
    }
}
exports.default = standardizerPluginsGetters;
