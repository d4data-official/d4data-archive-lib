"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Standardizer_1 = __importDefault(require("./Standardizer"));
const Services_1 = __importDefault(require("../../types/Services"));
class Unknown extends Standardizer_1.default {
    get service() {
        return Services_1.default.UNKNOWN;
    }
    get subServices() {
        return [];
    }
    get subStandardizers() {
        return [];
    }
}
exports.default = Unknown;
