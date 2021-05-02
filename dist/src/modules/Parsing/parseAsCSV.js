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
const papaparse_1 = __importDefault(require("papaparse"));
/**
 * Parse given Pipeline result stream as CSV format
 */
function parseAsCSV(pipeline, options) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const stream = pipeline.run();
        const content = [];
        const items = (_b = (_a = options === null || options === void 0 ? void 0 : options.pagination) === null || _a === void 0 ? void 0 : _a.items) !== null && _b !== void 0 ? _b : Infinity;
        const offset = (_d = (_c = options === null || options === void 0 ? void 0 : options.pagination) === null || _c === void 0 ? void 0 : _c.offset) !== null && _d !== void 0 ? _d : 0;
        let index = 0;
        return new Promise((resolve) => {
            papaparse_1.default.parse(stream, {
                header: !(options === null || options === void 0 ? void 0 : options.columns),
                error(error) {
                    console.error(error);
                },
                step(row, parser) {
                    if (offset + items === index) {
                        parser.abort();
                        stream.destroy();
                        return;
                    }
                    if (index >= offset) {
                        content.push(row.data);
                    }
                    index += 1;
                },
                complete() {
                    resolve(content);
                },
            });
        })
            .then((data) => {
            if (!(options === null || options === void 0 ? void 0 : options.columns)) {
                return data;
            }
            return data.map((item) => {
                var _a, _b;
                const obj = {};
                for (let i = 0; i < ((_b = (_a = options === null || options === void 0 ? void 0 : options.columns) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0); i += 1) {
                    const colName = options === null || options === void 0 ? void 0 : options.columns[i];
                    obj[colName] = item[i];
                }
                return obj;
            });
        });
    });
}
exports.default = parseAsCSV;
