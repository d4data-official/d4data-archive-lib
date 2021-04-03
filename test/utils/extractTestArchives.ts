import fs from 'fs'
import path from 'path'
import { ArchiveFactory } from '../../src'
import Services from '../../src/types/Services'

export type ArchiveExtractionReport = Partial<Record<Services, string>>

export const EXTRACTION_DIR = '.d4data_archive_lib'

export default async function extractTestArchives(archiveDir: string, options?: {
  onSkip?: (reason: string) => void
}): Promise<ArchiveExtractionReport> {
  const report: ArchiveExtractionReport = {}
  const files = await fs.promises.readdir(archiveDir, { withFileTypes: true })
    .then(entries => entries.filter(entry => !entry.isDirectory()))
    .then(fileEntries => fileEntries.map(entry => entry.name))

  const extractionProcesses = files.map(async file => {
    const archiveFactory = await ArchiveFactory.init(path.resolve(archiveDir, file))
    const identifiedService = await archiveFactory.identify()
    const extractionDir = path.resolve(archiveDir, EXTRACTION_DIR, identifiedService.toLowerCase())

    if (identifiedService === Services.UNKNOWN) {
      options?.onSkip?.(`Unknown service: ${ file }`)
      return
    }

    report[identifiedService] = extractionDir

    if (fs.existsSync(extractionDir)) {
      options?.onSkip?.(`Already extracted: ${ file }`)
      return
    }

    return archiveFactory.getPlugin()
      .then(plugin => plugin.extract({
        outputDir: extractionDir,
      }))
  })

  return Promise.all(extractionProcesses)
    .then(() => report)
}
