import Archive, { OUTPUT_DIR } from './Archive/Archive'
import Services from '../types/Services'
import Standardizer from './Standardizer/Standardizer'
import Unknown from './Archive/Unknown'

export default class ArchiveFactory {
  path: string

  outputDir: string

  plugins: Array<Archive>

  constructor(archivePath: string, outputDir: string = OUTPUT_DIR, plugins: Array<Archive> = []) {
    this.path = archivePath
    this.outputDir = outputDir
    this.plugins = plugins
  }

  async identify(): Promise<Services> {
    return this.getPlugin()
      .then(archive => archive.service)
  }

  getServiceArchive(service: Services): Archive | undefined {
    return this.plugins.find(plugin => plugin.service === service)
  }

  async getPlugin(): Promise<Archive> {
    return Promise.any(
      this.plugins.map(
        plugin => plugin
          .identifyService()
          .then(result => (result ? plugin : Promise.reject())),
      ),
    )
      .catch((errors: AggregateError) => {
        if (errors.errors.find(item => item !== undefined)) {
          const customErrors = errors.errors.map((error: Error | undefined, index) => {
            const customError = error
            if (!customError) {
              return
            }
            customError.message += ` (${ this.plugins[index]?.service })`
            return customError
          })
          console.error(errors, customErrors)
        }

        return new Unknown(this.path)
      })
  }

  async getStandardizer(): Promise<Standardizer> {
    return this.getPlugin()
      .then(archive => archive.extract())
      .then(archive => archive.standardizer)
  }

  static async init(archivePath: string, outputDir?: string, plugins: Array<Archive> = []) {
    const defaultPlugins: Array<Archive> = (await Archive.getPlugins())
      // @ts-ignore
      .map(archivePlugin => new archivePlugin(archivePath, outputDir))
    return new ArchiveFactory(archivePath, outputDir, [...defaultPlugins, ...plugins])
  }
}
