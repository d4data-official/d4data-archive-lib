import { ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsICS = ParsingOptions

/**
 * Parse given Pipeline result stream as ICS format
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function parseAsICS(pipeline: Pipeline, options?: OptionsParseAsICS): Promise<any> {
  return Promise.reject(new Error('Not implemented'))
}
