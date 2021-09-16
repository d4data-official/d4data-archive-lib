import yauzl from 'yauzl'
import path from 'path'
import tar, { FileStat } from 'tar';
import { FilterOptions } from '../types/Parsing'
import { ArchiveFormat, identifyArchiveFormat } from './ArchiveExtraction'

export type OptionsListFilesFromArchive = FilterOptions & {
  recursive?: boolean
}

const handlers: Array<{ format: ArchiveFormat, handler: Function }> = [
  { format: ArchiveFormat.ZIP, handler: listFilesFromArchiveZip },
]

/**
 * List all files recursively from given directory path inside archive and return relative path list
 * Throw error if can't access archive
 */
export default async function listFilesFromArchive(
  archivePath: string,
  relativeDirPath: string,
  options?: OptionsListFilesFromArchive,
): Promise<Array<string>> {
  const archiveFormat = await identifyArchiveFormat(archivePath)
  const handler = handlers.find(item => item.format === archiveFormat)?.handler

  if (!handler) {
    throw new Error('Unknown archive format')
  }

  return handler(archivePath, relativeDirPath, options)
}

export async function listFilesFromArchiveZip(
  archivePath: string,
  relativeDirPath: string,
  options?: OptionsListFilesFromArchive,
): Promise<Array<string>> {
  const { extensionWhitelist, extensionBlacklist, recursive = true } = options ?? {}

  return new Promise((resolve, reject) => {
    const fileList: Array<string> = []

    yauzl.open(archivePath, (err, zipFile) => {
      if (err) throw err
      if (!zipFile) {
        return
      }
      zipFile.on('entry', entry => {
        // Ignore directory entry
        if (/\/$/.test(entry.fileName)) {
          return
        }

        const { ext, dir } = path.parse(entry.fileName)
        const extension = ext.slice(1) // Remove dot char from extension (.ext)
        const relativePath = relativeDirPath.length && relativeDirPath[relativeDirPath.length - 1] !== '/'
          ? `${ relativeDirPath }/`
          : relativeDirPath
        const entryDir = dir.length ? `${ dir }/` : dir

        if ((!recursive && entryDir !== relativePath) || !entryDir.startsWith(relativePath)) {
          return
        }

        if (
          (extensionWhitelist && !extensionWhitelist?.includes(extension))
          || (extensionBlacklist && extensionBlacklist?.includes(extension))
        ) {
          return
        }

        fileList.push(entry.fileName)
      })
      zipFile.on('error', error => reject(error))
      zipFile.on('end', () => resolve(fileList))
    })
  })
}

export async function listFilesFromArchiveTGZ(
  archivePath: string,
  relativeDirPath: string,
  options?: OptionsListFilesFromArchive,
): Promise<Array<string>> {
  return new Promise<Array<string>>((resolve, reject) => {
    const files: string[] = []
    tar.t({ file: archivePath,
      onentry(entry: any) {
        files.push(entry.path)
        if (!entry.meta) resolve(files)
      } }, [])
  })
}
