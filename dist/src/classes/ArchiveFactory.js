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
const Archive_1 = __importDefault(require("./Archive/Archive"));
const Unknown_1 = __importDefault(require("./Archive/Unknown"));
class ArchiveFactory {
    constructor(archivePath, outputDir, plugins = []) {
        this.path = archivePath;
        this.outputDir = outputDir;
        this.plugins = plugins;
    }
    identify() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getPlugin()
                .then(archive => archive.service);
        });
    }
    getServiceArchive(service) {
        return this.plugins.find(plugin => plugin.service === service);
    }
    getPlugin() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.any(this.plugins.map(plugin => plugin
                .identifyService()
                .then(result => (result ? plugin : Promise.reject()))))
                .catch((errors) => {
                if (errors.errors.find(item => item !== undefined)) {
                    const customErrors = errors.errors.map((error, index) => {
                        var _a;
                        const customError = error;
                        if (!customError) {
                            return;
                        }
                        customError.message += ` (${(_a = this.plugins[index]) === null || _a === void 0 ? void 0 : _a.service})`;
                        return customError;
                    });
                    console.error(errors, customErrors);
                }
                return new Unknown_1.default(this.path);
            });
        });
    }
    getStandardizer() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getPlugin()
                .then(archive => archive.extract())
                .then(archive => archive.standardizer);
        });
    }
    static init(archivePath, outputDir, plugins = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const defaultPlugins = (yield Archive_1.default.getPlugins())
                // @ts-ignore
                .map(archivePlugin => new archivePlugin(archivePath, outputDir));
            return new ArchiveFactory(archivePath, outputDir, [...defaultPlugins, ...plugins]);
        });
    }
}
exports.default = ArchiveFactory;
