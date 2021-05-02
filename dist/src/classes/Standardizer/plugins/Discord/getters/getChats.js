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
const Discord_1 = __importDefault(require("../Discord"));
Discord_1.default.prototype.getChats = function getChats(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const channels = yield this.parser.findFiles(/channel.json$/, './messages/');
        const chats = channels.map((channel, id) => __awaiter(this, void 0, void 0, function* () {
            const parsed = yield this.parser.parseAsJSON(channel);
            return {
                title: parsed === null || parsed === void 0 ? void 0 : parsed.name,
                _id: id.toString(),
                participants: [],
            };
        }));
        return {
            data: yield Promise.all(chats),
            parsedFiles: channels,
        };
    });
};
