import { ParsingOptions, ParsingReturn } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsJSON = ParsingOptions

/**
 * Parse given Pipeline result stream as JSON format
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function parseAsJSON<T = any>(pipeline: Pipeline, options?: OptionsParseAsJSON): Promise<ParsingReturn<T>> {
  const completeData = await pipeline.toString()
  return {
    pagination: {
      total: 1,
      items: 1,
      offset: 0,
    },
    data: JSON.parse(completeData),
  }
}
