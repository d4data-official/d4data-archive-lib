import { ParsingOptions } from '../../types/Parsing'

/**
 * Parse HTML file from given path
 * Throw error if can't access file or file format is invalid
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function parseAsHTML(filePath: string, options?: ParsingOptions): Promise<any> {
  return Promise.reject(new Error('Not implemented'))
}
