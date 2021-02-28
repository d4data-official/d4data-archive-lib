import path from 'path'
import { FilterOptions, PaginationOptions, ParsingOptions, Preprocessor } from '../types/Parsing'
import {
  listFiles,
  parseDir,
  parseFile,
  parseAsText,
  parseAsJSON,
  parseAsJSONL,
  parseAsHTML,
  parseAsCSV,
  parseAsMBOX,
  parseAsVCARD,
  parseAsICS,
} from '../modules/Parsing'

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
  mergeOptions(options?: ParsingOptions & PaginationOptions): ParsingOptions & PaginationOptions {
    return {
      // Default pagination values
      pagination: {
        offset: 0,
        items: 50,
      },
      ...options,
      preprocessors: options?.preprocessors ? this.preprocessors.concat(options.preprocessors) : this.preprocessors,
    }
  }

  /**
   * List all files recursively in given directory path and return absolute path list
   * Throw error if can't access directory
   */
  async listFiles(relativeDirPath: string, options?: FilterOptions): ReturnType<typeof listFiles> {
    return listFiles(this.resolveRelativePath(relativeDirPath), options)
  }

  /**
   * Parse directory files recursively from given path for any supported file format
   */
  async parseDir(relativeDirPath: string, options?: FilterOptions): ReturnType<typeof parseDir> {
    return parseDir(this.resolveRelativePath(relativeDirPath), options)
  }

  /**
   * Parse file from given path for any supported file format or throw an error
   */
  async parseFile(relativeFilePath: string, options?: ParsingOptions): ReturnType<typeof parseFile> {
    return parseFile(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse Text (txt) file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseAsText(relativeFilePath: string, options?: ParsingOptions): ReturnType<typeof parseAsText> {
    return parseAsText(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse JSON file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseAsJSON<T = unknown>(
    relativeFilePath: string,
    options?: ParsingOptions,
  ): ReturnType<typeof parseAsJSON> {
    return parseAsJSON<T>(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse JSON Lines file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseAsJSONL<T = unknown>(
    relativeFilePath: string,
    options?: ParsingOptions & PaginationOptions,
  ): ReturnType<typeof parseAsJSONL> {
    return parseAsJSONL<T>(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse HTML file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseAsHTML(relativeFilePath: string, options?: ParsingOptions): ReturnType<typeof parseAsHTML> {
    return parseAsHTML(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse CSV file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseAsCSV<T = unknown>(
    relativeFilePath: string,
    options?: ParsingOptions & PaginationOptions,
  ): ReturnType<typeof parseAsCSV> {
    return parseAsCSV<T>(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse MBOX file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseAsMBOX(
    relativeFilePath: string,
    options?: ParsingOptions & PaginationOptions,
  ): ReturnType<typeof parseAsMBOX> {
    return parseAsMBOX(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse VCARD file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseAsVCARD(relativeFilePath: string, options?: ParsingOptions): ReturnType<typeof parseAsVCARD> {
    return parseAsVCARD(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse ICS file from given path
   * Throw error if can't access file or file format is invalid
   */
  async parseAsICS(relativeFilePath: string, options?: ParsingOptions): ReturnType<typeof parseAsICS> {
    return parseAsICS(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }
}
