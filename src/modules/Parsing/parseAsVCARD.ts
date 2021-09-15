// @ts-ignore
import parser from 'vdata-parser'
import { ParsingOptions, ParsingReturn } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsVCARD = ParsingOptions

/**
 * Parse given Pipeline result stream as VCARD format
 */
export default async function parseAsVCARD(pipeline: Pipeline, options?: OptionsParseAsVCARD):
Promise<ParsingReturn<any>> {
  return {
    pagination: {
      total: 1,
      items: 1,
      offset: 0,
    },
    data: parser.fromString(await pipeline.toString()),
  }
}
