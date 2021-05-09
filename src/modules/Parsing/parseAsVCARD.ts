import { ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsVCARD = ParsingOptions

/**
 * Parse given Pipeline result stream as VCARD format
 */
export default async function parseAsVCARD(pipeline: Pipeline, options?: OptionsParseAsVCARD): Promise<any> {
  return Promise.reject(new Error('Not implemented'))
}
