import { ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsJSON = ParsingOptions

/**
 * Parse given Pipeline result stream as JSON format
 */
export default async function parseAsJSON<T = any>(pipeline: Pipeline, options?: OptionsParseAsJSON): Promise<T> {
  return Promise.reject(new Error('Not implemented'))
}
