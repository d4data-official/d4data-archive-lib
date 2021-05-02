import { JSDOM } from 'jsdom';
import { FilterOptions, PaginationOptions, ParsingOptions, Preprocessor, PreprocessorOptions } from '../types/Parsing';
import { OptionsListFiles } from '../modules/Parsing/listFiles';
import { OptionsParseDir } from '../modules/Parsing/parseDir';
import { OptionsParseFile } from '../modules/Parsing/parseFile';
import { OptionsParseAsText } from '../modules/Parsing/parseAsText';
import { OptionsParseAsJSON } from '../modules/Parsing/parseAsJSON';
import { OptionsParseAsJSONL } from '../modules/Parsing/parseAsJSONL';
import { OptionsParseAsHTML } from '../modules/Parsing/parseAsHTML';
import { OptionsParseAsCSV } from '../modules/Parsing/parseAsCSV';
import { OptionsParseAsMBOX } from '../modules/Parsing/parseAsMBOX';
import { OptionsParseAsVCARD } from '../modules/Parsing/parseAsVCARD';
import { OptionsParseAsICS } from '../modules/Parsing/parseAsICS';
export default class Parser {
    path: string;
    preprocessors: Array<Preprocessor>;
    constructor(extractedArchivePath: string, preprocessors?: Array<Preprocessor>);
    /**
     * Add global level pre-processor (Parser level)
     * Will be applied on all parsing methods of this Parser
     */
    addPreprocessor(preprocessor: Preprocessor): void;
    /**
     * Resolve path relative to the archive root
     */
    resolveRelativePath(relativePath: string): string;
    /**
     * Merge parsing options with default Parser options
     */
    mergeOptions(options?: ParsingOptions & PreprocessorOptions & PaginationOptions): ParsingOptions & PreprocessorOptions & PaginationOptions;
    /**
     * List all files recursively in given directory path and return absolute path list
     * Throw error if can't access directory
     */
    listFiles(relativeDirPath: string, options?: OptionsListFiles): Promise<Array<string>>;
    /**
     * List all files that matches the given regular expression
     */
    findFiles(regex: RegExp, relativePath?: string, options?: FilterOptions): Promise<Array<string>>;
    /**
     * Parse directory files recursively from given path for any supported file format
     */
    parseDir(relativeDirPath: string, options?: OptionsParseDir): Promise<Array<Record<string, any>>>;
    /**
     * Parse file from given path for any supported file format
     * Throw error if can't access file or if parsing fail
     */
    parseFile<T = any>(relativeFilePath: string, options?: OptionsParseFile & PreprocessorOptions): Promise<T>;
    /**
     * Parse Text (txt) file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsText(relativeFilePath: string, options?: OptionsParseAsText & PreprocessorOptions): Promise<string>;
    /**
     * Parse JSON file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsJSON<T = any>(relativeFilePath: string, options?: OptionsParseAsJSON & PreprocessorOptions): Promise<T>;
    /**
     * Parse JSON Lines file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsJSONL<T = any>(relativeFilePath: string, options?: OptionsParseAsJSONL & PreprocessorOptions): Promise<Array<T>>;
    /**
     * Parse HTML file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsHTML(relativeFilePath: string, options?: OptionsParseAsHTML & PreprocessorOptions): Promise<JSDOM>;
    /**
     * Parse CSV file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsCSV<T = any>(relativeFilePath: string, options?: OptionsParseAsCSV & PreprocessorOptions): Promise<Array<T>>;
    /**
     * Parse MBOX file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsMBOX(relativeFilePath: string, options?: OptionsParseAsMBOX & PreprocessorOptions): Promise<Array<any>>;
    /**
     * Parse VCARD file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsVCARD(relativeFilePath: string, options?: OptionsParseAsVCARD & PreprocessorOptions): Promise<any>;
    /**
     * Parse ICS file from given path
     * Throw error if can't access file or if parsing fail
     */
    parseAsICS(relativeFilePath: string, options?: OptionsParseAsICS & PreprocessorOptions): Promise<any>;
}
