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
const readline_1 = __importDefault(require("readline"));
/**
 * Parse given Pipeline result stream as JSONL format
 */
function parseAsJSONL(pipeline, options) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        let i = 0;
        const offset = (_b = (_a = options === null || options === void 0 ? void 0 : options.pagination) === null || _a === void 0 ? void 0 : _a.offset) !== null && _b !== void 0 ? _b : 0;
        const itemLimit = (_d = (_c = options === null || options === void 0 ? void 0 : options.pagination) === null || _c === void 0 ? void 0 : _c.items) !== null && _d !== void 0 ? _d : Infinity;
        const content = [];
        const stream = pipeline.run();
        const rl = readline_1.default.createInterface({
            input: stream,
        });
        rl.on('line', (line) => {
            var _a, _b, _c, _d;
            if (!((_b = (_a = options === null || options === void 0 ? void 0 : options.filter) === null || _a === void 0 ? void 0 : _a.call(options, line)) !== null && _b !== void 0 ? _b : true)) {
                return;
            }
            if (i < offset) {
                i += 1;
                return;
            }
            if (content.length >= itemLimit) {
                stream.destroy();
                rl.close();
                return;
            }
            const parsedItem = JSON.parse(line);
            content.push((_d = (_c = options === null || options === void 0 ? void 0 : options.transform) === null || _c === void 0 ? void 0 : _c.call(options, parsedItem)) !== null && _d !== void 0 ? _d : parsedItem);
            i += 1;
        });
        return new Promise((resolve, reject) => {
            rl.on('close', () => resolve(content));
            stream.on('error', (e) => reject(e));
        });
    });
}
exports.default = parseAsJSONL;
