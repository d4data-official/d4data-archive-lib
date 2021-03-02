import Path from 'path';
import fs from 'fs/promises';
import fsSync from 'fs';
import yauzl from 'yauzl';

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

/* eslint-disable @typescript-eslint/no-unused-vars */

export default async function extractArchive(
  path: string,
  outputPath: string,
  options?: ExtractOptions,
): Promise<void> {
  const format = await identifyArchiveFormat(path)
  switch (format) {
    case ArchiveFormat.ZIP:
      await unzip(path, outputPath, options)
      break;
    default:
      throw (new Error('Unknown Format'))
  }
}

async function unzip(filePath: string, outputPath: string, options?: ExtractOptions) {
  await fs.rm(outputPath, { recursive: true, force: true })
  await fs.mkdir(Path.dirname(outputPath), { recursive: true });
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    yauzl.open(filePath, { lazyEntries: true }, async (err, zipfile) => {
      if (err) reject(err);
      if (!zipfile) return;
      zipfile.readEntry();
      zipfile.on('entry', async (entry) => {
        if (/\/$/.test(entry.fileName)) {
          zipfile.readEntry();
        } else {
          zipfile.openReadStream(entry, async (er, readStream) => {
            if (er) throw er;
            if (!readStream) return;
            readStream.on('end', () => {
              zipfile.readEntry();
            });
            await fs.mkdir(Path.dirname(Path.resolve(outputPath, entry.fileName)), { recursive: true });
            const writeStream = fsSync.createWriteStream(Path.resolve(outputPath, entry.fileName));
            readStream.pipe(writeStream)
              .on('finish', () => {
                options?.onProgress?.(entry.fileName, zipfile.entriesRead, zipfile.entryCount);
              })
              .on('error', (error) => {
                console.error(error);
                reject(error);
              });
          });
        }
      });
      // Extraction ending handler
      zipfile.on('close', async () => {
        console.log('Archive extracted');
        resolve(outputPath);
      });
      zipfile.on('error', async (error) => {
        console.error(error);
        reject(error);
      });
    });
  });
}
