"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.EXTERNAL_GETTERS_DIR = exports.PLUGINS_DIR = void 0;
const fs_1 = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const typescript_is_1 = require("typescript-is");
const Services_1 = __importDefault(require("../../types/Services"));
const Parser_1 = __importDefault(require("../Parser"));
const Media_1 = require("../../types/schemas/Media");
exports.PLUGINS_DIR = 'plugins';
exports.EXTERNAL_GETTERS_DIR = 'getters';
class Standardizer {
    constructor(extractedArchivePath) {
        this.path = extractedArchivePath;
        this.parser = new Parser_1.default(this.path);
    }
    getProfile(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getFriends(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getFollowings(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getFollowers(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getContacts(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getWhereabouts(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getNotifications(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getChats(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getChatMessages(chatId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getComments(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getPosts(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getMessages(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getAPIs(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getConnections(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getCommunities(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getSettings(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getReacted(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getMedias(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const formats = {
                [Media_1.MediaType.IMAGE]: ['png', 'jpg', 'jpeg', 'webp', 'ico', 'gif', 'bmp'],
                [Media_1.MediaType.VIDEO]: ['mp4', 'avi', 'webm', 'mov', 'flv', 'mkv'],
                [Media_1.MediaType.AUDIO]: ['ogg', 'mp3', 'aac', 'pcm'],
            };
            const allFormats = Object.values(formats).flat();
            const files = yield this.parser.listFiles('.', { extensionWhitelist: allFormats });
            const medias = files.map((file) => __awaiter(this, void 0, void 0, function* () {
                const parsedPath = path_1.default.parse(file);
                const extension = parsedPath.ext.slice(1);
                return {
                    url: `file:///${file}`,
                    type: Object.keys(formats).find((mediaType) => formats[mediaType].includes(extension)),
                    size: (yield fs_1.promises.stat(file)).size,
                    fileName: parsedPath.base,
                    fileExt: extension,
                };
            }));
            return {
                data: yield Promise.all(medias),
                parsedFiles: [],
            };
        });
    }
    getTransactions(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getBrowserData(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getTasks(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getAuthorizedDevices(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    getMails(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
    static get getters() {
        const excludedKeys = ['constructor'];
        return Object.getOwnPropertyNames(Standardizer.prototype)
            .filter(propertyName => !excludedKeys.includes(propertyName) && propertyName.startsWith('get'));
    }
    /**
     * List all Standardizer plugins contained in the services sub-directory asynchronously
     */
    static getPlugins() {
        return fs_1.default.promises.readdir(path_1.default.resolve(__dirname, exports.PLUGINS_DIR))
            .then(dirContent => dirContent
            .filter(file => Object.values(Services_1.default).includes(path_1.default.parse(file).name))
            .map(service => Promise.resolve().then(() => __importStar(require(path_1.default.resolve(__dirname, exports.PLUGINS_DIR, service, service)))).then(importedModule => importedModule.default)))
            .then(promiseArr => Promise.all(promiseArr));
    }
    /**
     * List all Standardizer plugins contained in the services sub-directory synchronously
     */
    static getPluginsSync() {
        return fs_1.default.readdirSync(path_1.default.resolve(__dirname, exports.PLUGINS_DIR))
            .filter(file => Object.values(Services_1.default).includes(path_1.default.parse(file).name))
            .map(
        // eslint-disable-next-line import/no-dynamic-require,global-require
        service => require(path_1.default.resolve(__dirname, exports.PLUGINS_DIR, service, service)).default);
    }
    /**
     * Import synchronously external getters from given directory.
     */
    static importExternalGettersSync(dirPath) {
        if (!fs_1.default.existsSync(dirPath)) {
            return;
        }
        const getterFiles = fs_1.default.readdirSync(dirPath)
            .filter(file => Standardizer.getters.includes(path_1.default.parse(file).name));
        // eslint-disable-next-line import/no-dynamic-require,global-require
        getterFiles.map(getterFile => require(path_1.default.resolve(dirPath, getterFile)));
    }
    /**
     * Get validation function list to test returned data type of each getters.
     * Validation function return a boolean for valid/invalid data type.
     */
    static getterDataValidators() {
        return {
            getProfile: data => typescript_is_1.is(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _2671(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("current" in object) {
                    path.push("current");
                    var error = _1657(object["current"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'current' in object", path: path.slice(), reason: { type: "missing-property", property: "current" } };
            } {
                if ("history" in object) {
                    path.push("history");
                    var error = sa__1657_ea_1657(object["history"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'history' in object", path: path.slice(), reason: { type: "missing-property", property: "history" } };
            } return null; } function su__undefined__2671_eu(object) { var conditions = [_undefined, _2671]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1267(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("displayName" in object) {
                    path.push("displayName");
                    var error = su__undefined__string_eu(object["displayName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("firstName" in object) {
                    path.push("firstName");
                    var error = su__undefined__string_eu(object["firstName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("lastName" in object) {
                    path.push("lastName");
                    var error = su__undefined__string_eu(object["lastName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("username" in object) {
                    path.push("username");
                    var error = su__undefined__string_eu(object["username"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("nickname" in object) {
                    path.push("nickname");
                    var error = su__undefined__string_eu(object["nickname"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("gender" in object) {
                    path.push("gender");
                    var error = su__undefined__string_eu(object["gender"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("birthday" in object) {
                    path.push("birthday");
                    var error = su__undefined__date_eu(object["birthday"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("phone" in object) {
                    path.push("phone");
                    var error = su__undefined__string_eu(object["phone"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("mail" in object) {
                    path.push("mail");
                    var error = su__undefined__string_eu(object["mail"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("date" in object) {
                    path.push("date");
                    var error = su__undefined__date_eu(object["date"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("profilePicture" in object) {
                    path.push("profilePicture");
                    var error = su__undefined__2671_eu(object["profilePicture"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } var error = _1267(object); return error; }),
            getFriends: data => typescript_is_1.is(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _2671(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("current" in object) {
                    path.push("current");
                    var error = _1657(object["current"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'current' in object", path: path.slice(), reason: { type: "missing-property", property: "current" } };
            } {
                if ("history" in object) {
                    path.push("history");
                    var error = sa__1657_ea_1657(object["history"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'history' in object", path: path.slice(), reason: { type: "missing-property", property: "history" } };
            } return null; } function su__undefined__2671_eu(object) { var conditions = [_undefined, _2671]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1267(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("displayName" in object) {
                    path.push("displayName");
                    var error = su__undefined__string_eu(object["displayName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("firstName" in object) {
                    path.push("firstName");
                    var error = su__undefined__string_eu(object["firstName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("lastName" in object) {
                    path.push("lastName");
                    var error = su__undefined__string_eu(object["lastName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("username" in object) {
                    path.push("username");
                    var error = su__undefined__string_eu(object["username"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("nickname" in object) {
                    path.push("nickname");
                    var error = su__undefined__string_eu(object["nickname"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("gender" in object) {
                    path.push("gender");
                    var error = su__undefined__string_eu(object["gender"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("birthday" in object) {
                    path.push("birthday");
                    var error = su__undefined__date_eu(object["birthday"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("phone" in object) {
                    path.push("phone");
                    var error = su__undefined__string_eu(object["phone"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("mail" in object) {
                    path.push("mail");
                    var error = su__undefined__string_eu(object["mail"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("date" in object) {
                    path.push("date");
                    var error = su__undefined__date_eu(object["date"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("profilePicture" in object) {
                    path.push("profilePicture");
                    var error = su__undefined__2671_eu(object["profilePicture"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1267_ea_1267(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1267(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1267_ea_1267(object); return error; }),
            getFollowings: data => typescript_is_1.is(data, object => { var path = ["data"]; function _2674(object) { ; if (object !== "contact")
                return { message: "validation failed at " + path.join(".") + ": expected string 'contact'", path: path.slice(), reason: { type: "string-literal", value: "contact" } };
            else
                return null; } function _2676(object) { ; if (object !== "community")
                return { message: "validation failed at " + path.join(".") + ": expected string 'community'", path: path.slice(), reason: { type: "string-literal", value: "community" } };
            else
                return null; } function su__2674__2676_eu(object) { var conditions = [_2674, _2676]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _2671(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("current" in object) {
                    path.push("current");
                    var error = _1657(object["current"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'current' in object", path: path.slice(), reason: { type: "missing-property", property: "current" } };
            } {
                if ("history" in object) {
                    path.push("history");
                    var error = sa__1657_ea_1657(object["history"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'history' in object", path: path.slice(), reason: { type: "missing-property", property: "history" } };
            } return null; } function su__undefined__2671_eu(object) { var conditions = [_undefined, _2671]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1267(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("displayName" in object) {
                    path.push("displayName");
                    var error = su__undefined__string_eu(object["displayName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("firstName" in object) {
                    path.push("firstName");
                    var error = su__undefined__string_eu(object["firstName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("lastName" in object) {
                    path.push("lastName");
                    var error = su__undefined__string_eu(object["lastName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("username" in object) {
                    path.push("username");
                    var error = su__undefined__string_eu(object["username"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("nickname" in object) {
                    path.push("nickname");
                    var error = su__undefined__string_eu(object["nickname"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("gender" in object) {
                    path.push("gender");
                    var error = su__undefined__string_eu(object["gender"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("birthday" in object) {
                    path.push("birthday");
                    var error = su__undefined__date_eu(object["birthday"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("phone" in object) {
                    path.push("phone");
                    var error = su__undefined__string_eu(object["phone"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("mail" in object) {
                    path.push("mail");
                    var error = su__undefined__string_eu(object["mail"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("date" in object) {
                    path.push("date");
                    var error = su__undefined__date_eu(object["date"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("profilePicture" in object) {
                    path.push("profilePicture");
                    var error = su__undefined__2671_eu(object["profilePicture"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function _1436(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("joinedDate" in object) {
                    path.push("joinedDate");
                    var error = su__undefined__date_eu(object["joinedDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__1267__1436_eu(object) { var conditions = [_1267, _1436]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1310(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("type" in object) {
                    path.push("type");
                    var error = su__2674__2676_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } {
                if ("entity" in object) {
                    path.push("entity");
                    var error = su__1267__1436_eu(object["entity"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'entity' in object", path: path.slice(), reason: { type: "missing-property", property: "entity" } };
            } {
                if ("followedSince" in object) {
                    path.push("followedSince");
                    var error = su__undefined__date_eu(object["followedSince"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1310_ea_1310(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1310(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1310_ea_1310(object); return error; }),
            getFollowers: data => typescript_is_1.is(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _2671(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("current" in object) {
                    path.push("current");
                    var error = _1657(object["current"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'current' in object", path: path.slice(), reason: { type: "missing-property", property: "current" } };
            } {
                if ("history" in object) {
                    path.push("history");
                    var error = sa__1657_ea_1657(object["history"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'history' in object", path: path.slice(), reason: { type: "missing-property", property: "history" } };
            } return null; } function su__undefined__2671_eu(object) { var conditions = [_undefined, _2671]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1267(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("displayName" in object) {
                    path.push("displayName");
                    var error = su__undefined__string_eu(object["displayName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("firstName" in object) {
                    path.push("firstName");
                    var error = su__undefined__string_eu(object["firstName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("lastName" in object) {
                    path.push("lastName");
                    var error = su__undefined__string_eu(object["lastName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("username" in object) {
                    path.push("username");
                    var error = su__undefined__string_eu(object["username"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("nickname" in object) {
                    path.push("nickname");
                    var error = su__undefined__string_eu(object["nickname"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("gender" in object) {
                    path.push("gender");
                    var error = su__undefined__string_eu(object["gender"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("birthday" in object) {
                    path.push("birthday");
                    var error = su__undefined__date_eu(object["birthday"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("phone" in object) {
                    path.push("phone");
                    var error = su__undefined__string_eu(object["phone"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("mail" in object) {
                    path.push("mail");
                    var error = su__undefined__string_eu(object["mail"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("date" in object) {
                    path.push("date");
                    var error = su__undefined__date_eu(object["date"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("profilePicture" in object) {
                    path.push("profilePicture");
                    var error = su__undefined__2671_eu(object["profilePicture"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1267_ea_1267(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1267(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1267_ea_1267(object); return error; }),
            getContacts: data => typescript_is_1.is(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _2671(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("current" in object) {
                    path.push("current");
                    var error = _1657(object["current"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'current' in object", path: path.slice(), reason: { type: "missing-property", property: "current" } };
            } {
                if ("history" in object) {
                    path.push("history");
                    var error = sa__1657_ea_1657(object["history"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'history' in object", path: path.slice(), reason: { type: "missing-property", property: "history" } };
            } return null; } function su__undefined__2671_eu(object) { var conditions = [_undefined, _2671]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1267(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("displayName" in object) {
                    path.push("displayName");
                    var error = su__undefined__string_eu(object["displayName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("firstName" in object) {
                    path.push("firstName");
                    var error = su__undefined__string_eu(object["firstName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("lastName" in object) {
                    path.push("lastName");
                    var error = su__undefined__string_eu(object["lastName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("username" in object) {
                    path.push("username");
                    var error = su__undefined__string_eu(object["username"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("nickname" in object) {
                    path.push("nickname");
                    var error = su__undefined__string_eu(object["nickname"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("gender" in object) {
                    path.push("gender");
                    var error = su__undefined__string_eu(object["gender"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("birthday" in object) {
                    path.push("birthday");
                    var error = su__undefined__date_eu(object["birthday"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("phone" in object) {
                    path.push("phone");
                    var error = su__undefined__string_eu(object["phone"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("mail" in object) {
                    path.push("mail");
                    var error = su__undefined__string_eu(object["mail"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("date" in object) {
                    path.push("date");
                    var error = su__undefined__date_eu(object["date"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("profilePicture" in object) {
                    path.push("profilePicture");
                    var error = su__undefined__2671_eu(object["profilePicture"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1267_ea_1267(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1267(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1267_ea_1267(object); return error; }),
            getWhereabouts: data => typescript_is_1.is(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__string__number_eu(object) { var conditions = [_string, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2681(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("latitude" in object) {
                    path.push("latitude");
                    var error = su__string__number_eu(object["latitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'latitude' in object", path: path.slice(), reason: { type: "missing-property", property: "latitude" } };
            } {
                if ("longitude" in object) {
                    path.push("longitude");
                    var error = su__string__number_eu(object["longitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'longitude' in object", path: path.slice(), reason: { type: "missing-property", property: "longitude" } };
            } return null; } function su__undefined__2681_eu(object) { var conditions = [_undefined, _2681]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2683(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("raw" in object) {
                    path.push("raw");
                    var error = _string(object["raw"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'raw' in object", path: path.slice(), reason: { type: "missing-property", property: "raw" } };
            } {
                if ("city" in object) {
                    path.push("city");
                    var error = su__undefined__string_eu(object["city"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("country" in object) {
                    path.push("country");
                    var error = su__undefined__string_eu(object["country"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("address" in object) {
                    path.push("address");
                    var error = su__undefined__string_eu(object["address"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("zipcode" in object) {
                    path.push("zipcode");
                    var error = su__undefined__string_eu(object["zipcode"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2683_eu(object) { var conditions = [_undefined, _2683]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2680(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("absolutePosition" in object) {
                    path.push("absolutePosition");
                    var error = su__undefined__2681_eu(object["absolutePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("relativePosition" in object) {
                    path.push("relativePosition");
                    var error = su__undefined__2683_eu(object["relativePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function _1324(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("location" in object) {
                    path.push("location");
                    var error = _2680(object["location"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'location' in object", path: path.slice(), reason: { type: "missing-property", property: "location" } };
            } {
                if ("recordDate" in object) {
                    path.push("recordDate");
                    var error = _date(object["recordDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'recordDate' in object", path: path.slice(), reason: { type: "missing-property", property: "recordDate" } };
            } return null; } function sa__1324_ea_1324(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1324(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1324_ea_1324(object); return error; }),
            getNotifications: data => typescript_is_1.is(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1338(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("content" in object) {
                    path.push("content");
                    var error = su__undefined__string_eu(object["content"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("notificationDate" in object) {
                    path.push("notificationDate");
                    var error = su__undefined__date_eu(object["notificationDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("href" in object) {
                    path.push("href");
                    var error = su__undefined__string_eu(object["href"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1338_ea_1338(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1338(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1338_ea_1338(object); return error; }),
            getChats: data => typescript_is_1.is(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _string(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _1352(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("_id" in object) {
                    path.push("_id");
                    var error = su__undefined__string_eu(object["_id"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("title" in object) {
                    path.push("title");
                    var error = _string(object["title"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'title' in object", path: path.slice(), reason: { type: "missing-property", property: "title" } };
            } {
                if ("participants" in object) {
                    path.push("participants");
                    var error = sa__string_ea_11(object["participants"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'participants' in object", path: path.slice(), reason: { type: "missing-property", property: "participants" } };
            } return null; } function sa__1352_ea_1352(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1352(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1352_ea_1352(object); return error; }),
            getChatMessages: data => typescript_is_1.is(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__1657_ea_1657_1657_1657_eu(object) { var conditions = [_undefined, sa__1657_ea_1657]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2686(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("description" in object) {
                    path.push("description");
                    var error = su__undefined__string_eu(object["description"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("reactionDate" in object) {
                    path.push("reactionDate");
                    var error = su__undefined__date_eu(object["reactionDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("medias" in object) {
                    path.push("medias");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["medias"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2686_ea_2686(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2686(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__2686_ea_2686_2686_2686_eu(object) { var conditions = [_undefined, sa__2686_ea_2686]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1366(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("sender" in object) {
                    path.push("sender");
                    var error = _string(object["sender"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'sender' in object", path: path.slice(), reason: { type: "missing-property", property: "sender" } };
            } {
                if ("text" in object) {
                    path.push("text");
                    var error = su__undefined__string_eu(object["text"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("metaData" in object) {
                    path.push("metaData");
                    var error = su__undefined__string_eu(object["metaData"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("sendAt" in object) {
                    path.push("sendAt");
                    var error = _date(object["sendAt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("reactions" in object) {
                    path.push("reactions");
                    var error = su__undefined_sa__2686_ea_2686_2686_2686_eu(object["reactions"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1366_ea_1366(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1366(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1366_ea_1366(object); return error; }),
            getComments: data => typescript_is_1.is(data, object => { var path = ["data"]; function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__1657_ea_1657_1657_1657_eu(object) { var conditions = [_undefined, sa__1657_ea_1657]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2686(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("description" in object) {
                    path.push("description");
                    var error = su__undefined__string_eu(object["description"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("reactionDate" in object) {
                    path.push("reactionDate");
                    var error = su__undefined__date_eu(object["reactionDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("medias" in object) {
                    path.push("medias");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["medias"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2686_ea_2686(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2686(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__2686_ea_2686_2686_2686_eu(object) { var conditions = [_undefined, sa__2686_ea_2686]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _string(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__string_ea_11_11_11_eu(object) { var conditions = [_undefined, sa__string_ea_11]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__string__number_eu(object) { var conditions = [_string, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2681(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("latitude" in object) {
                    path.push("latitude");
                    var error = su__string__number_eu(object["latitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'latitude' in object", path: path.slice(), reason: { type: "missing-property", property: "latitude" } };
            } {
                if ("longitude" in object) {
                    path.push("longitude");
                    var error = su__string__number_eu(object["longitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'longitude' in object", path: path.slice(), reason: { type: "missing-property", property: "longitude" } };
            } return null; } function su__undefined__2681_eu(object) { var conditions = [_undefined, _2681]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2683(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("raw" in object) {
                    path.push("raw");
                    var error = _string(object["raw"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'raw' in object", path: path.slice(), reason: { type: "missing-property", property: "raw" } };
            } {
                if ("city" in object) {
                    path.push("city");
                    var error = su__undefined__string_eu(object["city"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("country" in object) {
                    path.push("country");
                    var error = su__undefined__string_eu(object["country"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("address" in object) {
                    path.push("address");
                    var error = su__undefined__string_eu(object["address"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("zipcode" in object) {
                    path.push("zipcode");
                    var error = su__undefined__string_eu(object["zipcode"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2683_eu(object) { var conditions = [_undefined, _2683]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2680(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("absolutePosition" in object) {
                    path.push("absolutePosition");
                    var error = su__undefined__2681_eu(object["absolutePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("relativePosition" in object) {
                    path.push("relativePosition");
                    var error = su__undefined__2683_eu(object["relativePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2680_eu(object) { var conditions = [_undefined, _2680]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2693(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = su__undefined__string_eu(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("startDate" in object) {
                    path.push("startDate");
                    var error = su__undefined__date_eu(object["startDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("endDate" in object) {
                    path.push("endDate");
                    var error = su__undefined__date_eu(object["endDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("participants" in object) {
                    path.push("participants");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["participants"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2693_eu(object) { var conditions = [_undefined, _2693]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2690(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("reactions" in object) {
                    path.push("reactions");
                    var error = su__undefined_sa__2686_ea_2686_2686_2686_eu(object["reactions"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("links" in object) {
                    path.push("links");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["links"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("userTags" in object) {
                    path.push("userTags");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["userTags"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("locations" in object) {
                    path.push("locations");
                    var error = su__undefined__2680_eu(object["locations"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("events" in object) {
                    path.push("events");
                    var error = su__undefined__2693_eu(object["events"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("medias" in object) {
                    path.push("medias");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["medias"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2690_eu(object) { var conditions = [_undefined, _2690]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1380(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("creationDate" in object) {
                    path.push("creationDate");
                    var error = _date(object["creationDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'creationDate' in object", path: path.slice(), reason: { type: "missing-property", property: "creationDate" } };
            } {
                if ("sender" in object) {
                    path.push("sender");
                    var error = _string(object["sender"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'sender' in object", path: path.slice(), reason: { type: "missing-property", property: "sender" } };
            } {
                if ("title" in object) {
                    path.push("title");
                    var error = su__undefined__string_eu(object["title"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("content" in object) {
                    path.push("content");
                    var error = su__undefined__string_eu(object["content"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("metaData" in object) {
                    path.push("metaData");
                    var error = su__undefined__2690_eu(object["metaData"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1380_ea_1380(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1380(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1380_ea_1380(object); return error; }),
            getPosts: data => typescript_is_1.is(data, object => { var path = ["data"]; function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__1657_ea_1657_1657_1657_eu(object) { var conditions = [_undefined, sa__1657_ea_1657]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2686(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("description" in object) {
                    path.push("description");
                    var error = su__undefined__string_eu(object["description"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("reactionDate" in object) {
                    path.push("reactionDate");
                    var error = su__undefined__date_eu(object["reactionDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("medias" in object) {
                    path.push("medias");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["medias"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2686_ea_2686(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2686(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__2686_ea_2686_2686_2686_eu(object) { var conditions = [_undefined, sa__2686_ea_2686]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _string(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__string_ea_11_11_11_eu(object) { var conditions = [_undefined, sa__string_ea_11]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__string__number_eu(object) { var conditions = [_string, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2681(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("latitude" in object) {
                    path.push("latitude");
                    var error = su__string__number_eu(object["latitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'latitude' in object", path: path.slice(), reason: { type: "missing-property", property: "latitude" } };
            } {
                if ("longitude" in object) {
                    path.push("longitude");
                    var error = su__string__number_eu(object["longitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'longitude' in object", path: path.slice(), reason: { type: "missing-property", property: "longitude" } };
            } return null; } function su__undefined__2681_eu(object) { var conditions = [_undefined, _2681]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2683(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("raw" in object) {
                    path.push("raw");
                    var error = _string(object["raw"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'raw' in object", path: path.slice(), reason: { type: "missing-property", property: "raw" } };
            } {
                if ("city" in object) {
                    path.push("city");
                    var error = su__undefined__string_eu(object["city"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("country" in object) {
                    path.push("country");
                    var error = su__undefined__string_eu(object["country"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("address" in object) {
                    path.push("address");
                    var error = su__undefined__string_eu(object["address"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("zipcode" in object) {
                    path.push("zipcode");
                    var error = su__undefined__string_eu(object["zipcode"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2683_eu(object) { var conditions = [_undefined, _2683]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2680(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("absolutePosition" in object) {
                    path.push("absolutePosition");
                    var error = su__undefined__2681_eu(object["absolutePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("relativePosition" in object) {
                    path.push("relativePosition");
                    var error = su__undefined__2683_eu(object["relativePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2680_eu(object) { var conditions = [_undefined, _2680]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2693(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = su__undefined__string_eu(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("startDate" in object) {
                    path.push("startDate");
                    var error = su__undefined__date_eu(object["startDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("endDate" in object) {
                    path.push("endDate");
                    var error = su__undefined__date_eu(object["endDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("participants" in object) {
                    path.push("participants");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["participants"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2693_eu(object) { var conditions = [_undefined, _2693]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2690(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("reactions" in object) {
                    path.push("reactions");
                    var error = su__undefined_sa__2686_ea_2686_2686_2686_eu(object["reactions"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("links" in object) {
                    path.push("links");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["links"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("userTags" in object) {
                    path.push("userTags");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["userTags"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("locations" in object) {
                    path.push("locations");
                    var error = su__undefined__2680_eu(object["locations"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("events" in object) {
                    path.push("events");
                    var error = su__undefined__2693_eu(object["events"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("medias" in object) {
                    path.push("medias");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["medias"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2690_eu(object) { var conditions = [_undefined, _2690]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1380(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("creationDate" in object) {
                    path.push("creationDate");
                    var error = _date(object["creationDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'creationDate' in object", path: path.slice(), reason: { type: "missing-property", property: "creationDate" } };
            } {
                if ("sender" in object) {
                    path.push("sender");
                    var error = _string(object["sender"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'sender' in object", path: path.slice(), reason: { type: "missing-property", property: "sender" } };
            } {
                if ("title" in object) {
                    path.push("title");
                    var error = su__undefined__string_eu(object["title"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("content" in object) {
                    path.push("content");
                    var error = su__undefined__string_eu(object["content"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("metaData" in object) {
                    path.push("metaData");
                    var error = su__undefined__2690_eu(object["metaData"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1380_ea_1380(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1380(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1380_ea_1380(object); return error; }),
            getMessages: data => typescript_is_1.is(data, object => { var path = ["data"]; function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1394(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("creationDate" in object) {
                    path.push("creationDate");
                    var error = _date(object["creationDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'creationDate' in object", path: path.slice(), reason: { type: "missing-property", property: "creationDate" } };
            } {
                if ("sender" in object) {
                    path.push("sender");
                    var error = _string(object["sender"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'sender' in object", path: path.slice(), reason: { type: "missing-property", property: "sender" } };
            } {
                if ("receiver" in object) {
                    path.push("receiver");
                    var error = _string(object["receiver"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'receiver' in object", path: path.slice(), reason: { type: "missing-property", property: "receiver" } };
            } {
                if ("title" in object) {
                    path.push("title");
                    var error = su__undefined__string_eu(object["title"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("content" in object) {
                    path.push("content");
                    var error = _string(object["content"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'content' in object", path: path.slice(), reason: { type: "missing-property", property: "content" } };
            } return null; } function sa__1394_ea_1394(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1394(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1394_ea_1394(object); return error; }),
            getAPIs: data => typescript_is_1.is(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1408(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("linkingDate" in object) {
                    path.push("linkingDate");
                    var error = su__undefined__date_eu(object["linkingDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1408_ea_1408(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1408(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1408_ea_1408(object); return error; }),
            getConnections: data => typescript_is_1.is(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__string__number_eu(object) { var conditions = [_string, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2681(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("latitude" in object) {
                    path.push("latitude");
                    var error = su__string__number_eu(object["latitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'latitude' in object", path: path.slice(), reason: { type: "missing-property", property: "latitude" } };
            } {
                if ("longitude" in object) {
                    path.push("longitude");
                    var error = su__string__number_eu(object["longitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'longitude' in object", path: path.slice(), reason: { type: "missing-property", property: "longitude" } };
            } return null; } function su__undefined__2681_eu(object) { var conditions = [_undefined, _2681]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2683(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("raw" in object) {
                    path.push("raw");
                    var error = _string(object["raw"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'raw' in object", path: path.slice(), reason: { type: "missing-property", property: "raw" } };
            } {
                if ("city" in object) {
                    path.push("city");
                    var error = su__undefined__string_eu(object["city"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("country" in object) {
                    path.push("country");
                    var error = su__undefined__string_eu(object["country"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("address" in object) {
                    path.push("address");
                    var error = su__undefined__string_eu(object["address"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("zipcode" in object) {
                    path.push("zipcode");
                    var error = su__undefined__string_eu(object["zipcode"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2683_eu(object) { var conditions = [_undefined, _2683]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2680(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("absolutePosition" in object) {
                    path.push("absolutePosition");
                    var error = su__undefined__2681_eu(object["absolutePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("relativePosition" in object) {
                    path.push("relativePosition");
                    var error = su__undefined__2683_eu(object["relativePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2680_eu(object) { var conditions = [_undefined, _2680]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1422(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("ipAddress" in object) {
                    path.push("ipAddress");
                    var error = _string(object["ipAddress"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'ipAddress' in object", path: path.slice(), reason: { type: "missing-property", property: "ipAddress" } };
            } {
                if ("location" in object) {
                    path.push("location");
                    var error = su__undefined__2680_eu(object["location"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("browser" in object) {
                    path.push("browser");
                    var error = su__undefined__string_eu(object["browser"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("timestamp" in object) {
                    path.push("timestamp");
                    var error = su__undefined__date_eu(object["timestamp"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'timestamp' in object", path: path.slice(), reason: { type: "missing-property", property: "timestamp" } };
            } return null; } function sa__1422_ea_1422(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1422(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1422_ea_1422(object); return error; }),
            getCommunities: data => typescript_is_1.is(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1436(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("joinedDate" in object) {
                    path.push("joinedDate");
                    var error = su__undefined__date_eu(object["joinedDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1436_ea_1436(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1436(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1436_ea_1436(object); return error; }),
            getSettings: data => typescript_is_1.is(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1450(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("value" in object) {
                    path.push("value");
                    var error = su__undefined__string_eu(object["value"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1450_ea_1450(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1450(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1450_ea_1450(object); return error; }),
            getReacted: data => typescript_is_1.is(data, object => { var path = ["data"]; function _2676(object) { ; if (object !== "community")
                return { message: "validation failed at " + path.join(".") + ": expected string 'community'", path: path.slice(), reason: { type: "string-literal", value: "community" } };
            else
                return null; } function _2695(object) { ; if (object !== "media")
                return { message: "validation failed at " + path.join(".") + ": expected string 'media'", path: path.slice(), reason: { type: "string-literal", value: "media" } };
            else
                return null; } function _2697(object) { ; if (object !== "post")
                return { message: "validation failed at " + path.join(".") + ": expected string 'post'", path: path.slice(), reason: { type: "string-literal", value: "post" } };
            else
                return null; } function _2699(object) { ; if (object !== "externalLink")
                return { message: "validation failed at " + path.join(".") + ": expected string 'externalLink'", path: path.slice(), reason: { type: "string-literal", value: "externalLink" } };
            else
                return null; } function su__2676__2695__2697__2699_eu(object) { var conditions = [_2676, _2695, _2697, _2699]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__1657_ea_1657_1657_1657_eu(object) { var conditions = [_undefined, sa__1657_ea_1657]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2686(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("description" in object) {
                    path.push("description");
                    var error = su__undefined__string_eu(object["description"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("reactionDate" in object) {
                    path.push("reactionDate");
                    var error = su__undefined__date_eu(object["reactionDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("medias" in object) {
                    path.push("medias");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["medias"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2686_ea_2686(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2686(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__2686_ea_2686_2686_2686_eu(object) { var conditions = [_undefined, sa__2686_ea_2686]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _string(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__string_ea_11_11_11_eu(object) { var conditions = [_undefined, sa__string_ea_11]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__string__number_eu(object) { var conditions = [_string, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2681(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("latitude" in object) {
                    path.push("latitude");
                    var error = su__string__number_eu(object["latitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'latitude' in object", path: path.slice(), reason: { type: "missing-property", property: "latitude" } };
            } {
                if ("longitude" in object) {
                    path.push("longitude");
                    var error = su__string__number_eu(object["longitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'longitude' in object", path: path.slice(), reason: { type: "missing-property", property: "longitude" } };
            } return null; } function su__undefined__2681_eu(object) { var conditions = [_undefined, _2681]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2683(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("raw" in object) {
                    path.push("raw");
                    var error = _string(object["raw"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'raw' in object", path: path.slice(), reason: { type: "missing-property", property: "raw" } };
            } {
                if ("city" in object) {
                    path.push("city");
                    var error = su__undefined__string_eu(object["city"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("country" in object) {
                    path.push("country");
                    var error = su__undefined__string_eu(object["country"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("address" in object) {
                    path.push("address");
                    var error = su__undefined__string_eu(object["address"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("zipcode" in object) {
                    path.push("zipcode");
                    var error = su__undefined__string_eu(object["zipcode"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2683_eu(object) { var conditions = [_undefined, _2683]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2680(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("absolutePosition" in object) {
                    path.push("absolutePosition");
                    var error = su__undefined__2681_eu(object["absolutePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("relativePosition" in object) {
                    path.push("relativePosition");
                    var error = su__undefined__2683_eu(object["relativePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2680_eu(object) { var conditions = [_undefined, _2680]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2693(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = su__undefined__string_eu(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("startDate" in object) {
                    path.push("startDate");
                    var error = su__undefined__date_eu(object["startDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("endDate" in object) {
                    path.push("endDate");
                    var error = su__undefined__date_eu(object["endDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("participants" in object) {
                    path.push("participants");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["participants"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2693_eu(object) { var conditions = [_undefined, _2693]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2690(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("reactions" in object) {
                    path.push("reactions");
                    var error = su__undefined_sa__2686_ea_2686_2686_2686_eu(object["reactions"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("links" in object) {
                    path.push("links");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["links"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("userTags" in object) {
                    path.push("userTags");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["userTags"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("locations" in object) {
                    path.push("locations");
                    var error = su__undefined__2680_eu(object["locations"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("events" in object) {
                    path.push("events");
                    var error = su__undefined__2693_eu(object["events"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("medias" in object) {
                    path.push("medias");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["medias"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2690_eu(object) { var conditions = [_undefined, _2690]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1380(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("creationDate" in object) {
                    path.push("creationDate");
                    var error = _date(object["creationDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'creationDate' in object", path: path.slice(), reason: { type: "missing-property", property: "creationDate" } };
            } {
                if ("sender" in object) {
                    path.push("sender");
                    var error = _string(object["sender"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'sender' in object", path: path.slice(), reason: { type: "missing-property", property: "sender" } };
            } {
                if ("title" in object) {
                    path.push("title");
                    var error = su__undefined__string_eu(object["title"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("content" in object) {
                    path.push("content");
                    var error = su__undefined__string_eu(object["content"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("metaData" in object) {
                    path.push("metaData");
                    var error = su__undefined__2690_eu(object["metaData"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function _1436(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("joinedDate" in object) {
                    path.push("joinedDate");
                    var error = su__undefined__date_eu(object["joinedDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__string__1380__1436__1657_eu(object) { var conditions = [_string, _1380, _1436, _1657]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined__2686_eu(object) { var conditions = [_undefined, _2686]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1464(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("type" in object) {
                    path.push("type");
                    var error = su__2676__2695__2697__2699_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } {
                if ("entity" in object) {
                    path.push("entity");
                    var error = su__string__1380__1436__1657_eu(object["entity"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'entity' in object", path: path.slice(), reason: { type: "missing-property", property: "entity" } };
            } {
                if ("reaction" in object) {
                    path.push("reaction");
                    var error = su__undefined__2686_eu(object["reaction"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1464_ea_1464(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1464(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1464_ea_1464(object); return error; }),
            getMedias: data => typescript_is_1.is(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1657_ea_1657(object); return error; }),
            getTransactions: data => typescript_is_1.is(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2370(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("date" in object) {
                    path.push("date");
                    var error = su__undefined__number_eu(object["date"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("description" in object) {
                    path.push("description");
                    var error = su__undefined__string_eu(object["description"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("currency" in object) {
                    path.push("currency");
                    var error = _string(object["currency"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'currency' in object", path: path.slice(), reason: { type: "missing-property", property: "currency" } };
            } {
                if ("value" in object) {
                    path.push("value");
                    var error = _number(object["value"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'value' in object", path: path.slice(), reason: { type: "missing-property", property: "value" } };
            } {
                if ("status" in object) {
                    path.push("status");
                    var error = su__undefined__string_eu(object["status"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("paymentMethod" in object) {
                    path.push("paymentMethod");
                    var error = su__undefined__string_eu(object["paymentMethod"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("product" in object) {
                    path.push("product");
                    var error = _string(object["product"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'product' in object", path: path.slice(), reason: { type: "missing-property", property: "product" } };
            } return null; } function sa__2370_ea_2370(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2370(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__2370_ea_2370(object); return error; }),
            getBrowserData: data => typescript_is_1.is(data, object => { var path = ["data"]; function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2704(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("timestamp" in object) {
                    path.push("timestamp");
                    var error = _number(object["timestamp"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'timestamp' in object", path: path.slice(), reason: { type: "missing-property", property: "timestamp" } };
            } {
                if ("title" in object) {
                    path.push("title");
                    var error = _string(object["title"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'title' in object", path: path.slice(), reason: { type: "missing-property", property: "title" } };
            } {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("faviconUrl" in object) {
                    path.push("faviconUrl");
                    var error = su__undefined__string_eu(object["faviconUrl"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("clientId" in object) {
                    path.push("clientId");
                    var error = su__undefined__string_eu(object["clientId"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2704_ea_2704(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2704(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _false(object) { ; if (object !== false)
                return { message: "validation failed at " + path.join(".") + ": expected false", path: path.slice(), reason: { type: "boolean-literal", value: false } };
            else
                return null; } function _true(object) { ; if (object !== true)
                return { message: "validation failed at " + path.join(".") + ": expected true", path: path.slice(), reason: { type: "boolean-literal", value: true } };
            else
                return null; } function su__undefined__15__17_eu(object) { var conditions = [_undefined, _false, _true]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2706(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("enabled" in object) {
                    path.push("enabled");
                    var error = su__undefined__15__17_eu(object["enabled"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("incognitoEnabled" in object) {
                    path.push("incognitoEnabled");
                    var error = su__undefined__15__17_eu(object["incognitoEnabled"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("version" in object) {
                    path.push("version");
                    var error = su__undefined__string_eu(object["version"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("websiteUrl" in object) {
                    path.push("websiteUrl");
                    var error = su__undefined__string_eu(object["websiteUrl"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2706_ea_2706(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2706(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2713(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("languageCode" in object) {
                    path.push("languageCode");
                    var error = su__undefined__string_eu(object["languageCode"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("city" in object) {
                    path.push("city");
                    var error = su__undefined__string_eu(object["city"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("country" in object) {
                    path.push("country");
                    var error = su__undefined__string_eu(object["country"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("line1" in object) {
                    path.push("line1");
                    var error = su__undefined__string_eu(object["line1"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("line2" in object) {
                    path.push("line2");
                    var error = su__undefined__string_eu(object["line2"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("state" in object) {
                    path.push("state");
                    var error = su__undefined__string_eu(object["state"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("streetAddress" in object) {
                    path.push("streetAddress");
                    var error = su__undefined__string_eu(object["streetAddress"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("zip" in object) {
                    path.push("zip");
                    var error = su__undefined__string_eu(object["zip"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2713_eu(object) { var conditions = [_undefined, _2713]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2708(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("useCount" in object) {
                    path.push("useCount");
                    var error = su__undefined__number_eu(object["useCount"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("lastUseDate" in object) {
                    path.push("lastUseDate");
                    var error = su__undefined__number_eu(object["lastUseDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("firstName" in object) {
                    path.push("firstName");
                    var error = su__undefined__string_eu(object["firstName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("lastName" in object) {
                    path.push("lastName");
                    var error = su__undefined__string_eu(object["lastName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fullName" in object) {
                    path.push("fullName");
                    var error = su__undefined__string_eu(object["fullName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("phoneNumber" in object) {
                    path.push("phoneNumber");
                    var error = su__undefined__string_eu(object["phoneNumber"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("email" in object) {
                    path.push("email");
                    var error = su__undefined__string_eu(object["email"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("companyName" in object) {
                    path.push("companyName");
                    var error = su__undefined__string_eu(object["companyName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("address" in object) {
                    path.push("address");
                    var error = su__undefined__2713_eu(object["address"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2708_ea_2708(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2708(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _unknown() { return null; } function _2710(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("value" in object) {
                    path.push("value");
                    var error = _unknown(object["value"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'value' in object", path: path.slice(), reason: { type: "missing-property", property: "value" } };
            } return null; } function sa__2710_ea_2710(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2710(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _2712(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("websiteUrl" in object) {
                    path.push("websiteUrl");
                    var error = su__undefined__string_eu(object["websiteUrl"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function _2384(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("history" in object) {
                    path.push("history");
                    var error = sa__2704_ea_2704(object["history"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'history' in object", path: path.slice(), reason: { type: "missing-property", property: "history" } };
            } {
                if ("extensions" in object) {
                    path.push("extensions");
                    var error = sa__2706_ea_2706(object["extensions"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'extensions' in object", path: path.slice(), reason: { type: "missing-property", property: "extensions" } };
            } {
                if ("savedForms" in object) {
                    path.push("savedForms");
                    var error = sa__2708_ea_2708(object["savedForms"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'savedForms' in object", path: path.slice(), reason: { type: "missing-property", property: "savedForms" } };
            } {
                if ("preferences" in object) {
                    path.push("preferences");
                    var error = sa__2710_ea_2710(object["preferences"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'preferences' in object", path: path.slice(), reason: { type: "missing-property", property: "preferences" } };
            } {
                if ("theme" in object) {
                    path.push("theme");
                    var error = _2712(object["theme"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'theme' in object", path: path.slice(), reason: { type: "missing-property", property: "theme" } };
            } return null; } var error = _2384(object); return error; }),
            getTasks: data => typescript_is_1.is(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined_sa__2397_ea_2397_2397_2397_eu(object) { var conditions = [_undefined, sa__2397_ea_2397]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2397(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("createdAt" in object) {
                    path.push("createdAt");
                    var error = su__undefined__date_eu(object["createdAt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("updateAt" in object) {
                    path.push("updateAt");
                    var error = su__undefined__number_eu(object["updateAt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("endAt" in object) {
                    path.push("endAt");
                    var error = su__undefined__number_eu(object["endAt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("dueDate" in object) {
                    path.push("dueDate");
                    var error = su__undefined__date_eu(object["dueDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("status" in object) {
                    path.push("status");
                    var error = _string(object["status"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'status' in object", path: path.slice(), reason: { type: "missing-property", property: "status" } };
            } {
                if ("description" in object) {
                    path.push("description");
                    var error = su__undefined__string_eu(object["description"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("taskType" in object) {
                    path.push("taskType");
                    var error = su__undefined__string_eu(object["taskType"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("children" in object) {
                    path.push("children");
                    var error = su__undefined_sa__2397_ea_2397_2397_2397_eu(object["children"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2397_ea_2397(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2397(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__2397_ea_2397(object); return error; }),
            getAuthorizedDevices: data => typescript_is_1.is(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2411(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("ip" in object) {
                    path.push("ip");
                    var error = su__undefined__string_eu(object["ip"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("authorizationDate" in object) {
                    path.push("authorizationDate");
                    var error = su__undefined__date_eu(object["authorizationDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2411_ea_2411(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2411(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__2411_ea_2411(object); return error; }),
            getMails: data => typescript_is_1.is(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__1657_ea_1657_1657_1657_eu(object) { var conditions = [_undefined, sa__1657_ea_1657]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2425(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("from" in object) {
                    path.push("from");
                    var error = _string(object["from"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'from' in object", path: path.slice(), reason: { type: "missing-property", property: "from" } };
            } {
                if ("to" in object) {
                    path.push("to");
                    var error = _string(object["to"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'to' in object", path: path.slice(), reason: { type: "missing-property", property: "to" } };
            } {
                if ("date" in object) {
                    path.push("date");
                    var error = _date(object["date"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'date' in object", path: path.slice(), reason: { type: "missing-property", property: "date" } };
            } {
                if ("subject" in object) {
                    path.push("subject");
                    var error = su__undefined__string_eu(object["subject"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("content" in object) {
                    path.push("content");
                    var error = _string(object["content"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'content' in object", path: path.slice(), reason: { type: "missing-property", property: "content" } };
            } {
                if ("attachments" in object) {
                    path.push("attachments");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["attachments"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2425_ea_2425(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2425(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__2425_ea_2425(object); return error; }),
        };
    }
    /**
     * Get assertion function list to test returned data type of each getters.
     * Assertion function return the given data if valid else throw error with useful informations.
     */
    static getterDataAssertions() {
        return {
            getProfile: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _2671(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("current" in object) {
                    path.push("current");
                    var error = _1657(object["current"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'current' in object", path: path.slice(), reason: { type: "missing-property", property: "current" } };
            } {
                if ("history" in object) {
                    path.push("history");
                    var error = sa__1657_ea_1657(object["history"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'history' in object", path: path.slice(), reason: { type: "missing-property", property: "history" } };
            } return null; } function su__undefined__2671_eu(object) { var conditions = [_undefined, _2671]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1267(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("displayName" in object) {
                    path.push("displayName");
                    var error = su__undefined__string_eu(object["displayName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("firstName" in object) {
                    path.push("firstName");
                    var error = su__undefined__string_eu(object["firstName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("lastName" in object) {
                    path.push("lastName");
                    var error = su__undefined__string_eu(object["lastName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("username" in object) {
                    path.push("username");
                    var error = su__undefined__string_eu(object["username"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("nickname" in object) {
                    path.push("nickname");
                    var error = su__undefined__string_eu(object["nickname"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("gender" in object) {
                    path.push("gender");
                    var error = su__undefined__string_eu(object["gender"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("birthday" in object) {
                    path.push("birthday");
                    var error = su__undefined__date_eu(object["birthday"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("phone" in object) {
                    path.push("phone");
                    var error = su__undefined__string_eu(object["phone"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("mail" in object) {
                    path.push("mail");
                    var error = su__undefined__string_eu(object["mail"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("date" in object) {
                    path.push("date");
                    var error = su__undefined__date_eu(object["date"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("profilePicture" in object) {
                    path.push("profilePicture");
                    var error = su__undefined__2671_eu(object["profilePicture"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } var error = _1267(object); return error; }),
            getFriends: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _2671(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("current" in object) {
                    path.push("current");
                    var error = _1657(object["current"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'current' in object", path: path.slice(), reason: { type: "missing-property", property: "current" } };
            } {
                if ("history" in object) {
                    path.push("history");
                    var error = sa__1657_ea_1657(object["history"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'history' in object", path: path.slice(), reason: { type: "missing-property", property: "history" } };
            } return null; } function su__undefined__2671_eu(object) { var conditions = [_undefined, _2671]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1267(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("displayName" in object) {
                    path.push("displayName");
                    var error = su__undefined__string_eu(object["displayName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("firstName" in object) {
                    path.push("firstName");
                    var error = su__undefined__string_eu(object["firstName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("lastName" in object) {
                    path.push("lastName");
                    var error = su__undefined__string_eu(object["lastName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("username" in object) {
                    path.push("username");
                    var error = su__undefined__string_eu(object["username"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("nickname" in object) {
                    path.push("nickname");
                    var error = su__undefined__string_eu(object["nickname"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("gender" in object) {
                    path.push("gender");
                    var error = su__undefined__string_eu(object["gender"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("birthday" in object) {
                    path.push("birthday");
                    var error = su__undefined__date_eu(object["birthday"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("phone" in object) {
                    path.push("phone");
                    var error = su__undefined__string_eu(object["phone"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("mail" in object) {
                    path.push("mail");
                    var error = su__undefined__string_eu(object["mail"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("date" in object) {
                    path.push("date");
                    var error = su__undefined__date_eu(object["date"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("profilePicture" in object) {
                    path.push("profilePicture");
                    var error = su__undefined__2671_eu(object["profilePicture"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1267_ea_1267(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1267(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1267_ea_1267(object); return error; }),
            getFollowings: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _2674(object) { ; if (object !== "contact")
                return { message: "validation failed at " + path.join(".") + ": expected string 'contact'", path: path.slice(), reason: { type: "string-literal", value: "contact" } };
            else
                return null; } function _2676(object) { ; if (object !== "community")
                return { message: "validation failed at " + path.join(".") + ": expected string 'community'", path: path.slice(), reason: { type: "string-literal", value: "community" } };
            else
                return null; } function su__2674__2676_eu(object) { var conditions = [_2674, _2676]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _2671(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("current" in object) {
                    path.push("current");
                    var error = _1657(object["current"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'current' in object", path: path.slice(), reason: { type: "missing-property", property: "current" } };
            } {
                if ("history" in object) {
                    path.push("history");
                    var error = sa__1657_ea_1657(object["history"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'history' in object", path: path.slice(), reason: { type: "missing-property", property: "history" } };
            } return null; } function su__undefined__2671_eu(object) { var conditions = [_undefined, _2671]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1267(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("displayName" in object) {
                    path.push("displayName");
                    var error = su__undefined__string_eu(object["displayName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("firstName" in object) {
                    path.push("firstName");
                    var error = su__undefined__string_eu(object["firstName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("lastName" in object) {
                    path.push("lastName");
                    var error = su__undefined__string_eu(object["lastName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("username" in object) {
                    path.push("username");
                    var error = su__undefined__string_eu(object["username"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("nickname" in object) {
                    path.push("nickname");
                    var error = su__undefined__string_eu(object["nickname"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("gender" in object) {
                    path.push("gender");
                    var error = su__undefined__string_eu(object["gender"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("birthday" in object) {
                    path.push("birthday");
                    var error = su__undefined__date_eu(object["birthday"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("phone" in object) {
                    path.push("phone");
                    var error = su__undefined__string_eu(object["phone"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("mail" in object) {
                    path.push("mail");
                    var error = su__undefined__string_eu(object["mail"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("date" in object) {
                    path.push("date");
                    var error = su__undefined__date_eu(object["date"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("profilePicture" in object) {
                    path.push("profilePicture");
                    var error = su__undefined__2671_eu(object["profilePicture"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function _1436(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("joinedDate" in object) {
                    path.push("joinedDate");
                    var error = su__undefined__date_eu(object["joinedDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__1267__1436_eu(object) { var conditions = [_1267, _1436]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1310(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("type" in object) {
                    path.push("type");
                    var error = su__2674__2676_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } {
                if ("entity" in object) {
                    path.push("entity");
                    var error = su__1267__1436_eu(object["entity"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'entity' in object", path: path.slice(), reason: { type: "missing-property", property: "entity" } };
            } {
                if ("followedSince" in object) {
                    path.push("followedSince");
                    var error = su__undefined__date_eu(object["followedSince"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1310_ea_1310(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1310(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1310_ea_1310(object); return error; }),
            getFollowers: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _2671(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("current" in object) {
                    path.push("current");
                    var error = _1657(object["current"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'current' in object", path: path.slice(), reason: { type: "missing-property", property: "current" } };
            } {
                if ("history" in object) {
                    path.push("history");
                    var error = sa__1657_ea_1657(object["history"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'history' in object", path: path.slice(), reason: { type: "missing-property", property: "history" } };
            } return null; } function su__undefined__2671_eu(object) { var conditions = [_undefined, _2671]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1267(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("displayName" in object) {
                    path.push("displayName");
                    var error = su__undefined__string_eu(object["displayName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("firstName" in object) {
                    path.push("firstName");
                    var error = su__undefined__string_eu(object["firstName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("lastName" in object) {
                    path.push("lastName");
                    var error = su__undefined__string_eu(object["lastName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("username" in object) {
                    path.push("username");
                    var error = su__undefined__string_eu(object["username"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("nickname" in object) {
                    path.push("nickname");
                    var error = su__undefined__string_eu(object["nickname"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("gender" in object) {
                    path.push("gender");
                    var error = su__undefined__string_eu(object["gender"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("birthday" in object) {
                    path.push("birthday");
                    var error = su__undefined__date_eu(object["birthday"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("phone" in object) {
                    path.push("phone");
                    var error = su__undefined__string_eu(object["phone"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("mail" in object) {
                    path.push("mail");
                    var error = su__undefined__string_eu(object["mail"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("date" in object) {
                    path.push("date");
                    var error = su__undefined__date_eu(object["date"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("profilePicture" in object) {
                    path.push("profilePicture");
                    var error = su__undefined__2671_eu(object["profilePicture"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1267_ea_1267(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1267(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1267_ea_1267(object); return error; }),
            getContacts: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _2671(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("current" in object) {
                    path.push("current");
                    var error = _1657(object["current"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'current' in object", path: path.slice(), reason: { type: "missing-property", property: "current" } };
            } {
                if ("history" in object) {
                    path.push("history");
                    var error = sa__1657_ea_1657(object["history"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'history' in object", path: path.slice(), reason: { type: "missing-property", property: "history" } };
            } return null; } function su__undefined__2671_eu(object) { var conditions = [_undefined, _2671]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1267(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("displayName" in object) {
                    path.push("displayName");
                    var error = su__undefined__string_eu(object["displayName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("firstName" in object) {
                    path.push("firstName");
                    var error = su__undefined__string_eu(object["firstName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("lastName" in object) {
                    path.push("lastName");
                    var error = su__undefined__string_eu(object["lastName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("username" in object) {
                    path.push("username");
                    var error = su__undefined__string_eu(object["username"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("nickname" in object) {
                    path.push("nickname");
                    var error = su__undefined__string_eu(object["nickname"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("gender" in object) {
                    path.push("gender");
                    var error = su__undefined__string_eu(object["gender"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("birthday" in object) {
                    path.push("birthday");
                    var error = su__undefined__date_eu(object["birthday"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("phone" in object) {
                    path.push("phone");
                    var error = su__undefined__string_eu(object["phone"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("mail" in object) {
                    path.push("mail");
                    var error = su__undefined__string_eu(object["mail"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("date" in object) {
                    path.push("date");
                    var error = su__undefined__date_eu(object["date"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("profilePicture" in object) {
                    path.push("profilePicture");
                    var error = su__undefined__2671_eu(object["profilePicture"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1267_ea_1267(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1267(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1267_ea_1267(object); return error; }),
            getWhereabouts: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__string__number_eu(object) { var conditions = [_string, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2681(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("latitude" in object) {
                    path.push("latitude");
                    var error = su__string__number_eu(object["latitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'latitude' in object", path: path.slice(), reason: { type: "missing-property", property: "latitude" } };
            } {
                if ("longitude" in object) {
                    path.push("longitude");
                    var error = su__string__number_eu(object["longitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'longitude' in object", path: path.slice(), reason: { type: "missing-property", property: "longitude" } };
            } return null; } function su__undefined__2681_eu(object) { var conditions = [_undefined, _2681]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2683(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("raw" in object) {
                    path.push("raw");
                    var error = _string(object["raw"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'raw' in object", path: path.slice(), reason: { type: "missing-property", property: "raw" } };
            } {
                if ("city" in object) {
                    path.push("city");
                    var error = su__undefined__string_eu(object["city"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("country" in object) {
                    path.push("country");
                    var error = su__undefined__string_eu(object["country"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("address" in object) {
                    path.push("address");
                    var error = su__undefined__string_eu(object["address"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("zipcode" in object) {
                    path.push("zipcode");
                    var error = su__undefined__string_eu(object["zipcode"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2683_eu(object) { var conditions = [_undefined, _2683]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2680(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("absolutePosition" in object) {
                    path.push("absolutePosition");
                    var error = su__undefined__2681_eu(object["absolutePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("relativePosition" in object) {
                    path.push("relativePosition");
                    var error = su__undefined__2683_eu(object["relativePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function _1324(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("location" in object) {
                    path.push("location");
                    var error = _2680(object["location"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'location' in object", path: path.slice(), reason: { type: "missing-property", property: "location" } };
            } {
                if ("recordDate" in object) {
                    path.push("recordDate");
                    var error = _date(object["recordDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'recordDate' in object", path: path.slice(), reason: { type: "missing-property", property: "recordDate" } };
            } return null; } function sa__1324_ea_1324(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1324(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1324_ea_1324(object); return error; }),
            getNotifications: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1338(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("content" in object) {
                    path.push("content");
                    var error = su__undefined__string_eu(object["content"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("notificationDate" in object) {
                    path.push("notificationDate");
                    var error = su__undefined__date_eu(object["notificationDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("href" in object) {
                    path.push("href");
                    var error = su__undefined__string_eu(object["href"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1338_ea_1338(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1338(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1338_ea_1338(object); return error; }),
            getChats: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _string(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _1352(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("_id" in object) {
                    path.push("_id");
                    var error = su__undefined__string_eu(object["_id"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("title" in object) {
                    path.push("title");
                    var error = _string(object["title"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'title' in object", path: path.slice(), reason: { type: "missing-property", property: "title" } };
            } {
                if ("participants" in object) {
                    path.push("participants");
                    var error = sa__string_ea_11(object["participants"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'participants' in object", path: path.slice(), reason: { type: "missing-property", property: "participants" } };
            } return null; } function sa__1352_ea_1352(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1352(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1352_ea_1352(object); return error; }),
            getChatMessages: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__1657_ea_1657_1657_1657_eu(object) { var conditions = [_undefined, sa__1657_ea_1657]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2686(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("description" in object) {
                    path.push("description");
                    var error = su__undefined__string_eu(object["description"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("reactionDate" in object) {
                    path.push("reactionDate");
                    var error = su__undefined__date_eu(object["reactionDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("medias" in object) {
                    path.push("medias");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["medias"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2686_ea_2686(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2686(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__2686_ea_2686_2686_2686_eu(object) { var conditions = [_undefined, sa__2686_ea_2686]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1366(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("sender" in object) {
                    path.push("sender");
                    var error = _string(object["sender"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'sender' in object", path: path.slice(), reason: { type: "missing-property", property: "sender" } };
            } {
                if ("text" in object) {
                    path.push("text");
                    var error = su__undefined__string_eu(object["text"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("metaData" in object) {
                    path.push("metaData");
                    var error = su__undefined__string_eu(object["metaData"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("sendAt" in object) {
                    path.push("sendAt");
                    var error = _date(object["sendAt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("reactions" in object) {
                    path.push("reactions");
                    var error = su__undefined_sa__2686_ea_2686_2686_2686_eu(object["reactions"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1366_ea_1366(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1366(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1366_ea_1366(object); return error; }),
            getComments: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__1657_ea_1657_1657_1657_eu(object) { var conditions = [_undefined, sa__1657_ea_1657]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2686(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("description" in object) {
                    path.push("description");
                    var error = su__undefined__string_eu(object["description"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("reactionDate" in object) {
                    path.push("reactionDate");
                    var error = su__undefined__date_eu(object["reactionDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("medias" in object) {
                    path.push("medias");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["medias"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2686_ea_2686(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2686(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__2686_ea_2686_2686_2686_eu(object) { var conditions = [_undefined, sa__2686_ea_2686]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _string(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__string_ea_11_11_11_eu(object) { var conditions = [_undefined, sa__string_ea_11]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__string__number_eu(object) { var conditions = [_string, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2681(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("latitude" in object) {
                    path.push("latitude");
                    var error = su__string__number_eu(object["latitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'latitude' in object", path: path.slice(), reason: { type: "missing-property", property: "latitude" } };
            } {
                if ("longitude" in object) {
                    path.push("longitude");
                    var error = su__string__number_eu(object["longitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'longitude' in object", path: path.slice(), reason: { type: "missing-property", property: "longitude" } };
            } return null; } function su__undefined__2681_eu(object) { var conditions = [_undefined, _2681]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2683(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("raw" in object) {
                    path.push("raw");
                    var error = _string(object["raw"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'raw' in object", path: path.slice(), reason: { type: "missing-property", property: "raw" } };
            } {
                if ("city" in object) {
                    path.push("city");
                    var error = su__undefined__string_eu(object["city"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("country" in object) {
                    path.push("country");
                    var error = su__undefined__string_eu(object["country"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("address" in object) {
                    path.push("address");
                    var error = su__undefined__string_eu(object["address"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("zipcode" in object) {
                    path.push("zipcode");
                    var error = su__undefined__string_eu(object["zipcode"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2683_eu(object) { var conditions = [_undefined, _2683]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2680(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("absolutePosition" in object) {
                    path.push("absolutePosition");
                    var error = su__undefined__2681_eu(object["absolutePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("relativePosition" in object) {
                    path.push("relativePosition");
                    var error = su__undefined__2683_eu(object["relativePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2680_eu(object) { var conditions = [_undefined, _2680]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2693(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = su__undefined__string_eu(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("startDate" in object) {
                    path.push("startDate");
                    var error = su__undefined__date_eu(object["startDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("endDate" in object) {
                    path.push("endDate");
                    var error = su__undefined__date_eu(object["endDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("participants" in object) {
                    path.push("participants");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["participants"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2693_eu(object) { var conditions = [_undefined, _2693]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2690(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("reactions" in object) {
                    path.push("reactions");
                    var error = su__undefined_sa__2686_ea_2686_2686_2686_eu(object["reactions"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("links" in object) {
                    path.push("links");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["links"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("userTags" in object) {
                    path.push("userTags");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["userTags"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("locations" in object) {
                    path.push("locations");
                    var error = su__undefined__2680_eu(object["locations"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("events" in object) {
                    path.push("events");
                    var error = su__undefined__2693_eu(object["events"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("medias" in object) {
                    path.push("medias");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["medias"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2690_eu(object) { var conditions = [_undefined, _2690]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1380(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("creationDate" in object) {
                    path.push("creationDate");
                    var error = _date(object["creationDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'creationDate' in object", path: path.slice(), reason: { type: "missing-property", property: "creationDate" } };
            } {
                if ("sender" in object) {
                    path.push("sender");
                    var error = _string(object["sender"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'sender' in object", path: path.slice(), reason: { type: "missing-property", property: "sender" } };
            } {
                if ("title" in object) {
                    path.push("title");
                    var error = su__undefined__string_eu(object["title"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("content" in object) {
                    path.push("content");
                    var error = su__undefined__string_eu(object["content"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("metaData" in object) {
                    path.push("metaData");
                    var error = su__undefined__2690_eu(object["metaData"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1380_ea_1380(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1380(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1380_ea_1380(object); return error; }),
            getPosts: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__1657_ea_1657_1657_1657_eu(object) { var conditions = [_undefined, sa__1657_ea_1657]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2686(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("description" in object) {
                    path.push("description");
                    var error = su__undefined__string_eu(object["description"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("reactionDate" in object) {
                    path.push("reactionDate");
                    var error = su__undefined__date_eu(object["reactionDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("medias" in object) {
                    path.push("medias");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["medias"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2686_ea_2686(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2686(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__2686_ea_2686_2686_2686_eu(object) { var conditions = [_undefined, sa__2686_ea_2686]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _string(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__string_ea_11_11_11_eu(object) { var conditions = [_undefined, sa__string_ea_11]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__string__number_eu(object) { var conditions = [_string, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2681(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("latitude" in object) {
                    path.push("latitude");
                    var error = su__string__number_eu(object["latitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'latitude' in object", path: path.slice(), reason: { type: "missing-property", property: "latitude" } };
            } {
                if ("longitude" in object) {
                    path.push("longitude");
                    var error = su__string__number_eu(object["longitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'longitude' in object", path: path.slice(), reason: { type: "missing-property", property: "longitude" } };
            } return null; } function su__undefined__2681_eu(object) { var conditions = [_undefined, _2681]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2683(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("raw" in object) {
                    path.push("raw");
                    var error = _string(object["raw"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'raw' in object", path: path.slice(), reason: { type: "missing-property", property: "raw" } };
            } {
                if ("city" in object) {
                    path.push("city");
                    var error = su__undefined__string_eu(object["city"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("country" in object) {
                    path.push("country");
                    var error = su__undefined__string_eu(object["country"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("address" in object) {
                    path.push("address");
                    var error = su__undefined__string_eu(object["address"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("zipcode" in object) {
                    path.push("zipcode");
                    var error = su__undefined__string_eu(object["zipcode"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2683_eu(object) { var conditions = [_undefined, _2683]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2680(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("absolutePosition" in object) {
                    path.push("absolutePosition");
                    var error = su__undefined__2681_eu(object["absolutePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("relativePosition" in object) {
                    path.push("relativePosition");
                    var error = su__undefined__2683_eu(object["relativePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2680_eu(object) { var conditions = [_undefined, _2680]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2693(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = su__undefined__string_eu(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("startDate" in object) {
                    path.push("startDate");
                    var error = su__undefined__date_eu(object["startDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("endDate" in object) {
                    path.push("endDate");
                    var error = su__undefined__date_eu(object["endDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("participants" in object) {
                    path.push("participants");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["participants"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2693_eu(object) { var conditions = [_undefined, _2693]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2690(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("reactions" in object) {
                    path.push("reactions");
                    var error = su__undefined_sa__2686_ea_2686_2686_2686_eu(object["reactions"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("links" in object) {
                    path.push("links");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["links"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("userTags" in object) {
                    path.push("userTags");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["userTags"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("locations" in object) {
                    path.push("locations");
                    var error = su__undefined__2680_eu(object["locations"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("events" in object) {
                    path.push("events");
                    var error = su__undefined__2693_eu(object["events"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("medias" in object) {
                    path.push("medias");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["medias"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2690_eu(object) { var conditions = [_undefined, _2690]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1380(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("creationDate" in object) {
                    path.push("creationDate");
                    var error = _date(object["creationDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'creationDate' in object", path: path.slice(), reason: { type: "missing-property", property: "creationDate" } };
            } {
                if ("sender" in object) {
                    path.push("sender");
                    var error = _string(object["sender"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'sender' in object", path: path.slice(), reason: { type: "missing-property", property: "sender" } };
            } {
                if ("title" in object) {
                    path.push("title");
                    var error = su__undefined__string_eu(object["title"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("content" in object) {
                    path.push("content");
                    var error = su__undefined__string_eu(object["content"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("metaData" in object) {
                    path.push("metaData");
                    var error = su__undefined__2690_eu(object["metaData"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1380_ea_1380(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1380(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1380_ea_1380(object); return error; }),
            getMessages: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1394(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("creationDate" in object) {
                    path.push("creationDate");
                    var error = _date(object["creationDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'creationDate' in object", path: path.slice(), reason: { type: "missing-property", property: "creationDate" } };
            } {
                if ("sender" in object) {
                    path.push("sender");
                    var error = _string(object["sender"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'sender' in object", path: path.slice(), reason: { type: "missing-property", property: "sender" } };
            } {
                if ("receiver" in object) {
                    path.push("receiver");
                    var error = _string(object["receiver"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'receiver' in object", path: path.slice(), reason: { type: "missing-property", property: "receiver" } };
            } {
                if ("title" in object) {
                    path.push("title");
                    var error = su__undefined__string_eu(object["title"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("content" in object) {
                    path.push("content");
                    var error = _string(object["content"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'content' in object", path: path.slice(), reason: { type: "missing-property", property: "content" } };
            } return null; } function sa__1394_ea_1394(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1394(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1394_ea_1394(object); return error; }),
            getAPIs: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1408(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("linkingDate" in object) {
                    path.push("linkingDate");
                    var error = su__undefined__date_eu(object["linkingDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1408_ea_1408(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1408(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1408_ea_1408(object); return error; }),
            getConnections: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__string__number_eu(object) { var conditions = [_string, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2681(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("latitude" in object) {
                    path.push("latitude");
                    var error = su__string__number_eu(object["latitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'latitude' in object", path: path.slice(), reason: { type: "missing-property", property: "latitude" } };
            } {
                if ("longitude" in object) {
                    path.push("longitude");
                    var error = su__string__number_eu(object["longitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'longitude' in object", path: path.slice(), reason: { type: "missing-property", property: "longitude" } };
            } return null; } function su__undefined__2681_eu(object) { var conditions = [_undefined, _2681]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2683(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("raw" in object) {
                    path.push("raw");
                    var error = _string(object["raw"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'raw' in object", path: path.slice(), reason: { type: "missing-property", property: "raw" } };
            } {
                if ("city" in object) {
                    path.push("city");
                    var error = su__undefined__string_eu(object["city"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("country" in object) {
                    path.push("country");
                    var error = su__undefined__string_eu(object["country"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("address" in object) {
                    path.push("address");
                    var error = su__undefined__string_eu(object["address"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("zipcode" in object) {
                    path.push("zipcode");
                    var error = su__undefined__string_eu(object["zipcode"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2683_eu(object) { var conditions = [_undefined, _2683]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2680(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("absolutePosition" in object) {
                    path.push("absolutePosition");
                    var error = su__undefined__2681_eu(object["absolutePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("relativePosition" in object) {
                    path.push("relativePosition");
                    var error = su__undefined__2683_eu(object["relativePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2680_eu(object) { var conditions = [_undefined, _2680]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1422(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("ipAddress" in object) {
                    path.push("ipAddress");
                    var error = _string(object["ipAddress"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'ipAddress' in object", path: path.slice(), reason: { type: "missing-property", property: "ipAddress" } };
            } {
                if ("location" in object) {
                    path.push("location");
                    var error = su__undefined__2680_eu(object["location"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("browser" in object) {
                    path.push("browser");
                    var error = su__undefined__string_eu(object["browser"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("timestamp" in object) {
                    path.push("timestamp");
                    var error = su__undefined__date_eu(object["timestamp"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'timestamp' in object", path: path.slice(), reason: { type: "missing-property", property: "timestamp" } };
            } return null; } function sa__1422_ea_1422(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1422(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1422_ea_1422(object); return error; }),
            getCommunities: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1436(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("joinedDate" in object) {
                    path.push("joinedDate");
                    var error = su__undefined__date_eu(object["joinedDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1436_ea_1436(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1436(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1436_ea_1436(object); return error; }),
            getSettings: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1450(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("value" in object) {
                    path.push("value");
                    var error = su__undefined__string_eu(object["value"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1450_ea_1450(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1450(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1450_ea_1450(object); return error; }),
            getReacted: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _2676(object) { ; if (object !== "community")
                return { message: "validation failed at " + path.join(".") + ": expected string 'community'", path: path.slice(), reason: { type: "string-literal", value: "community" } };
            else
                return null; } function _2695(object) { ; if (object !== "media")
                return { message: "validation failed at " + path.join(".") + ": expected string 'media'", path: path.slice(), reason: { type: "string-literal", value: "media" } };
            else
                return null; } function _2697(object) { ; if (object !== "post")
                return { message: "validation failed at " + path.join(".") + ": expected string 'post'", path: path.slice(), reason: { type: "string-literal", value: "post" } };
            else
                return null; } function _2699(object) { ; if (object !== "externalLink")
                return { message: "validation failed at " + path.join(".") + ": expected string 'externalLink'", path: path.slice(), reason: { type: "string-literal", value: "externalLink" } };
            else
                return null; } function su__2676__2695__2697__2699_eu(object) { var conditions = [_2676, _2695, _2697, _2699]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__1657_ea_1657_1657_1657_eu(object) { var conditions = [_undefined, sa__1657_ea_1657]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2686(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("description" in object) {
                    path.push("description");
                    var error = su__undefined__string_eu(object["description"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("reactionDate" in object) {
                    path.push("reactionDate");
                    var error = su__undefined__date_eu(object["reactionDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("medias" in object) {
                    path.push("medias");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["medias"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2686_ea_2686(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2686(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__2686_ea_2686_2686_2686_eu(object) { var conditions = [_undefined, sa__2686_ea_2686]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _string(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__string_ea_11_11_11_eu(object) { var conditions = [_undefined, sa__string_ea_11]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__string__number_eu(object) { var conditions = [_string, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2681(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("latitude" in object) {
                    path.push("latitude");
                    var error = su__string__number_eu(object["latitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'latitude' in object", path: path.slice(), reason: { type: "missing-property", property: "latitude" } };
            } {
                if ("longitude" in object) {
                    path.push("longitude");
                    var error = su__string__number_eu(object["longitude"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'longitude' in object", path: path.slice(), reason: { type: "missing-property", property: "longitude" } };
            } return null; } function su__undefined__2681_eu(object) { var conditions = [_undefined, _2681]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2683(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("raw" in object) {
                    path.push("raw");
                    var error = _string(object["raw"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'raw' in object", path: path.slice(), reason: { type: "missing-property", property: "raw" } };
            } {
                if ("city" in object) {
                    path.push("city");
                    var error = su__undefined__string_eu(object["city"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("country" in object) {
                    path.push("country");
                    var error = su__undefined__string_eu(object["country"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("address" in object) {
                    path.push("address");
                    var error = su__undefined__string_eu(object["address"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("zipcode" in object) {
                    path.push("zipcode");
                    var error = su__undefined__string_eu(object["zipcode"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2683_eu(object) { var conditions = [_undefined, _2683]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2680(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("absolutePosition" in object) {
                    path.push("absolutePosition");
                    var error = su__undefined__2681_eu(object["absolutePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("relativePosition" in object) {
                    path.push("relativePosition");
                    var error = su__undefined__2683_eu(object["relativePosition"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2680_eu(object) { var conditions = [_undefined, _2680]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2693(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = su__undefined__string_eu(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("startDate" in object) {
                    path.push("startDate");
                    var error = su__undefined__date_eu(object["startDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("endDate" in object) {
                    path.push("endDate");
                    var error = su__undefined__date_eu(object["endDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("participants" in object) {
                    path.push("participants");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["participants"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2693_eu(object) { var conditions = [_undefined, _2693]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2690(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("reactions" in object) {
                    path.push("reactions");
                    var error = su__undefined_sa__2686_ea_2686_2686_2686_eu(object["reactions"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("links" in object) {
                    path.push("links");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["links"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("userTags" in object) {
                    path.push("userTags");
                    var error = su__undefined_sa__string_ea_11_11_11_eu(object["userTags"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("locations" in object) {
                    path.push("locations");
                    var error = su__undefined__2680_eu(object["locations"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("events" in object) {
                    path.push("events");
                    var error = su__undefined__2693_eu(object["events"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("medias" in object) {
                    path.push("medias");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["medias"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2690_eu(object) { var conditions = [_undefined, _2690]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1380(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("creationDate" in object) {
                    path.push("creationDate");
                    var error = _date(object["creationDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'creationDate' in object", path: path.slice(), reason: { type: "missing-property", property: "creationDate" } };
            } {
                if ("sender" in object) {
                    path.push("sender");
                    var error = _string(object["sender"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'sender' in object", path: path.slice(), reason: { type: "missing-property", property: "sender" } };
            } {
                if ("title" in object) {
                    path.push("title");
                    var error = su__undefined__string_eu(object["title"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("content" in object) {
                    path.push("content");
                    var error = su__undefined__string_eu(object["content"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("metaData" in object) {
                    path.push("metaData");
                    var error = su__undefined__2690_eu(object["metaData"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function _1436(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("joinedDate" in object) {
                    path.push("joinedDate");
                    var error = su__undefined__date_eu(object["joinedDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__string__1380__1436__1657_eu(object) { var conditions = [_string, _1380, _1436, _1657]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined__2686_eu(object) { var conditions = [_undefined, _2686]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1464(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("type" in object) {
                    path.push("type");
                    var error = su__2676__2695__2697__2699_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } {
                if ("entity" in object) {
                    path.push("entity");
                    var error = su__string__1380__1436__1657_eu(object["entity"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'entity' in object", path: path.slice(), reason: { type: "missing-property", property: "entity" } };
            } {
                if ("reaction" in object) {
                    path.push("reaction");
                    var error = su__undefined__2686_eu(object["reaction"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__1464_ea_1464(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1464(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1464_ea_1464(object); return error; }),
            getMedias: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__1657_ea_1657(object); return error; }),
            getTransactions: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2370(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("date" in object) {
                    path.push("date");
                    var error = su__undefined__number_eu(object["date"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("description" in object) {
                    path.push("description");
                    var error = su__undefined__string_eu(object["description"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("currency" in object) {
                    path.push("currency");
                    var error = _string(object["currency"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'currency' in object", path: path.slice(), reason: { type: "missing-property", property: "currency" } };
            } {
                if ("value" in object) {
                    path.push("value");
                    var error = _number(object["value"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'value' in object", path: path.slice(), reason: { type: "missing-property", property: "value" } };
            } {
                if ("status" in object) {
                    path.push("status");
                    var error = su__undefined__string_eu(object["status"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("paymentMethod" in object) {
                    path.push("paymentMethod");
                    var error = su__undefined__string_eu(object["paymentMethod"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("product" in object) {
                    path.push("product");
                    var error = _string(object["product"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'product' in object", path: path.slice(), reason: { type: "missing-property", property: "product" } };
            } return null; } function sa__2370_ea_2370(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2370(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__2370_ea_2370(object); return error; }),
            getBrowserData: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2704(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("timestamp" in object) {
                    path.push("timestamp");
                    var error = _number(object["timestamp"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'timestamp' in object", path: path.slice(), reason: { type: "missing-property", property: "timestamp" } };
            } {
                if ("title" in object) {
                    path.push("title");
                    var error = _string(object["title"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'title' in object", path: path.slice(), reason: { type: "missing-property", property: "title" } };
            } {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("faviconUrl" in object) {
                    path.push("faviconUrl");
                    var error = su__undefined__string_eu(object["faviconUrl"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("clientId" in object) {
                    path.push("clientId");
                    var error = su__undefined__string_eu(object["clientId"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2704_ea_2704(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2704(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _false(object) { ; if (object !== false)
                return { message: "validation failed at " + path.join(".") + ": expected false", path: path.slice(), reason: { type: "boolean-literal", value: false } };
            else
                return null; } function _true(object) { ; if (object !== true)
                return { message: "validation failed at " + path.join(".") + ": expected true", path: path.slice(), reason: { type: "boolean-literal", value: true } };
            else
                return null; } function su__undefined__15__17_eu(object) { var conditions = [_undefined, _false, _true]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2706(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("enabled" in object) {
                    path.push("enabled");
                    var error = su__undefined__15__17_eu(object["enabled"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("incognitoEnabled" in object) {
                    path.push("incognitoEnabled");
                    var error = su__undefined__15__17_eu(object["incognitoEnabled"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("version" in object) {
                    path.push("version");
                    var error = su__undefined__string_eu(object["version"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("websiteUrl" in object) {
                    path.push("websiteUrl");
                    var error = su__undefined__string_eu(object["websiteUrl"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2706_ea_2706(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2706(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2713(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("languageCode" in object) {
                    path.push("languageCode");
                    var error = su__undefined__string_eu(object["languageCode"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("city" in object) {
                    path.push("city");
                    var error = su__undefined__string_eu(object["city"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("country" in object) {
                    path.push("country");
                    var error = su__undefined__string_eu(object["country"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("line1" in object) {
                    path.push("line1");
                    var error = su__undefined__string_eu(object["line1"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("line2" in object) {
                    path.push("line2");
                    var error = su__undefined__string_eu(object["line2"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("state" in object) {
                    path.push("state");
                    var error = su__undefined__string_eu(object["state"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("streetAddress" in object) {
                    path.push("streetAddress");
                    var error = su__undefined__string_eu(object["streetAddress"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("zip" in object) {
                    path.push("zip");
                    var error = su__undefined__string_eu(object["zip"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function su__undefined__2713_eu(object) { var conditions = [_undefined, _2713]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2708(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("useCount" in object) {
                    path.push("useCount");
                    var error = su__undefined__number_eu(object["useCount"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("lastUseDate" in object) {
                    path.push("lastUseDate");
                    var error = su__undefined__number_eu(object["lastUseDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("firstName" in object) {
                    path.push("firstName");
                    var error = su__undefined__string_eu(object["firstName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("lastName" in object) {
                    path.push("lastName");
                    var error = su__undefined__string_eu(object["lastName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fullName" in object) {
                    path.push("fullName");
                    var error = su__undefined__string_eu(object["fullName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("phoneNumber" in object) {
                    path.push("phoneNumber");
                    var error = su__undefined__string_eu(object["phoneNumber"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("email" in object) {
                    path.push("email");
                    var error = su__undefined__string_eu(object["email"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("companyName" in object) {
                    path.push("companyName");
                    var error = su__undefined__string_eu(object["companyName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("address" in object) {
                    path.push("address");
                    var error = su__undefined__2713_eu(object["address"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2708_ea_2708(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2708(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _unknown() { return null; } function _2710(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("value" in object) {
                    path.push("value");
                    var error = _unknown(object["value"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'value' in object", path: path.slice(), reason: { type: "missing-property", property: "value" } };
            } return null; } function sa__2710_ea_2710(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2710(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function _2712(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("websiteUrl" in object) {
                    path.push("websiteUrl");
                    var error = su__undefined__string_eu(object["websiteUrl"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function _2384(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("history" in object) {
                    path.push("history");
                    var error = sa__2704_ea_2704(object["history"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'history' in object", path: path.slice(), reason: { type: "missing-property", property: "history" } };
            } {
                if ("extensions" in object) {
                    path.push("extensions");
                    var error = sa__2706_ea_2706(object["extensions"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'extensions' in object", path: path.slice(), reason: { type: "missing-property", property: "extensions" } };
            } {
                if ("savedForms" in object) {
                    path.push("savedForms");
                    var error = sa__2708_ea_2708(object["savedForms"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'savedForms' in object", path: path.slice(), reason: { type: "missing-property", property: "savedForms" } };
            } {
                if ("preferences" in object) {
                    path.push("preferences");
                    var error = sa__2710_ea_2710(object["preferences"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'preferences' in object", path: path.slice(), reason: { type: "missing-property", property: "preferences" } };
            } {
                if ("theme" in object) {
                    path.push("theme");
                    var error = _2712(object["theme"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'theme' in object", path: path.slice(), reason: { type: "missing-property", property: "theme" } };
            } return null; } var error = _2384(object); return error; }),
            getTasks: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function su__undefined_sa__2397_ea_2397_2397_2397_eu(object) { var conditions = [_undefined, sa__2397_ea_2397]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2397(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("createdAt" in object) {
                    path.push("createdAt");
                    var error = su__undefined__date_eu(object["createdAt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("updateAt" in object) {
                    path.push("updateAt");
                    var error = su__undefined__number_eu(object["updateAt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("endAt" in object) {
                    path.push("endAt");
                    var error = su__undefined__number_eu(object["endAt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("dueDate" in object) {
                    path.push("dueDate");
                    var error = su__undefined__date_eu(object["dueDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("status" in object) {
                    path.push("status");
                    var error = _string(object["status"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'status' in object", path: path.slice(), reason: { type: "missing-property", property: "status" } };
            } {
                if ("description" in object) {
                    path.push("description");
                    var error = su__undefined__string_eu(object["description"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("taskType" in object) {
                    path.push("taskType");
                    var error = su__undefined__string_eu(object["taskType"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("children" in object) {
                    path.push("children");
                    var error = su__undefined_sa__2397_ea_2397_2397_2397_eu(object["children"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2397_ea_2397(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2397(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__2397_ea_2397(object); return error; }),
            getAuthorizedDevices: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function su__undefined__date_eu(object) { var conditions = [_undefined, _date]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2411(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("name" in object) {
                    path.push("name");
                    var error = _string(object["name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'name' in object", path: path.slice(), reason: { type: "missing-property", property: "name" } };
            } {
                if ("ip" in object) {
                    path.push("ip");
                    var error = su__undefined__string_eu(object["ip"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("authorizationDate" in object) {
                    path.push("authorizationDate");
                    var error = su__undefined__date_eu(object["authorizationDate"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2411_ea_2411(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2411(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__2411_ea_2411(object); return error; }),
            getMails: data => typescript_is_1.assertType(data, object => { var path = ["data"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _date(object) {
                let nativeDateObject;
                if (typeof global === "undefined")
                    nativeDateObject = window.Date;
                else
                    nativeDateObject = global.Date;
                if (!(object instanceof nativeDateObject))
                    return { message: "validation failed at " + path.join(".") + ": expected a Date", path: path.slice(), reason: { type: "date" } };
                else
                    return null;
            } function _undefined(object) { ; if (object !== undefined)
                return { message: "validation failed at " + path.join(".") + ": expected undefined", path: path.slice(), reason: { type: "undefined" } };
            else
                return null; } function su__undefined__string_eu(object) { var conditions = [_undefined, _string]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function su__undefined__number_eu(object) { var conditions = [_undefined, _number]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1488(object) { ; if (object !== "image")
                return { message: "validation failed at " + path.join(".") + ": expected string 'image'", path: path.slice(), reason: { type: "string-literal", value: "image" } };
            else
                return null; } function _1490(object) { ; if (object !== "video")
                return { message: "validation failed at " + path.join(".") + ": expected string 'video'", path: path.slice(), reason: { type: "string-literal", value: "video" } };
            else
                return null; } function _1492(object) { ; if (object !== "audio")
                return { message: "validation failed at " + path.join(".") + ": expected string 'audio'", path: path.slice(), reason: { type: "string-literal", value: "audio" } };
            else
                return null; } function su__1488__1490__1492_eu(object) { var conditions = [_1488, _1490, _1492]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _1657(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("url" in object) {
                    path.push("url");
                    var error = _string(object["url"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'url' in object", path: path.slice(), reason: { type: "missing-property", property: "url" } };
            } {
                if ("fileName" in object) {
                    path.push("fileName");
                    var error = su__undefined__string_eu(object["fileName"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("fileExt" in object) {
                    path.push("fileExt");
                    var error = su__undefined__string_eu(object["fileExt"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("size" in object) {
                    path.push("size");
                    var error = su__undefined__number_eu(object["size"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("type" in object) {
                    path.push("type");
                    var error = su__1488__1490__1492_eu(object["type"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'type' in object", path: path.slice(), reason: { type: "missing-property", property: "type" } };
            } return null; } function sa__1657_ea_1657(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _1657(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } function su__undefined_sa__1657_ea_1657_1657_1657_eu(object) { var conditions = [_undefined, sa__1657_ea_1657]; for (const condition of conditions) {
                var error = condition(object);
                if (!error)
                    return null;
            } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } function _2425(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("from" in object) {
                    path.push("from");
                    var error = _string(object["from"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'from' in object", path: path.slice(), reason: { type: "missing-property", property: "from" } };
            } {
                if ("to" in object) {
                    path.push("to");
                    var error = _string(object["to"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'to' in object", path: path.slice(), reason: { type: "missing-property", property: "to" } };
            } {
                if ("date" in object) {
                    path.push("date");
                    var error = _date(object["date"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'date' in object", path: path.slice(), reason: { type: "missing-property", property: "date" } };
            } {
                if ("subject" in object) {
                    path.push("subject");
                    var error = su__undefined__string_eu(object["subject"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } {
                if ("content" in object) {
                    path.push("content");
                    var error = _string(object["content"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'content' in object", path: path.slice(), reason: { type: "missing-property", property: "content" } };
            } {
                if ("attachments" in object) {
                    path.push("attachments");
                    var error = su__undefined_sa__1657_ea_1657_1657_1657_eu(object["attachments"]);
                    path.pop();
                    if (error)
                        return error;
                }
            } return null; } function sa__2425_ea_2425(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _2425(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__2425_ea_2425(object); return error; }),
        };
    }
}
exports.default = Standardizer;
