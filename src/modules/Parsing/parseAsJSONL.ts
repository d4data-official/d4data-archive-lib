import { PaginationOptions, ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsJSONL = ParsingOptions & PaginationOptions

/**
 * Parse given Pipeline result stream as JSONL format
 */
export default async function parseAsJSONL<T = any>(
  pipeline: Pipeline,
  options?: OptionsParseAsJSONL,
): Promise<Array<T>> {
  return Promise.reject(new Error('Not implemented'))
}
