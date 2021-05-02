/// <reference types="node" />
import { Readable, Stream } from 'stream';
export declare type PipelineResult = Readable;
export declare type PipelineStep = Stream | ((stream?: Readable) => Iterable<any> | AsyncIterable<any>);
export default class Pipeline {
    steps: Array<PipelineStep>;
    /**
     * Output stream resulted of previous Pipeline execution
     */
    output?: Readable;
    constructor(steps?: Array<PipelineStep>);
    /**
     * If this pipeline has been executed once with the run() method
     */
    get executed(): boolean;
    /**
     * Add one or more steps to this Pipeline
     */
    addStep(step: PipelineStep | Array<PipelineStep>): Pipeline;
    /**
     * Merge a given Pipeline in this one
     * All steps of the given Pipeline will be added after this Pipeline's steps
     */
    merge(pipeline: Pipeline): Pipeline;
    /**
     * Run the Pipeline to get the resulted stream
     */
    run(): PipelineResult;
    /**
     * Run the pipeline, wait for resulted stream end and return all data as string
     */
    toString(): Promise<string>;
    /**
     * Create a Pipeline with file read stream as first step
     */
    static fromFile(path: string, steps?: Array<PipelineStep>): Pipeline;
    /**
     * Create a Pipeline from another Pipeline
     */
    static fromPipeline(pipeline: Pipeline, steps?: Array<PipelineStep>): Pipeline;
    /**
     * Create a Pipeline from an archive file
     */
    static fromArchive(archivePath: string, filePath: string, steps?: Array<PipelineStep>): Promise<Pipeline>;
}
