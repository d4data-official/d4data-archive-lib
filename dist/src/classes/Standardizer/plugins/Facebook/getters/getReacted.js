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
const LIKED_PAGES_FILE = 'likes_and_reactions/pages.json';
const LIKED_POSTS_FILE = 'likes_and_reactions/posts_and_comments.json';
Facebook_1.default.prototype.getReacted = function getReacted(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const likedPageList = yield this.parser.parseAsJSON(LIKED_PAGES_FILE, options === null || options === void 0 ? void 0 : options.parsingOptions);
        const likedPostList = yield this.parser.parseAsJSON(LIKED_POSTS_FILE, options === null || options === void 0 ? void 0 : options.parsingOptions);
        const likedPages = likedPageList.page_likes.map((like) => ({
            type: 'community',
            entity: {
                name: like.name,
            },
            reaction: {
                name: 'like',
                reactionDate: new Date(like.timestamp * 1000),
            },
        }));
        const likedPosts = likedPostList.reactions.map((reaction) => ({
            type: 'post',
            entity: {
                name: reaction.title,
            },
            reaction: {
                name: reaction.data[0].reaction.reaction,
                description: reaction.title,
                reactionDate: new Date(reaction.timestamp * 1000),
            },
        }));
        const reacted = likedPages.concat(likedPosts);
        return {
            data: reacted,
            parsedFiles: [LIKED_PAGES_FILE, LIKED_POSTS_FILE],
        };
    });
};
