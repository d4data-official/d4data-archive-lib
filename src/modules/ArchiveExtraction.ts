export enum ArchiveFormat {
  ZIP = 'zip',
  UNKNOWN = 'unknown',
}

export interface ExtractOptions {
  onProgress?: (extractedCount: number, total: number) => void
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
  return undefined
}
