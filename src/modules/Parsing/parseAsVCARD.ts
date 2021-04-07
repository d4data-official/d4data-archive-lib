import { ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsVCARD = ParsingOptions

/**
 * Parse given Pipeline result stream as VCARD format
 */
export default async function parseAsVCARD(pipeline: Pipeline, options?: OptionsParseAsVCARD): Promise<any> {
  // eslint-disable-next-line global-require
  const vCard = require('vcf')
  const fileDump = await pipeline.toString()
  return vCard.parse(fileDump)
}
