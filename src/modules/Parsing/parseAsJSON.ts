import { ParsingOptions } from '../../types/Parsing'

/**
 * Parse JSON file from given path
 * Throw error if can't access file or if parsing fail
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function parseAsJSON<T = any>(filePath: string, options?: ParsingOptions): Promise<T> {
  return Promise.reject(new Error('Not implemented'))
}
