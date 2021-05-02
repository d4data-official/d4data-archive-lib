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
const ACCOUNT_ACTIVITY_FILE = 'security_and_login_information/account_activity.json';
Facebook_1.default.prototype.getConnections = function getConnections(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const accountActivity = yield this.parser.parseAsJSON(ACCOUNT_ACTIVITY_FILE, options === null || options === void 0 ? void 0 : options.parsingOptions);
        const connections = accountActivity.account_activity
            .map((connection) => ({
            ipAddress: connection.ip_address,
            location: {
                relativePosition: {
                    raw: [connection.city, connection.region, connection.country].filter(item => item).join(' '),
                    city: connection.city,
                    country: connection.country,
                },
            },
            timestamp: new Date(connection.timestamp * 1000),
            browser: connection.user_agent,
        }));
        return {
            data: connections,
            parsedFiles: [ACCOUNT_ACTIVITY_FILE],
        };
    });
};
