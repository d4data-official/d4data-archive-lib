import fs from 'fs'
import { pipeline as nodePipeline, Readable, Stream } from 'stream'

export type PipelineResult = Readable

export type PipelineStep = Stream | ((stream?: Readable) => Iterable<any> | AsyncIterable<any>)

export default class Pipeline {
  /**
   * Output stream resulted of previous Pipeline execution
   */
  output?: Readable

  constructor(public steps: Array<PipelineStep> = []) {
  }

  /**
   * If this pipeline has been executed once with the run() method
   */
  get executed() {
    return this.output !== undefined
  }

  /**
   * Add one or more steps to this Pipeline
   */
  addStep(step: PipelineStep | Array<PipelineStep>): Pipeline {
    if (Array.isArray(step)) {
      this.steps = this.steps.concat(step)
    } else {
      this.steps.push(step)
    }
    return this
  }

  /**
   * Merge a given Pipeline in this one
   * All steps of the given Pipeline will be added after this Pipeline's steps
   */
  merge(pipeline: Pipeline): Pipeline {
    this.steps = this.steps.concat(pipeline.steps)
    return this
  }

  /**
   * Run the Pipeline to get the resulted stream
   */
  run(): PipelineResult {
    if (this.steps.length === 0) {
      throw new Error('Can not run empty Pipeline')
    }

    if (this.steps.length === 1) {
      return this.steps[0] as Readable
    }

    const stream = nodePipeline(
      // @ts-ignore
      this.steps,
      (error: NodeJS.ErrnoException) => {
        if (error) {
          throw error
        }
      },
    ) as any

    this.output = stream

    return stream
  }

  /**
   * Create a Pipeline with file read stream as first step
   */
  static fromFile(path: string, steps: Array<PipelineStep> = []) {
    return new Pipeline([
      fs.createReadStream(path),
      ...steps,
    ])
  }

  /**
   * Create a Pipeline from another Pipeline
   */
  static fromPipeline(pipeline: Pipeline, steps: Array<PipelineStep> = []) {
    return new Pipeline([
      ...pipeline.steps,
      ...steps,
    ])
  }
}
