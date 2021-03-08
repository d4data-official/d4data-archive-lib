import { ParsingOptions } from '../../types/Parsing'
import parseAsText from './parseAsText'
import parseAsJSON from './parseAsJSON'
import parseAsJSONL from './parseAsJSONL'
import parseAsHTML from './parseAsHTML'
import parseAsCSV from './parseAsCSV'
import parseAsMBOX from './parseAsMBOX'
import parseAsVCARD from './parseAsVCARD'
import parseAsICS from './parseAsICS'

/**
 * List all file extensions for a file type
 */
export const SupportedFileFormats = {
  TEXT: ['txt'],
  JSON: ['json'],
  JSONL: ['jsonl'],
  HTML: ['html'],
  CSV: ['csv'],
  MBOX: ['mbox'],
  VCARD: ['vcard'],
  ICS: ['ics'],
}

/**
 * Associations of file extension list to parsing functions
 * Used in parseFile function to get the good parser from a file extension
 */
export const ParserTypes: Array<[Array<string>, Function]> = [
  [SupportedFileFormats.TEXT, parseAsText],
  [SupportedFileFormats.JSON, parseAsJSON],
  [SupportedFileFormats.JSONL, parseAsJSONL],
  [SupportedFileFormats.HTML, parseAsHTML],
  [SupportedFileFormats.CSV, parseAsCSV],
  [SupportedFileFormats.MBOX, parseAsMBOX],
  [SupportedFileFormats.VCARD, parseAsVCARD],
  [SupportedFileFormats.ICS, parseAsICS],
]

export type OptionsParseFile = ParsingOptions

/**
 * Parse file from given path for any supported file format
 * Throw error if can't access file or if parsing fail
 */
export default async function parseFile<T = any>(filePath: string, options?: OptionsParseFile): Promise<T> {
  return Promise.reject(new Error('Not implemented'))
}
