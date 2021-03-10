import { ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsText = ParsingOptions

/**
 * Parse given Pipeline result stream as Text format
 */
export default async function parseAsText(pipeline: Pipeline, options?: OptionsParseAsText): Promise<string> {
  return pipeline.toString()
}
