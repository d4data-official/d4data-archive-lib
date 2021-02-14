export interface ParsingOptions {
  extensionWhitelist?: Array<string>
  extensionBlacklist?: Array<string>
}

/**
 * List all files recursively in given directory path and return absolute path list
 * Throw error if can't access directory
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function listFiles(dirPath: string, options?: ParsingOptions): Promise<Array<string>> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse directory files recursively from given path for any supported file format
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseDir(dirPath: string, options?: ParsingOptions): Promise<Array<Record<string, unknown>>> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse file from given path for any supported file format or throw an error
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseFile(filePath: string): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse JSON file from given path
 * Throw error if can't access file or extension is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseJSON(filePath: string): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse HTML file from given path
 * Throw error if can't access file or extension is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseHTML(filePath: string): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse CSV file from given path
 * Throw error if can't access file or extension is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseCSV(filePath: string): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse MBOX file from given path
 * Throw error if can't access file or extension is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseMBOX(filePath: string): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse VCARD file from given path
 * Throw error if can't access file or extension is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseVCARD(filePath: string): Promise<unknown> {
  return Promise.reject(new Error('Not implemented'))
}

/**
 * Parse ICS file from given path
 * Throw error if can't access file or extension is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parseICS(filePath: string): Promise<unknown> {
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
