import { PaginationOptions, ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsMBOX = ParsingOptions & PaginationOptions

/**
 * Parse given Pipeline result stream as MBOX format
 */
export default async function parseAsMBOX(pipeline: Pipeline, options?: OptionsParseAsMBOX): Promise<Array<any>> {
  return Promise.reject(new Error('Not implemented'))
}
