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
const MESSAGES_FILE = 'chat_history.csv';
Reddit_1.default.prototype.getChatMessages = function getChatMessages(chatId, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const messageList = yield this.parser.parseAsCSV(MESSAGES_FILE, options === null || options === void 0 ? void 0 : options.parsingOptions);
        const messages = messageList
            .filter((message) => message.channel_url === chatId)
            .map((message) => ({
            sender: message.username,
            text: message.message,
            sendAt: new Date(message.created_at),
        }));
        return {
            data: messages,
            parsedFiles: [MESSAGES_FILE],
        };
    });
};
