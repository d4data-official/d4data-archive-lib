import { FilterOptions } from '../../types/Parsing';
export declare type OptionsListFiles = FilterOptions;
/**
 * List all files recursively in given directory path and return absolute path list
 * Throw error if can't access directory
 */
export default function listFiles(dirPath: string, options?: FilterOptions): Promise<Array<string>>;
