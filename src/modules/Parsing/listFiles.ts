import { FilterOptions } from '../../types/Parsing'

export type OptionsListFiles = FilterOptions

/**
 * List all files recursively in given directory path and return absolute path list
 * Throw error if can't access directory
 */
export default async function listFiles(dirPath: string, options?: OptionsListFiles): Promise<Array<string>> {
  return Promise.reject(new Error('Not implemented'))
}
