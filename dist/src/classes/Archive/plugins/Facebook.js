"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Archive_1 = __importDefault(require("../Archive"));
const Services_1 = __importDefault(require("../../../types/Services"));
const Facebook_1 = __importDefault(require("../../Standardizer/plugins/Facebook/Facebook"));
const archiveFileExist_1 = __importDefault(require("../../../modules/archiveFileExist"));
class Facebook extends Archive_1.default {
    identifyService() {
        return archiveFileExist_1.default(this.path, [
            'security_and_login_information/account_activity.json',
            'profile_information/profile_information.json',
            'friends/friends.json',
        ])
            .then(results => results.every(item => item));
    }
    get service() {
        return Services_1.default.FACEBOOK;
    }
    get standardizer() {
        if (!this.isExtracted()) {
            throw new Error('Archive not extracted');
        }
        return new Facebook_1.default(this.extractedArchivePath);
    }
}
exports.default = Facebook;
