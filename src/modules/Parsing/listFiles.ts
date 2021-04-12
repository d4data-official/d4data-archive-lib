import path from 'path'
import { promises as fsPromises } from 'fs';
import { FilterOptions } from '../../types/Parsing'

export type OptionsListFiles = FilterOptions

/**
 * List all files recursively in given directory path and return absolute path list
 * Throw error if can't access directory
 */
export default async function listFiles(dirPath: string, options?: FilterOptions): Promise<Array<string>> {
  return getFiles(dirPath, [], options)
}

async function getFiles(dir: string, files_: Array<string> = [], options?: FilterOptions) {
  const files = await fsPromises.readdir(dir);
  for await (const file of files) {
    const name = path.resolve(dir, file);
    if ((await fsPromises.stat(name)).isDirectory()) {
      await getFiles(name, files_, options);
    } else {
      const extension = name.split('.').pop()?.toLowerCase() ?? ''
      if (
        (options?.extensionWhitelist && !options?.extensionWhitelist?.includes(extension))
        || (options?.extensionBlacklist && options?.extensionBlacklist?.includes(extension))
      ) {
        continue
      }
      files_.push(name);
    }
  }
  return files_;
}
