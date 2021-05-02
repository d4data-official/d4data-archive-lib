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
const ACCOUNT_ACTIVITY_FILE = 'posts/your_posts_1.json';
Facebook_1.default.prototype.getPosts = function getPosts(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const postList = yield this.parser.parseAsJSON(ACCOUNT_ACTIVITY_FILE, options === null || options === void 0 ? void 0 : options.parsingOptions);
        const posts = postList.map((post) => {
            var _a, _b, _c, _d, _e, _f;
            const externalLink = (_d = (_c = (_b = (_a = post === null || post === void 0 ? void 0 : post.attachments) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c[0].external_context) === null || _d === void 0 ? void 0 : _d.url;
            return {
                creationDate: new Date(post.timestamp * 1000),
                title: post === null || post === void 0 ? void 0 : post.title,
                sender: 'Myself',
                content: (_f = (_e = post === null || post === void 0 ? void 0 : post.data) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.post,
                metaData: {
                    links: externalLink ? [externalLink] : undefined,
                },
            };
        });
        return {
            data: posts,
            parsedFiles: [ACCOUNT_ACTIVITY_FILE],
        };
    });
};
