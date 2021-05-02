"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Archive_1 = __importDefault(require("../Archive"));
const Services_1 = __importDefault(require("../../../types/Services"));
const Discord_1 = __importDefault(require("../../Standardizer/plugins/Discord/Discord"));
const archiveFileExist_1 = __importDefault(require("../../../modules/archiveFileExist"));
class Discord extends Archive_1.default {
    identifyService() {
        return archiveFileExist_1.default(this.path, [
            'account/user.json',
            'messages/index.json',
            'servers/index.json',
        ])
            .then(results => results.every(item => item));
    }
    get service() {
        return Services_1.default.DISCORD;
    }
    get standardizer() {
        if (!this.isExtracted()) {
            throw new Error('Archive not extracted');
        }
        return new Discord_1.default(this.extractedArchivePath);
    }
}
exports.default = Discord;
