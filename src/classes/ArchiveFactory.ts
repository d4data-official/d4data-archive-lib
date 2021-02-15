import Archive, { OUTPUT_DIR } from './Archive/Archive'
import ArchivePlugins from './Archive'
import SERVICES from '../types/SERVICES'

export default class ArchiveFactory {
  path: string

  outputDir: string

  archivePlugins: Array<Archive>

  constructor(archivePath: string, outputDir?: string) {
    this.path = archivePath
    this.outputDir = outputDir ?? OUTPUT_DIR
    this.archivePlugins = ArchivePlugins.map(ArchivePlugin => new ArchivePlugin(this.path, this.outputDir))
  }

  async identify(): Promise<SERVICES> {
    return Promise.any(
      this.archivePlugins.map(plugin => plugin.identifyService()
        .then(archive => archive.service)),
    )
  }

  async getArchivePlugin(): Promise<Archive> {
    return Promise.any(
      this.archivePlugins.map(plugin => plugin.identifyService()),
    )
  }
}
