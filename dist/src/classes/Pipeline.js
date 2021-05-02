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
const fs_1 = __importDefault(require("fs"));
const stream_1 = require("stream");
const streamToString_1 = __importDefault(require("../modules/streamToString"));
const getFileFromArchive_1 = __importDefault(require("../modules/getFileFromArchive"));
class Pipeline {
    constructor(steps = []) {
        this.steps = steps;
    }
    /**
     * If this pipeline has been executed once with the run() method
     */
    get executed() {
        return this.output !== undefined;
    }
    /**
     * Add one or more steps to this Pipeline
     */
    addStep(step) {
        if (Array.isArray(step)) {
            this.steps = this.steps.concat(step);
        }
        else {
            this.steps.push(step);
        }
        return this;
    }
    /**
     * Merge a given Pipeline in this one
     * All steps of the given Pipeline will be added after this Pipeline's steps
     */
    merge(pipeline) {
        this.steps = this.steps.concat(pipeline.steps);
        return this;
    }
    /**
     * Run the Pipeline to get the resulted stream
     */
    run() {
        if (this.steps.length === 0) {
            throw new Error('Can not run empty Pipeline');
        }
        if (this.steps.length === 1) {
            this.output = this.steps[0];
            return this.steps[0];
        }
        const stream = stream_1.pipeline(
        // @ts-ignore
        this.steps, (error) => {
            if (error) {
                throw error;
            }
        });
        this.output = stream;
        return stream;
    }
    /**
     * Run the pipeline, wait for resulted stream end and return all data as string
     */
    toString() {
        if (!this.executed) {
            this.run();
        }
        return streamToString_1.default(this.output);
    }
    /**
     * Create a Pipeline with file read stream as first step
     */
    static fromFile(path, steps = []) {
        return new Pipeline([
            fs_1.default.createReadStream(path),
            ...steps,
        ]);
    }
    /**
     * Create a Pipeline from another Pipeline
     */
    static fromPipeline(pipeline, steps = []) {
        return new Pipeline([
            ...pipeline.steps,
            ...steps,
        ]);
    }
    /**
     * Create a Pipeline from an archive file
     */
    static fromArchive(archivePath, filePath, steps = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const [fileStream] = yield getFileFromArchive_1.default(archivePath, [filePath]);
            if (!fileStream) {
                throw new Error('Can not get file stream');
            }
            return new Pipeline([
                fileStream,
                ...steps,
            ]);
        });
    }
}
exports.default = Pipeline;
