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
   * Merge parsing options with default Parser options
   */
  mergeOptions(options?: ParsingOptions & PaginationOptions): ParsingOptions & PaginationOptions {
    return {
      // Default pagination option values
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
  async listFiles(relativeDirPath: string, options?: FilterOptions): Promise<Array<string>> {
    return listFiles(this.resolveRelativePath(relativeDirPath), options)
  }

  /**
   * Parse directory files recursively from given path for any supported file format
   */
  async parseDir(relativeDirPath: string, options?: FilterOptions): Promise<Array<Record<string, any>>> {
    return parseDir(this.resolveRelativePath(relativeDirPath), options)
  }

  /**
   * Parse file from given path for any supported file format
   * Throw error if can't access file or if parsing fail
   */
  async parseFile<T = any>(relativeFilePath: string, options?: ParsingOptions): Promise<T> {
    return parseFile<T>(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse Text (txt) file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsText(relativeFilePath: string, options?: ParsingOptions): Promise<string> {
    return parseAsText(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse JSON file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsJSON<T = any>(
    relativeFilePath: string,
    options?: ParsingOptions,
  ): Promise<T> {
    return parseAsJSON<T>(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse JSON Lines file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsJSONL<T = any>(
    relativeFilePath: string,
    options?: ParsingOptions & PaginationOptions,
  ): Promise<Array<T>> {
    return parseAsJSONL<T>(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse HTML file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsHTML(relativeFilePath: string, options?: ParsingOptions): Promise<any> {
    return parseAsHTML(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse CSV file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsCSV<T = any>(
    relativeFilePath: string,
    options?: ParsingOptions & PaginationOptions,
  ): Promise<Array<T>> {
    return parseAsCSV<T>(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse MBOX file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsMBOX(
    relativeFilePath: string,
    options?: ParsingOptions & PaginationOptions,
  ): Promise<Array<any>> {
    return parseAsMBOX(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse VCARD file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsVCARD(relativeFilePath: string, options?: ParsingOptions): Promise<any> {
    return parseAsVCARD(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse ICS file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsICS(relativeFilePath: string, options?: ParsingOptions): Promise<any> {
    return parseAsICS(this.resolveRelativePath(relativeFilePath), this.mergeOptions(options))
  }
}
