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
const Standardizer_1 = __importDefault(require("../../src/classes/Standardizer/Standardizer"));
const test = ava_1.default;
test('Get plugins synchronously', (t) => {
    const plugins = Standardizer_1.default.getPluginsSync();
    t.plan(plugins.length);
    plugins.forEach((plugin, idx) => {
        var _a;
        const message = 'A plugin is not a child class of Standardizer '
            + `(index: ${idx}, name: ${(_a = plugin === null || plugin === void 0 ? void 0 : plugin.constructor) === null || _a === void 0 ? void 0 : _a.name})`;
        t.assert(plugin.prototype instanceof Standardizer_1.default, message);
    });
});
test('Get plugins asynchronously', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const plugins = yield Standardizer_1.default.getPlugins();
    t.plan(plugins.length);
    plugins.forEach((plugin, idx) => {
        var _a;
        const message = 'A plugin is not a child class of Standardizer '
            + `(index: ${idx}, name: ${(_a = plugin === null || plugin === void 0 ? void 0 : plugin.constructor) === null || _a === void 0 ? void 0 : _a.name})`;
        t.assert(plugin.prototype instanceof Standardizer_1.default, message);
    });
}));
