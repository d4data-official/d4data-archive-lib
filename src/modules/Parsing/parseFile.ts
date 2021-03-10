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
 * Parse file from given path for any supported file format
 * Throw error if can't access file or if parsing fail
 */
export default async function parseFile<T = any>(filePath: string, options?: ParsingOptions): Promise<T> {
  const extension = filePath.split('.').pop()?.toLowerCase() ?? ''
  const result = ParserTypes.find(([extensions]) => extensions.includes(extension))
  if (!result) {
    return parseAsText(filePath, options) as any
  }
  return result?.[1](filePath, options)
}
