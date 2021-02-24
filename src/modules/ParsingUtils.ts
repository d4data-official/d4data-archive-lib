export type Preprocessor = (fileContent: string) => Promise<string>

export interface FilterOptions {
  extensionWhitelist?: Array<string>
  extensionBlacklist?: Array<string>
}

export interface PaginationOptions {
  pagination?: {
    offset: number
    items: number
  }
}

export interface ParsingOptions {
  // Force parsing when file type are invalid
  ignoreFileExt?: boolean
  // List of pre-processing functions applied to the file content before type parsing
  preprocessors?: Array<Preprocessor>
}

/**
 * List all file extensions for a file type
 */
export const SupportedFileFormats = {
  TEXT: ['txt'],
  JSON: ['json'],
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
  [SupportedFileFormats.HTML, parseAsHTML],
  [SupportedFileFormats.CSV, parseAsCSV],
  [SupportedFileFormats.MBOX, parseAsMBOX],
  [SupportedFileFormats.VCARD, parseAsVCARD],
  [SupportedFileFormats.ICS, parseAsICS],
]

/**
 * List all files recursively in given directory path and return absolute path list
 * Throw error if can't access directory
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function listFiles(dirPath: string, options?: FilterOptions): Promise<Array<string>> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse directory files recursively from given path for any supported file format
 */
export async function parseDir(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dirPath: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: ParsingOptions & FilterOptions,
): Promise<Array<Record<string, unknown>>> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse file from given path for any supported file format or throw an error
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseFile(filePath: string, options?: ParsingOptions): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse Text (txt) file from given path
 * Throw error if can't access file or file format is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseAsText(filePath: string, options?: ParsingOptions): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse JSON file from given path
 * Throw error if can't access file or file format is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseAsJSON(filePath: string, options?: ParsingOptions): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse HTML file from given path
 * Throw error if can't access file or file format is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseAsHTML(filePath: string, options?: ParsingOptions): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse CSV file from given path
 * Throw error if can't access file or file format is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseAsCSV(filePath: string, options?: ParsingOptions & PaginationOptions): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse MBOX file from given path
 * Throw error if can't access file or file format is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseAsMBOX(filePath: string, options?: ParsingOptions & PaginationOptions): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse VCARD file from given path
 * Throw error if can't access file or file format is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseAsVCARD(filePath: string, options?: ParsingOptions): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse ICS file from given path
 * Throw error if can't access file or file format is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseAsICS(filePath: string, options?: ParsingOptions): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

export default {
  listFiles,
  parseFile,
  parseDir,
  parseAsText,
  parseAsJSON,
  parseAsHTML,
  parseAsCSV,
  parseAsMBOX,
  parseAsVCARD,
  parseAsICS,
}
