import { FilterOptions, ParsingOptions } from '../../types/Parsing'

/**
 * Parse directory files recursively from given path for any supported file format
 */
export default async function parseDir(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dirPath: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: ParsingOptions & FilterOptions,
): Promise<Array<Record<string, any>>> {
  return Promise.reject(new Error('Not implemented'))
}
