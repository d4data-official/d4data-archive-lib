import yauzl from 'yauzl'
import { Stream } from 'stream'
import { ArchiveFormat, identifyArchiveFormat } from './ArchiveExtraction'

const handlers: Array<{ format: ArchiveFormat, handler: Function }> = [
  { format: ArchiveFormat.ZIP, handler: getFileFromZIP },
]

export default async function getFileFromArchive(
  archivePath: string,
  relativePathList: Array<string>,
): Promise<Array<Stream | undefined>> {
  const archiveFormat = await identifyArchiveFormat(archivePath)
  const handler = handlers.find(item => item.format === archiveFormat)?.handler

  if (!handler) {
    throw new Error('Unknown archive format')
  }

  return handler(archivePath, relativePathList)
}

export async function getFileFromZIP(
  archivePath: string,
  relativePathList: Array<string>,
): Promise<Array<Stream | undefined>> {
  return new Promise((resolve, reject) => {
    const result: Array<Stream | undefined> = Array(relativePathList.length).fill(undefined)

    yauzl.open(archivePath, { lazyEntries: true }, (err, zipfile) => {
      if (err) throw err
      if (!zipfile) {
        return
      }
      zipfile.readEntry()

      zipfile.on('entry', entry => {
        if (/\/$/.test(entry.fileName)) {
          // Directory entry
          // Directory file names end with '/'.
          zipfile.readEntry()
        } else {
          // File entry
          const wantedPathIdx = relativePathList.findIndex(path => path === entry.fileName)

          if (wantedPathIdx > -1) {
            zipfile.openReadStream(entry, (streamErr, readStream) => {
              if (streamErr) throw streamErr
              if (!readStream) {
                return
              }
              result[wantedPathIdx] = readStream
              zipfile.readEntry()
            })
          } else {
            zipfile.readEntry()
          }
        }
      })

      zipfile.on('error', error => reject(error))
      zipfile.on('end', () => resolve(result))
    })
  })
}
