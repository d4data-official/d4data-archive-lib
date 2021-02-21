import extractArchive, { ExtractOptions } from '../../modules/ArchiveExtraction'
import Standardizer from '../Standardizer/Standardizer'
import { Services } from '../../types/Services'
import Config from '../../modules/Config'

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
  abstract identifyService(): Promise<Archive>

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
}
