import Path from 'path'
import fs from 'fs/promises'
import { createWriteStream } from 'fs'
import yauzl from 'yauzl'

export enum ArchiveFormat {
  ZIP = 'zip',
  UNKNOWN = 'unknown',
}

export interface ExtractOptions {
  onProgress?: (fileName: string, extractedCount: number, total: number) => void
  format?: ArchiveFormat
}

/**
 * Identify archive file format
 */
export async function identifyArchiveFormat(path: string): Promise<ArchiveFormat> {
  const extensions: Array<[ArchiveFormat, Array<string>]> = [
    [ArchiveFormat.ZIP, ['zip']],
  ]
  const fileExtension = path.split('.').pop()!

  for (const [format, extList] of extensions) {
    if (extList.includes(fileExtension)) {
      return format
    }
  }

  return ArchiveFormat.UNKNOWN
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
    default:
      throw new Error('Unknown Format')
  }
}

async function unzip(filePath: string, outputPath: string, options?: ExtractOptions) {
  let currentIndex = 0

  await fs.mkdir(outputPath, { recursive: true })
  return new Promise((resolve, reject) => {
    yauzl.open(filePath, (yauzlError: any, zipFile: any) => {
      if (yauzlError) reject(yauzlError)

      zipFile.on('entry', (entry: any) => {
        if (!(/\/$/.test(entry.fileName))) {
          zipFile.openReadStream(entry, async (streamErr: any, readStream: any) => {
            if (streamErr) reject(streamErr)

            const outputFilePath = Path.resolve(outputPath, entry.fileName)
            await fs.mkdir(Path.dirname(outputFilePath), { recursive: true })
            const writeStream = createWriteStream(outputFilePath)
            const idx = currentIndex

            readStream.pipe(writeStream)
              .on('finish', () => options?.onProgress?.(entry.fileName, idx, zipFile.entryCount))
              .on('error', (error: any) => reject(error))
          })
        }
        currentIndex += 1
      })
      // Extraction ending handler
      zipFile.on('close', () => resolve(outputPath))
      zipFile.on('error', (error: any) => reject(error))
    })
  })
}
