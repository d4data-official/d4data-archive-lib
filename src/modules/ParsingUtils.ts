export type Preprocessor = (path: string) => Promise<string>

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
 * Parse JSON file from given path
 * Throw error if can't access file or file format is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseJSON(filePath: string, options?: ParsingOptions): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse HTML file from given path
 * Throw error if can't access file or file format is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseHTML(filePath: string, options?: ParsingOptions): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse CSV file from given path
 * Throw error if can't access file or file format is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseCSV(filePath: string, options?: ParsingOptions & PaginationOptions): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse MBOX file from given path
 * Throw error if can't access file or file format is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseMBOX(filePath: string, options?: ParsingOptions & PaginationOptions): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse VCARD file from given path
 * Throw error if can't access file or file format is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseVCARD(filePath: string, options?: ParsingOptions): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse ICS file from given path
 * Throw error if can't access file or file format is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseICS(filePath: string, options?: ParsingOptions): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

export default {
  listFiles,
  parseFile,
  parseDir,
  parseJSON,
  parseHTML,
  parseCSV,
  parseMBOX,
  parseVCARD,
  parseICS,
}
