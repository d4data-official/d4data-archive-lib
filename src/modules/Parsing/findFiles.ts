import { FilterOptions } from '../../types/Parsing'
import listFiles from './listFiles'

/**
 * List all files that matches the given regular expression
 */
export default async function findFiles(
  regex: RegExp,
  relativePath: string,
  options?: FilterOptions,
): Promise<Array<string>> {
  const paths = await listFiles(relativePath, options)
  return paths.filter((file) => regex.test(file))
}
