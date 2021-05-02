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
const FOLLOWINGS_FILE = 'following_and_followers/following.json';
Facebook_1.default.prototype.getFollowings = function getFollowings(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const followingList = yield this.parser.parseAsJSON(FOLLOWINGS_FILE, options === null || options === void 0 ? void 0 : options.parsingOptions);
        const followings = followingList.following.map((pageFollowed) => ({
            type: 'community',
            entity: {
                name: pageFollowed.name,
            },
            followedSince: new Date(pageFollowed.timestamp * 1000),
        }));
        return {
            data: followings,
            parsedFiles: [FOLLOWINGS_FILE],
        };
    });
};
