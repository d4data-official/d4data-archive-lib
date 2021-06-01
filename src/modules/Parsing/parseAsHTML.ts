import { JSDOM } from 'jsdom'
import { ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsHTML = ParsingOptions

/**
 * Parse given Pipeline result stream as HTML format
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function parseAsHTML(pipeline: Pipeline, options?: OptionsParseAsHTML): Promise<JSDOM> {
  const completeData = await pipeline.toString()
  return new JSDOM(completeData)
}
