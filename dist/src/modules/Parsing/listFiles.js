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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
/**
 * List all files recursively in given directory path and return absolute path list
 * Throw error if can't access directory
 */
function listFiles(dirPath, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return getFiles(dirPath, [], options);
    });
}
exports.default = listFiles;
function getFiles(dir, files_ = [], options) {
    var e_1, _a;
    var _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield fs_1.promises.readdir(dir);
        try {
            for (var files_1 = __asyncValues(files), files_1_1; files_1_1 = yield files_1.next(), !files_1_1.done;) {
                const file = files_1_1.value;
                const name = path_1.default.resolve(dir, file);
                if ((yield fs_1.promises.stat(name)).isDirectory()) {
                    yield getFiles(name, files_, options);
                }
                else {
                    const extension = (_c = (_b = name.split('.').pop()) === null || _b === void 0 ? void 0 : _b.toLowerCase()) !== null && _c !== void 0 ? _c : '';
                    if (((options === null || options === void 0 ? void 0 : options.extensionWhitelist) && !((_d = options === null || options === void 0 ? void 0 : options.extensionWhitelist) === null || _d === void 0 ? void 0 : _d.includes(extension)))
                        || ((options === null || options === void 0 ? void 0 : options.extensionBlacklist) && ((_e = options === null || options === void 0 ? void 0 : options.extensionBlacklist) === null || _e === void 0 ? void 0 : _e.includes(extension)))) {
                        continue;
                    }
                    files_.push(name);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) yield _a.call(files_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return files_;
    });
}
