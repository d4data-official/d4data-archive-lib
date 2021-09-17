import { FilterOptions, PaginationOptions, ParsingOptions, PreprocessorOptions } from '../../types/Parsing'

export type OptionsParseDir = ParsingOptions & FilterOptions & PaginationOptions & PreprocessorOptions

/**
 * Parse directory files recursively from given path for any supported file format
 */
export default async function parseDir(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dirPath: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: OptionsParseDir,
): Promise<Array<Record<string, any>>> {
  return Promise.reject(new Error('Not implemented'))
}
