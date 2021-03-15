import Archive, { OUTPUT_DIR } from './Archive/Archive'
import Services from '../types/Services'
import Standardizer from './Standardizer/Standardizer'
import Unknown from './Archive/Unknown'

export default class ArchiveFactory {
  path: string

  outputDir: string

  archivePlugins: Array<Archive>

  constructor(archivePath: string, outputDir?: string) {
    this.path = archivePath
    this.outputDir = outputDir ?? OUTPUT_DIR
    this.archivePlugins = Archive.getPluginsSync()
      // @ts-ignore
      .map(archivePlugin => new archivePlugin(this.path, this.outputDir))
  }

  async identify(): Promise<Services> {
    return this.getArchivePlugin()
      .then(archive => archive.service)
  }

  getArchivePluginFromService(service: Services): Archive | undefined {
    return this.archivePlugins.find(plugin => plugin.service === service)
  }

  async getArchivePlugin(): Promise<Archive> {
    return Promise.any(
      this.archivePlugins.map(
        plugin => plugin
          .identifyService()
          .then(result => (result ? plugin : Promise.reject())),
      ),
    )
      .catch(() => new Unknown(this.path))
  }

  async getStandardizer(): Promise<Standardizer> {
    return this.getArchivePlugin()
      .then(archive => archive.extract())
      .then(archive => archive.standardizer)
  }
}
