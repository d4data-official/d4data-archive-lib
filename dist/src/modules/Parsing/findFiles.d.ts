import { FilterOptions } from '../../types/Parsing';
/**
 * List all files that matches the given regular expression
 */
export default function findFiles(regex: RegExp, relativePath: string, options?: FilterOptions): Promise<Array<string>>;
