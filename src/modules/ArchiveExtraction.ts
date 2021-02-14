export interface ExtractOptions {
  onProgress?: (extractedCount: number, total: number) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function extractArchive(path: string, outputPath: string, options?: ExtractOptions) {

}
