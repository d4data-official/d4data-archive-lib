import { Services } from 'types/Services';
import Standardizer from 'classes/standardizer/Standardizer'
import Archive, { OUTPUT_DIR } from 'classes/archive/Archive'
import Unknown from 'classes/archive/Unknown'

/**
 *
 *
 * @export
 * @class ArchiveFactory
 */
export default class ArchiveFactory {
  /**
   *
   *
   * @type {string}
   * @memberof ArchiveFactory
   */
  path: string

  /**
   *
   *
   * @type {string}
   * @memberof ArchiveFactory
   */
  outputDir: string

  /**
   *
   *
   * @type {Array<Archive>}
   * @memberof ArchiveFactory
   */
  archivePlugins: Array<Archive> = Archive.getPluginsSync()
    // @ts-ignore
    .map(archivePlugin => new archivePlugin(this.path, this.outputDir))

  /**
   * Creates an instance of ArchiveFactory.
   * @param {string} archivePath
   * @param {string} [outputDir]
   * @memberof ArchiveFactory
   */
  constructor(archivePath: string, outputDir?: string) {
    this.path = archivePath
    this.outputDir = outputDir ?? OUTPUT_DIR
  }

  /**
   *
   *
   * @return {Promise<Services>}
   * @memberof ArchiveFactory
   */
  async identify(): Promise<Services> {
    return this.getArchivePlugin()
      .then(archive => archive.service)
  }

  /**
   *
   *
   * @param {Services} service
   * @return {(Archive | undefined)}
   * @memberof ArchiveFactory
   */
  getArchivePluginFromService(service: Services): Archive | undefined {
    return this.archivePlugins.find(plugin => plugin.service === service)
  }

  /**
   *
   *
   * @return {Promise<Archive>}
   * @memberof ArchiveFactory
   */
  async getArchivePlugin(): Promise<Archive> {
    return Promise.any(
      this.archivePlugins.map(plugin => plugin.identifyService()),
    )
      // Return Unknown archive plugin if anyone else is found
      .catch(() => new Unknown(this.path))
  }

  /**
   *
   *
   * @return {Promise<Standardizer>}
   * @memberof ArchiveFactory
   */
  async getStandardizer(): Promise<Standardizer> {
    return this.getArchivePlugin()
      .then(archive => archive.extract())
      .then(archive => archive.standardizer)
  }
}
