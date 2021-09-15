import { JSDOM } from 'jsdom'
import { ParsingOptions, ParsingReturn } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsHTML = ParsingOptions

/**
 * Parse given Pipeline result stream as HTML format
 */
export default async function parseAsHTML(
  pipeline: Pipeline,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: OptionsParseAsHTML,
): Promise<ParsingReturn<JSDOM>> {
  const completeData = await pipeline.toString()
  return {
    data: new JSDOM(completeData),
    pagination: null,
  }
}
