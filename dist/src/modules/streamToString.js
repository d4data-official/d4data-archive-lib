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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Read and accumulate stream data chunks and wait for stream ending to return full data
 * WARNING : This function will put all stream data into RAM, use with caution!
 */
function streamToString(stream) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = '';
        return new Promise((resolve, reject) => {
            stream.on('data', chunk => data += chunk.toString());
            stream.on('error', error => reject(error));
            stream.on('end', () => resolve(data));
        });
    });
}
exports.default = streamToString;
