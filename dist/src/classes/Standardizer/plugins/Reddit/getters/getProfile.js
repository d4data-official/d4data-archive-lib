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
const ACCOUNT_PROFILE_FILE = 'statistics.csv';
Reddit_1.default.prototype.getProfile = function getProfile(options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const accountDetails = yield this.parser.parseAsCSV(ACCOUNT_PROFILE_FILE, options === null || options === void 0 ? void 0 : options.parsingOptions);
        const account = {
            displayName: (_a = accountDetails[0]) === null || _a === void 0 ? void 0 : _a.value,
            mail: (_b = accountDetails[5]) === null || _b === void 0 ? void 0 : _b.value,
        };
        return {
            data: account,
            parsedFiles: [ACCOUNT_PROFILE_FILE],
        };
    });
};
