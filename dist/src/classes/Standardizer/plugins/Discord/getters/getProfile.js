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
const path_1 = __importDefault(require("path"));
const Discord_1 = __importDefault(require("../Discord"));
const Media_1 = require("../../../../../types/schemas/Media");
const ACCOUNT_FILE = 'account/user.json';
Discord_1.default.prototype.getProfile = function getProfile(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const profile = yield this.parser.parseAsJSON(ACCOUNT_FILE, options === null || options === void 0 ? void 0 : options.parsingOptions);
        const contact = {
            displayName: profile.username,
            mail: profile.email,
            profilePicture: {
                current: {
                    url: `file:///${path_1.default.resolve('package/account/avatar.png')}`,
                    type: Media_1.MediaType.IMAGE,
                },
                history: [],
            },
        };
        return {
            data: contact,
            parsedFiles: [ACCOUNT_FILE],
        };
    });
};
