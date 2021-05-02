"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Archive_1 = __importDefault(require("../Archive"));
const Services_1 = __importDefault(require("../../../types/Services"));
const Reddit_1 = __importDefault(require("../../Standardizer/plugins/Reddit/Reddit"));
const archiveFileExist_1 = __importDefault(require("../../../modules/archiveFileExist"));
class Reddit extends Archive_1.default {
    identifyService() {
        return archiveFileExist_1.default(this.path, [
            'reddit_gold_information.csv',
            'subscribed_subreddits.csv',
            'approved_submitter_subreddits.csv',
        ])
            .then(results => results.every(item => item));
    }
    get service() {
        return Services_1.default.REDDIT;
    }
    get standardizer() {
        if (!this.isExtracted()) {
            throw new Error('Archive not extracted');
        }
        return new Reddit_1.default(this.extractedArchivePath);
    }
}
exports.default = Reddit;
