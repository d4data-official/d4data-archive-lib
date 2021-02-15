export interface ExtractOptions {
  onProgress?: (extractedCount: number, total: number) => void
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export default async function extractArchive(
  path: string,
  outputPath: string,
  options?: ExtractOptions,
): Promise<void> {
  return undefined
}
