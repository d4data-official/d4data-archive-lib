import { ParsingOptions, ParsingReturn } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsVCARD = ParsingOptions

/**
 * Parse given Pipeline result stream as VCARD format
 */
export default async function parseAsVCARD(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  pipeline: Pipeline,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: OptionsParseAsVCARD,
): Promise<ParsingReturn<any>> {
  return Promise.reject(new Error('Not implemented'))
}
