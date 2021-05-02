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
const ACCOUNT_PROFILE_FILE = 'profile_information/profile_information.json';
Facebook_1.default.prototype.getProfile = function getProfile(options) {
    var _a, _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function* () {
        const accountDetails = yield this.parser.parseAsJSON(ACCOUNT_PROFILE_FILE, options === null || options === void 0 ? void 0 : options.parsingOptions);
        const account = {
            firstName: accountDetails.profile.name.first_name,
            lastName: accountDetails.profile.name.last_name,
            gender: (_b = (_a = accountDetails.profile) === null || _a === void 0 ? void 0 : _a.gender) === null || _b === void 0 ? void 0 : _b.pronoun,
            mail: (_e = (_d = (_c = accountDetails.profile) === null || _c === void 0 ? void 0 : _c.emails) === null || _d === void 0 ? void 0 : _d.emails) === null || _e === void 0 ? void 0 : _e[0],
            birthday: new Date(accountDetails.profile.birthday.year, accountDetails.profile.birthday.month - 1, accountDetails.profile.birthday.day),
        };
        return {
            data: account,
            parsedFiles: [ACCOUNT_PROFILE_FILE],
        };
    });
};
