import Path from 'path'
import tar, { ReadEntry } from 'tar'
import { createWriteStream, promises as fsPromises } from 'fs'
import yauzl from 'yauzl'

export enum ArchiveFormat {
  ZIP = 'zip',
  UNKNOWN = 'unknown',
  TARGZ = 'tar.gz',
}

export interface ExtractOptions {
  onProgress?: (fileName: string, extractedCount: number, total: number) => void
  format?: ArchiveFormat
}

/**
 * Identify archive file format
 */
export async function identifyArchiveFormat(path: string): Promise<ArchiveFormat> {
  const extensions = [
    [ArchiveFormat.ZIP, ['zip']],
    [ArchiveFormat.TARGZ, ['tgz']],
    [ArchiveFormat.TARGZ, ['tar.gz']],
  ];
  const explode = path.split('.')
  const fileExtension = path.split('.').pop();

  for (const [format, extList] of extensions) {
    const extCount = extList[0].split('.').length
    const fullExt = explode.slice(explode.length - extCount, explode.length).join('')
    const composedExtension = explode.length > 1 ? fullExt : ''
    if (extList.includes(<string>fileExtension) || (composedExtension !== '' && extList.includes(composedExtension))) {
      return <ArchiveFormat>format;
    }
  }
  return ArchiveFormat.UNKNOWN;
}

export default async function extractArchive(
  path: string,
  outputPath: string,
  options?: ExtractOptions,
): Promise<void> {
  const format = await identifyArchiveFormat(path)
  switch (format) {
    case ArchiveFormat.ZIP:
      await unzip(path, outputPath, options)
      break
    case ArchiveFormat.TARGZ:
      await unTarGz(path, outputPath, options)
      break
    default:
      throw new Error('Unknown Format')
  }
}

export async function countFileInZip(filePath: string): Promise<number> {
  return new Promise((resolve, reject) => {
    let fileCount = 0

    yauzl.open(filePath, (yauzlError, zipFile) => {
      if (yauzlError) reject(yauzlError)
      if (!zipFile) {
        return
      }

      zipFile.on('entry', entry => {
        // If it's file entry
        if (!(/\/$/.test(entry.fileName))) {
          fileCount += 1
        }
      })
      zipFile.on('close', () => resolve(fileCount))
      zipFile.on('error', error => reject(error))
    })
  })
}

async function unzip(filePath: string, outputPath: string, options?: ExtractOptions) {
  const fileCount = await countFileInZip(filePath)
  let extractedCount = 0

  await fsPromises.mkdir(outputPath, { recursive: true })
  return new Promise((resolve, reject) => {
    yauzl.open(filePath, (yauzlError: any, zipFile: any) => {
      if (yauzlError) reject(yauzlError)

      zipFile.on('entry', (entry: any) => {
        if (!(/\/$/.test(entry.fileName))) {
          zipFile.openReadStream(entry, async (streamErr: any, readStream: any) => {
            if (streamErr) reject(streamErr)

            const outputFilePath = Path.resolve(outputPath, entry.fileName)
            await fsPromises.mkdir(Path.dirname(outputFilePath), { recursive: true })
            const writeStream = createWriteStream(outputFilePath)

            readStream.pipe(writeStream)
              .on('finish', () => {
                extractedCount += 1
                options?.onProgress?.(entry.fileName, extractedCount, fileCount)
              })
              .on('error', (error: any) => reject(error))
          })
        }
      })
      // Extraction ending handler
      zipFile.on('close', () => resolve(outputPath))
      zipFile.on('error', (error: any) => reject(error))
    })
  })
}

async function unTarGz(filePath: string, outputPath: string, options?: ExtractOptions) {
  let entries = 0
  tar.t(
    {
      file: filePath,
      onentry() {
        entries += 1
      },
    },
  )
  let read = 0
  tar.x(
    {
      file: filePath,
      cwd: outputPath,
      onentry: (entry) => {
        options?.onProgress?.(entry.path, read, entries)
        read += 1
      },
    },
  ).then(() => options?.onProgress?.('', read, entries))
}
