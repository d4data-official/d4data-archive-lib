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
const ava_1 = __importDefault(require("ava"));
const stream_1 = require("stream");
const Facebook_1 = require("../../../../src/classes/Standardizer/plugins/Facebook/Facebook");
const Pipeline_1 = __importDefault(require("../../../../src/classes/Pipeline"));
const test = ava_1.default;
test('Preprocessors must fix encoding', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const pipeline = new Pipeline_1.default([
        stream_1.Readable.from('Freaky Beats pr\u00c3\u00a9sente : Vortek\'s & Ketamane !'),
        ...Facebook_1.preProcessors,
    ]);
    const pipelineOutput = yield pipeline.toString();
    t.assert(pipelineOutput === 'Freaky Beats présente : Vortek\'s & Ketamane !');
}));
