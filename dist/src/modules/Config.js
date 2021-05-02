"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
exports.default = {
    archiveOutputDir: path_1.default.resolve(os_1.default.homedir(), '.d4data', 'archives'),
};
