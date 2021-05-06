import path from 'path'
import { JSDOM } from 'jsdom'
import { FilterOptions, PaginationOptions, ParsingOptions, Preprocessor, PreprocessorOptions } from '../types/Parsing'
import listFiles, { OptionsListFiles } from '../modules/Parsing/listFiles'
import findFiles from '../modules/Parsing/findFiles'
import parseDir, { OptionsParseDir } from '../modules/Parsing/parseDir'
import parseFile, { OptionsParseFile } from '../modules/Parsing/parseFile'
import parseAsText, { OptionsParseAsText } from '../modules/Parsing/parseAsText'
import parseAsJSON, { OptionsParseAsJSON } from '../modules/Parsing/parseAsJSON'
import parseAsJSONL, { OptionsParseAsJSONL } from '../modules/Parsing/parseAsJSONL'
import parseAsHTML, { OptionsParseAsHTML } from '../modules/Parsing/parseAsHTML'
import parseAsCSV, { OptionsParseAsCSV } from '../modules/Parsing/parseAsCSV'
import parseAsMBOX, { OptionsParseAsMBOX } from '../modules/Parsing/parseAsMBOX'
import parseAsVCARD, { OptionsParseAsVCARD } from '../modules/Parsing/parseAsVCARD'
import parseAsICS, { OptionsParseAsICS } from '../modules/Parsing/parseAsICS'
import Pipeline from './Pipeline'

export default class Parser {
  path: string

  preprocessors: Array<Preprocessor>

  /**
   * List of absolute files path parsed by this Parser instance
   */
  readonly parsedFiles: Array<string> = []

  constructor(extractedArchivePath: string, preprocessors: Array<Preprocessor> = []) {
    this.path = extractedArchivePath
    this.preprocessors = preprocessors
  }

  /**
   * Save given path in parsed file list by avoiding duplicate entries
   */
  private savePath(absolutePath: string): void {
    if (!this.parsedFiles.includes(absolutePath)) {
      this.parsedFiles.push(absolutePath)
    }
  }

  /**
   * Resolve path relative to the archive root and save it in parsed file list
   */
  private resolveAndSavePath(relativePath: string): string {
    const absolutePath = this.resolveRelativePath(relativePath)

    this.savePath(absolutePath)

    return absolutePath
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
   * Clone this Parser instance
   * Keep only path and pre-processors
   */
  clone(): Parser {
    return new Parser(this.path, this.preprocessors)
  }

  /**
   * Merge parsing options with default Parser options
   */
  mergeOptions(options?: FullParsingOptions): FullParsingOptions {
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
  async listFiles(relativeDirPath: string, options?: OptionsListFiles): Promise<Array<string>> {
    return listFiles(this.resolveRelativePath(relativeDirPath), options)
  }

  /**
   * List all files that matches the given regular expression
   */
  async findFiles(regex: RegExp, relativePath?: string, options?: FilterOptions): Promise<Array<string>> {
    return findFiles(regex, this.resolveRelativePath(relativePath || '.'), options)
  }

  /**
   * Parse directory files recursively from given path for any supported file format
   */
  async parseDir(relativeDirPath: string, options?: OptionsParseDir): Promise<Array<Record<string, any>>> {
    // TODO: implement parsed files saving
    return parseDir(this.resolveRelativePath(relativeDirPath), this.mergeOptions(options))
  }

  /**
   * Parse file from given path for any supported file format
   * Throw error if can't access file or if parsing fail
   */
  async parseFile<T = any>(relativeFilePath: string, options?: OptionsParseFile & PreprocessorOptions): Promise<T> {
    return parseFile<T>(this.resolveAndSavePath(relativeFilePath), this.mergeOptions(options))
  }

  /**
   * Parse Text (txt) file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsText(relativeFilePath: string, options?: OptionsParseAsText & PreprocessorOptions): Promise<string> {
    const mergedOptions = this.mergeOptions(options)

    return parseAsText(
      Pipeline.fromFile(this.resolveAndSavePath(relativeFilePath), mergedOptions.preprocessors),
      mergedOptions,
    )
  }

  /**
   * Parse JSON file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsJSON<T = any>(
    relativeFilePath: string,
    options?: OptionsParseAsJSON & PreprocessorOptions,
  ): Promise<T> {
    const mergedOptions = this.mergeOptions(options)

    return parseAsJSON(
      Pipeline.fromFile(this.resolveAndSavePath(relativeFilePath), mergedOptions.preprocessors),
      mergedOptions,
    )
  }

  /**
   * Parse JSON Lines file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsJSONL<T = any>(
    relativeFilePath: string,
    options?: OptionsParseAsJSONL & PreprocessorOptions,
  ): Promise<Array<T>> {
    const mergedOptions = this.mergeOptions(options)

    return parseAsJSONL(
      Pipeline.fromFile(this.resolveAndSavePath(relativeFilePath), mergedOptions.preprocessors),
      mergedOptions,
    )
  }

  /**
   * Parse HTML file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsHTML(relativeFilePath: string, options?: OptionsParseAsHTML & PreprocessorOptions): Promise<JSDOM> {
    const mergedOptions = this.mergeOptions(options)

    return parseAsHTML(
      Pipeline.fromFile(this.resolveAndSavePath(relativeFilePath), mergedOptions.preprocessors),
      mergedOptions,
    )
  }

  /**
   * Parse CSV file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsCSV<T = any>(
    relativeFilePath: string,
    options?: OptionsParseAsCSV & PreprocessorOptions,
  ): Promise<Array<T>> {
    const mergedOptions = this.mergeOptions(options)

    return parseAsCSV(
      Pipeline.fromFile(this.resolveAndSavePath(relativeFilePath), mergedOptions.preprocessors),
      mergedOptions,
    )
  }

  /**
   * Parse MBOX file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsMBOX(relativeFilePath: string, options?: OptionsParseAsMBOX & PreprocessorOptions): Promise<Array<any>> {
    const mergedOptions = this.mergeOptions(options)

    return parseAsMBOX(
      Pipeline.fromFile(this.resolveAndSavePath(relativeFilePath), mergedOptions.preprocessors),
      mergedOptions,
    )
  }

  /**
   * Parse VCARD file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsVCARD(relativeFilePath: string, options?: OptionsParseAsVCARD & PreprocessorOptions): Promise<any> {
    const mergedOptions = this.mergeOptions(options)

    return parseAsVCARD(
      Pipeline.fromFile(this.resolveAndSavePath(relativeFilePath), mergedOptions.preprocessors),
      mergedOptions,
    )
  }

  /**
   * Parse ICS file from given path
   * Throw error if can't access file or if parsing fail
   */
  async parseAsICS(relativeFilePath: string, options?: OptionsParseAsICS & PreprocessorOptions): Promise<any> {
    const mergedOptions = this.mergeOptions(options)

    return parseAsICS(
      Pipeline.fromFile(this.resolveAndSavePath(relativeFilePath), mergedOptions.preprocessors),
      mergedOptions,
    )
  }
}
