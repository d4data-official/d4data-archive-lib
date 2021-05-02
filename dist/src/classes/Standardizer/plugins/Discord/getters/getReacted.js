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
Discord_1.default.prototype.getReacted = function getReacted(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const eventFiles = yield this.parser.findFiles(/(tns)|(analytics)/, './activity');
        if (eventFiles.length === 0) {
            return {
                data: [],
                parsedFiles: [],
            };
        }
        const reactions = (yield this.parser.parseAsJSONL(eventFiles[0], Object.assign({ filter: (unparsedLine) => (unparsedLine.startsWith('{"event_type":"add_reaction"')) }, options === null || options === void 0 ? void 0 : options.parsingOptions)));
        const reacted = reactions.map((reaction) => {
            var _a;
            const guild = (_a = reaction === null || reaction === void 0 ? void 0 : reaction.guild_id) !== null && _a !== void 0 ? _a : '@me';
            return {
                type: 'externalLink',
                entity: `https://discordapp.com/channels/${guild}/${reaction === null || reaction === void 0 ? void 0 : reaction.channel_id}/${reaction === null || reaction === void 0 ? void 0 : reaction.message_id}`,
                reaction: {
                    name: reaction.emoji_name,
                    reactionDate: new Date(reaction.timestamp.slice(1, -1)),
                },
            };
        });
        return {
            data: reacted,
            parsedFiles: eventFiles,
        };
    });
};
