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
const Archive_1 = __importDefault(require("../Archive"));
const Services_1 = __importDefault(require("../../../types/Services"));
const Google_1 = __importDefault(require("../../Standardizer/plugins/Google/Google"));
const archiveFileExist_1 = __importDefault(require("../../../modules/archiveFileExist"));
const Pipeline_1 = __importDefault(require("../../Pipeline"));
const Parsing_1 = require("../../../modules/Parsing");
class Google extends Archive_1.default {
    identifyService() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const filesCheck = yield archiveFileExist_1.default(this.path, [
                'Takeout/archive_browser.html',
            ])
                .then(results => results.every(item => item));
            if (!filesCheck) {
                return false;
            }
            const dom = yield Parsing_1.parseAsHTML(yield Pipeline_1.default.fromArchive(this.path, 'Takeout/archive_browser.html'));
            const htmlTitle = (_a = dom.window.document.querySelector('title')) === null || _a === void 0 ? void 0 : _a.textContent;
            return (_b = htmlTitle === null || htmlTitle === void 0 ? void 0 : htmlTitle.endsWith('Google')) !== null && _b !== void 0 ? _b : false;
        });
    }
    get service() {
        return Services_1.default.GOOGLE;
    }
    get standardizer() {
        if (!this.isExtracted()) {
            throw new Error('Archive not extracted');
        }
        return new Google_1.default(this.extractedArchivePath);
    }
}
exports.default = Google;
