import { ParsingOptions } from '../../types/Parsing'

/**
 * Parse Text (txt) file from given path
 * Throw error if can't access file or if parsing fail
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function parseAsText(filePath: string, options?: ParsingOptions): Promise<string> {
  return Promise.reject(new Error('Not implemented'))
}
