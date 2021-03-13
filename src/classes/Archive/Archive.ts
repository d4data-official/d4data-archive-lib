import fs from 'fs'
import path from 'path'
import extractArchive, { ArchiveFormat, ExtractOptions, identifyArchiveFormat } from '../../modules/ArchiveExtraction'
import Standardizer from '../Standardizer/Standardizer'
import Services from '../../types/Services'
import Config from '../../modules/Config'

export const PLUGINS_DIR = 'plugins'

export const OUTPUT_DIR = Config.archiveOutputDir

export default abstract class Archive {
  path: string

  outputDir: string

  extractedArchivePath?: string

  constructor(archivePath: string, outputDir?: string) {
    this.path = archivePath
    this.outputDir = outputDir ?? OUTPUT_DIR
  }

  /**
   * Is archive has been extracted
   */
  get isExtracted(): boolean {
    return this.extractedArchivePath !== undefined
  }

  /**
   * Get Service related to the archive
   */
  abstract get service(): Services

  /**
   * Return service's standardizer if archive has been extracted or throw an error
   */
  abstract get standardizer(): Standardizer

  /**
   * Explore non extracted archive to guess the source service
   */
  abstract identifyService(): Promise<boolean>

  /**
   * Identify archive file format
   */
  async identifyFormat(): Promise<ArchiveFormat> {
    return identifyArchiveFormat(this.path)
  }

  /**
   * Get archive metadata
   */
  async getMetadata(): Promise<Archive> {
    return Promise.reject()
  }

  /**
   * Extract archive to given path
   */
  async extract(options?: ExtractOptions & { outputDir?: string }): Promise<Archive> {
    const outputDir = options?.outputDir ?? this.outputDir

    return extractArchive(this.path, outputDir, options)
      .then(() => this.extractedArchivePath = outputDir)
      .then(() => this)
  }

  /**
   * List all Archive plugins contained in the services sub-directory asynchronously
   */
  static getPlugins(): Promise<Array<typeof Archive>> {
    return fs.promises.readdir(path.resolve(__dirname, PLUGINS_DIR))
      .then(dirContent => dirContent.map(
        service => import(path.resolve(__dirname, PLUGINS_DIR, service))
          .then(importedModule => importedModule.default),
      ))
      .then(promiseArr => Promise.all(promiseArr))
  }

  /**
   * List all Archive plugins contained in the services sub-directory synchronously
   */
  static getPluginsSync(): Array<typeof Archive> {
    return fs.readdirSync(path.resolve(__dirname, PLUGINS_DIR)).map(
      // eslint-disable-next-line import/no-dynamic-require,global-require
      service => require(path.resolve(__dirname, PLUGINS_DIR, service)).default,
    )
  }
}
