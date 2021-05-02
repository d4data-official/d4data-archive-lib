import { ParsingOptions } from '../../types/Parsing';
/**
 * List all file extensions for a file type
 */
export declare const SupportedFileFormats: {
    TEXT: string[];
    JSON: string[];
    JSONL: string[];
    HTML: string[];
    CSV: string[];
    MBOX: string[];
    VCARD: string[];
    ICS: string[];
};
/**
 * Associations of file extension list to parsing functions
 * Used in parseFile function to get the good parser from a file extension
 */
export declare const ParserTypes: Array<[Array<string>, Function]>;
export declare type OptionsParseFile = ParsingOptions;
/**
 * Parse file from given path for any supported file format
 * Throw error if can't access file or if parsing fail
 */
export default function parseFile<T = any>(filePath: string, options?: OptionsParseFile): Promise<T>;
