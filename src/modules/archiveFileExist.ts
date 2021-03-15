import yauzl from 'yauzl'
import { ArchiveFormat, identifyArchiveFormat } from './ArchiveExtraction'

const handlers: Array<{ format: ArchiveFormat, handler: Function }> = [
  { format: ArchiveFormat.ZIP, handler: archiveFileExistZIP },
]

export default async function archiveFileExist(
  archivePath: string,
  relativePathList: Array<string>,
): Promise<Array<boolean>> {
  const archiveFormat = await identifyArchiveFormat(archivePath)
  const handler = handlers
    .find(item => item.format === archiveFormat)
    ?.handler

  if (!handler) {
    throw new Error('Unknown archive format')
  }

  return handler(archivePath, relativePathList)
}

export async function archiveFileExistZIP(
  archivePath: string,
  relativePathList: Array<string>,
): Promise<Array<boolean>> {
  return new Promise((resolve, reject) => {
    const result: Array<boolean> = Array(relativePathList.length).fill(false)

    yauzl.open(archivePath, (err, zipFile) => {
      if (err) throw err
      if (!zipFile) {
        return
      }
      zipFile.on('entry', entry => {
        // Test file entry
        if (!/\/$/.test(entry.fileName)) {
          const wantedPathIdx = relativePathList.findIndex(path => path === entry.fileName)

          if (wantedPathIdx > -1) {
            result[wantedPathIdx] = true
          }
        }
      })
      zipFile.on('error', error => reject(error))
      zipFile.on('end', () => resolve(result))
    })
  })
}
