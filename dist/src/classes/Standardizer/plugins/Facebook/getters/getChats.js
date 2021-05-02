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
const MESSAGES_INBOX = 'messages/inbox';
const MESSAGES_ARCHIVE = 'messages/archived_threads';
Facebook_1.default.prototype.getChats = function getChats(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const filesInbox = yield this.parser.listFiles(MESSAGES_INBOX).then((paths) => paths.filter((path) => path.endsWith('message_1.json')));
        const filesArchive = yield this.parser.listFiles(MESSAGES_ARCHIVE).then((paths) => paths.filter((path) => path.endsWith('message_1.json')));
        const files = filesInbox.concat(filesArchive);
        const chats = yield Promise.all(files.map((file, index) => this.parser.parseAsJSON(file, options === null || options === void 0 ? void 0 : options.parsingOptions).then((chat) => ({
            _id: index.toString(),
            title: chat.title,
            participants: chat.participants.map((participant) => participant.name),
        }))));
        return {
            data: chats,
            parsedFiles: files,
        };
    });
};
