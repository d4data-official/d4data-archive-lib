import Archive, { OUTPUT_DIR } from './Archive/Archive'
import ArchivePlugins from './Archive'
import SERVICES from '../types/SERVICES'

export default class ArchiveFactory {
  path: string

  outputDir: string

  constructor(archivePath: string, outputDir?: string) {
    this.path = archivePath
    this.outputDir = outputDir ?? OUTPUT_DIR
  }

  async identify(): Promise<SERVICES> {
    return Promise.any(
      ArchivePlugins.map(ArchivePlugin => new ArchivePlugin(this.path, this.outputDir).identifyService()
        .then(archive => archive.service)),
    )
  }

  async getArchivePlugin(): Promise<Archive> {
    return Promise.any(
      ArchivePlugins.map(ArchivePlugin => new ArchivePlugin(this.path, this.outputDir).identifyService()),
    )
  }
}
