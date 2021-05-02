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
Discord_1.default.prototype.getChatMessages = function getChatMessages(chatId, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const messages = yield this.parser.findFiles(/messages.csv$/, './messages/');
        const parsed = yield this.parser.parseAsCSV(messages === null || messages === void 0 ? void 0 : messages[Number(chatId)], options === null || options === void 0 ? void 0 : options.parsingOptions);
        const chatMessages = parsed.map((chat) => ({
            sender: 'You',
            text: chat.Contents,
        }));
        return {
            data: chatMessages,
            parsedFiles: [messages === null || messages === void 0 ? void 0 : messages[Number(chatId)]],
        };
    });
};
