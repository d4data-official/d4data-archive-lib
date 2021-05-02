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
const Reddit_1 = __importDefault(require("../Reddit"));
const POSTS_FILE = 'posts.csv';
Reddit_1.default.prototype.getPosts = function getPosts(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const postList = yield this.parser.parseAsCSV(POSTS_FILE, options === null || options === void 0 ? void 0 : options.parsingOptions);
        const posts = postList.map((post) => {
            const links = post.url ? [post.url] : undefined;
            const userTags = post.subreddit ? [post.subreddit] : undefined;
            return {
                sender: 'You',
                content: post === null || post === void 0 ? void 0 : post.body,
                creationDate: new Date(post.date),
                metaData: {
                    links,
                    userTags,
                },
            };
        });
        return {
            data: posts,
            parsedFiles: [POSTS_FILE],
        };
    });
};
