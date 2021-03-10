import { PaginationOptions, ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsCSV = ParsingOptions & PaginationOptions

/**
 * Parse given Pipeline result stream as CSV format
 */
export default async function parseAsCSV<T = any>(pipeline: Pipeline, options?: OptionsParseAsCSV): Promise<Array<T>> {
  return Promise.reject(new Error('Not implemented'))
}
