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
const ADDRESS_BOOK_FILE = 'about_you/your_address_books.json';
Facebook_1.default.prototype.getContacts = function getContacts(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const contactList = yield this.parser.parseAsJSON(ADDRESS_BOOK_FILE, options === null || options === void 0 ? void 0 : options.parsingOptions);
        const contacts = contactList.address_book.address_book.map((contact) => ({
            displayName: contact.name,
            date: new Date(contact.created_timestamp * 1000),
        }));
        return {
            data: contacts,
            parsedFiles: [ADDRESS_BOOK_FILE],
        };
    });
};
