import { FilterOptions, PaginationOptions, ParsingOptions, PreprocessorOptions } from '../../types/Parsing';
export declare type OptionsParseDir = ParsingOptions & FilterOptions & PaginationOptions & PreprocessorOptions;
/**
 * Parse directory files recursively from given path for any supported file format
 */
export default function parseDir(dirPath: string, options?: OptionsParseDir): Promise<Array<Record<string, any>>>;
