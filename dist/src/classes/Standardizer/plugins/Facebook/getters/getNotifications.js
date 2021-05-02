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
const NOTIFICATIONS_FILE = 'about_you/notifications.json';
Facebook_1.default.prototype.getNotifications = function getNotifications(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const notificationList = yield this.parser.parseAsJSON(NOTIFICATIONS_FILE, options === null || options === void 0 ? void 0 : options.parsingOptions);
        const notifications = notificationList.notifications.map((notification) => ({
            content: notification.text,
            timestamp: new Date(notification.timestamp * 1000),
            href: notification.href,
        }));
        return {
            data: notifications,
            parsedFiles: [NOTIFICATIONS_FILE],
        };
    });
};
