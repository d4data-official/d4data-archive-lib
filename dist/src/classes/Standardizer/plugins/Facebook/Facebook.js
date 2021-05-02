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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preProcessors = void 0;
const iconv_lite_1 = __importDefault(require("iconv-lite"));
const path_1 = __importDefault(require("path"));
const Standardizer_1 = __importStar(require("../../Standardizer"));
const Services_1 = __importDefault(require("../../../../types/Services"));
exports.preProcessors = [
    // Pre-processor to fix bad string encoding in Facebook archive JSON files
    function utf8Translator(stream) {
        return __asyncGenerator(this, arguments, function* utf8Translator_1() {
            var e_1, _a;
            if (stream !== undefined) {
                try {
                    for (var stream_1 = __asyncValues(stream), stream_1_1; stream_1_1 = yield __await(stream_1.next()), !stream_1_1.done;) {
                        const chunk = stream_1_1.value;
                        const encodedStr = iconv_lite_1.default.encode(chunk, 'latin1');
                        const decodedStr = iconv_lite_1.default.decode(encodedStr, 'utf8');
                        yield yield __await(decodedStr);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (stream_1_1 && !stream_1_1.done && (_a = stream_1.return)) yield __await(_a.call(stream_1));
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    },
];
class Facebook extends Standardizer_1.default {
    constructor(extractedArchivePath) {
        super(extractedArchivePath);
        exports.preProcessors.forEach(preProcessor => this.parser.addPreprocessor(preProcessor));
    }
    get service() {
        return Services_1.default.FACEBOOK;
    }
    get subServices() {
        return [];
    }
    get subStandardizers() {
        return [];
    }
}
exports.default = Facebook;
Standardizer_1.default.importExternalGettersSync(path_1.default.resolve(__dirname, Standardizer_1.EXTERNAL_GETTERS_DIR));
