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
const Facebook_1 = __importDefault(require("../Facebook"));
const COMMENTS_FILE = 'comments/comments.json';
Facebook_1.default.prototype.getComments = function getComments(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const commentList = yield this.parser.parseAsJSON(COMMENTS_FILE, options === null || options === void 0 ? void 0 : options.parsingOptions);
        const comments = commentList.comments.map((comment) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const externalLink = (_d = (_c = (_b = (_a = comment === null || comment === void 0 ? void 0 : comment.attachments) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c[0].media) === null || _d === void 0 ? void 0 : _d.uri;
            return {
                creationDate: new Date(comment.timestamp * 1000),
                title: comment === null || comment === void 0 ? void 0 : comment.title,
                sender: ((_f = (_e = comment === null || comment === void 0 ? void 0 : comment.data) === null || _e === void 0 ? void 0 : _e[0].comment) === null || _f === void 0 ? void 0 : _f.author) || 'Myself',
                content: (_h = (_g = comment === null || comment === void 0 ? void 0 : comment.data) === null || _g === void 0 ? void 0 : _g[0].comment) === null || _h === void 0 ? void 0 : _h.comment,
                metaData: {
                    links: externalLink ? [externalLink] : undefined,
                },
            };
        });
        return {
            data: comments,
            parsedFiles: [COMMENTS_FILE],
        };
    });
};
