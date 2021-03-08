import { ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsHTML = ParsingOptions

/**
 * Parse given Pipeline result stream as HTML format
 */
export default async function parseAsHTML(pipeline: Pipeline, options?: OptionsParseAsHTML): Promise<any> {
  return Promise.reject(new Error('Not implemented'))
}
