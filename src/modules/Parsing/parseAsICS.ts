// @ts-ignore
import parser from 'vdata-parser'
import { ParsingOptions, ParsingReturn } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsICS = ParsingOptions

/**
 * Parse given Pipeline result stream as ICS format
 */
export default async function parseAsICS(pipeline: Pipeline, options?: OptionsParseAsICS): Promise<ParsingReturn<any>> {
  return {
    pagination: {
      total: 1,
      items: 1,
      offset: 0,
    },
    data: parser.fromString(await pipeline.toString()),
  }
}
