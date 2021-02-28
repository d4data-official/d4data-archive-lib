import { ParsingOptions } from '../../types/Parsing'
import {
  parseAsText,
  parseAsHTML,
  parseAsJSON,
  parseAsJSONL,
  parseAsCSV,
  parseAsMBOX,
  parseAsVCARD,
  parseAsICS,
} from '.'

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

/**
 * Parse file from given path for any supported file format or throw an error
 * Throw error if can't access file or file format is invalid
 * With ignoreFileExt option, the file is considered as Text
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function parseFile<T = any>(filePath: string, options?: ParsingOptions): Promise<T> {
  return Promise.reject(new Error('Not implemented'))
}
