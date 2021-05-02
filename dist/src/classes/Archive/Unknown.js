"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Archive_1 = __importDefault(require("./Archive"));
const Services_1 = __importDefault(require("../../types/Services"));
const Unknown_1 = __importDefault(require("../Standardizer/Unknown"));
class Unknown extends Archive_1.default {
    identifyService() {
        return Promise.resolve(true);
    }
    get service() {
        return Services_1.default.UNKNOWN;
    }
    get standardizer() {
        if (!this.isExtracted) {
            throw new Error('Archive not extracted');
        }
        return new Unknown_1.default(this.extractedArchivePath);
    }
}
exports.default = Unknown;
