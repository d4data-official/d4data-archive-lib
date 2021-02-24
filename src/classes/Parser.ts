import path from 'path'
import ParsingUtils, { FilterOptions, PaginationOptions, ParsingOptions, Preprocessor } from '../modules/ParsingUtils'

export default class Parser {
  path: string

  preprocessors: Array<Preprocessor>

  constructor(extractedArchivePath: string, preprocessors: Array<Preprocessor> = []) {
    this.path = extractedArchivePath
    this.preprocessors = preprocessors
  }

  /**
   * Add global level pre-processor (Parser level)
   * Will be applied on all parsing methods of this Parser
   */
  addPreprocessor(preprocessor: Preprocessor) {
    this.preprocessors.push(preprocessor)
  }

  /**
   * Resolve path relative to the archive root
   */
  resolveRelativePath(relativePath: string) {
    return path.resolve(this.path, relativePath)
  }

  /**
   * Resolve path relative to the archive root
   */
  mergeOptions(options?: ParsingOptions) {
    return {
      ...options,
      preprocessors: options?.preprocessors ? this.preprocessors.concat(options.preprocessors) : this.preprocessors,
    }
  }

  /**
   * List all files recursively in given directory path and return absolute path list
   * Throw error if can't access directory
   */
  async listFiles(relativeDirPath: string, options?: FilterOptions): ReturnType<typeof ParsingUtils.listFiles> {
    return ParsingUtils.listFiles(this.resolveRelativePath(relativeDirPath), options)
  }

  /**
   * Parse directory files recursively from given path for any supported file format
   */
  async parseDir(relativeDirPath: string, options?: FilterOptions): ReturnType<typeof ParsingUtils.parseDir> {
    return ParsingUtils.parseDir(this.resolveRelativePath(relativeDirPath), options)
  }

  /**
   * Parse file from given path for any supported file format or throw an error
   */
  async parseFile(relativeFilePath: string, options?: ParsingOptions): ReturnType<typeof ParsingUtils.parseFile> {
    return ParsingUtils.parseFile(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse Text (txt) file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseAsText(relativeFilePath: string, options?: ParsingOptions): ReturnType<typeof ParsingUtils.parseAsText> {
    return ParsingUtils.parseAsText(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse JSON file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseJSON(relativeFilePath: string, options?: ParsingOptions): ReturnType<typeof ParsingUtils.parseAsJSON> {
    return ParsingUtils.parseAsJSON(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse JSON Lines file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseAsJSONL(
    relativeFilePath: string,
    options?: ParsingOptions & PaginationOptions,
  ): ReturnType<typeof ParsingUtils.parseAsJSONL> {
    return ParsingUtils.parseAsJSONL(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse HTML file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseHTML(relativeFilePath: string, options?: ParsingOptions): ReturnType<typeof ParsingUtils.parseAsHTML> {
    return ParsingUtils.parseAsHTML(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse CSV file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseCSV(relativeFilePath: string, options?: ParsingOptions): ReturnType<typeof ParsingUtils.parseAsCSV> {
    return ParsingUtils.parseAsCSV(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse MBOX file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseMBOX(relativeFilePath: string, options?: ParsingOptions): ReturnType<typeof ParsingUtils.parseAsMBOX> {
    return ParsingUtils.parseAsMBOX(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse VCARD file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseVCARD(relativeFilePath: string, options?: ParsingOptions): ReturnType<typeof ParsingUtils.parseAsVCARD> {
    return ParsingUtils.parseAsVCARD(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse ICS file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseICS(relativeFilePath: string, options?: ParsingOptions): ReturnType<typeof ParsingUtils.parseAsICS> {
    return ParsingUtils.parseAsICS(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }
}
