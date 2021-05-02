"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Standardizer_1 = __importDefault(require("./Standardizer/Standardizer"));
class StandardizerFactory {
    constructor(extractedArchivePath) {
        this.path = extractedArchivePath;
        // @ts-ignore
        this.standardizers = Standardizer_1.default.getPluginsSync().map(standardizer => new standardizer(this.path));
    }
    getStandardizerFromService(service) {
        return this.standardizers.find(standardizer => standardizer.service === service);
    }
}
exports.default = StandardizerFactory;
