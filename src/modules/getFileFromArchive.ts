import yauzl from 'yauzl'
import { Stream } from 'stream'
import tar from 'tar';
import fs, { createReadStream } from 'fs';
import os from 'os'
import path from 'path';
import { ArchiveFormat, identifyArchiveFormat } from './ArchiveExtraction'

const handlers: Array<{ format: ArchiveFormat, handler: Function }> = [
  { format: ArchiveFormat.ZIP, handler: getFileFromZIP },
  { format: ArchiveFormat.TARGZ, handler: getFileFromTGZ },
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

export async function getFileFromTGZ(
  archivePath: string,
  relativePathList: Array<string>,
): Promise<Array<Stream | undefined>> {
  return new Promise((resolve, reject) => {
    const streams: Array<Stream | undefined | string > = new Array(relativePathList.length)
    streams.fill(undefined)
    fs.createReadStream(archivePath).pipe(
      tar.x({
        C: os.tmpdir(),
      }, relativePathList),
    ).on('entry', (entry) => {
      console.log(entry.path)
      const idx = relativePathList.findIndex(path => path === entry.path)
      if (idx !== -1) streams[idx] = path.join(os.tmpdir(), entry.path)
    }).on('close', (test: any) => {
      streams.forEach((stream, i) => streams[i] = stream ? fs.createReadStream(<string>(stream)) : undefined)
      resolve(<Array<Stream | undefined>>(streams))
    })
  })
}
