import { FilterOptions } from '../../types/Parsing'

/**
 * List all files recursively in given directory path and return absolute path list
 * Throw error if can't access directory
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function listFiles(dirPath: string, options?: FilterOptions): Promise<Array<string>> {
  return Promise.reject(new Error('Not implemented'))
}
