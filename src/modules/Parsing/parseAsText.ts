import { ParsingOptions, ParsingReturn } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsText = ParsingOptions

/**
 * Parse given Pipeline result stream as Text format
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function parseAsText(
  pipeline: Pipeline,
  options?: OptionsParseAsText,
): Promise<ParsingReturn<string>> {
  return {
    pagination: null,
    data: await pipeline.toString(),
  }
}
