import { PaginationOptions, ParsingOptions } from '../../types/Parsing';
import Pipeline from '../../classes/Pipeline';
export interface OptionsCSV {
    columns?: Array<string>;
}
export declare type OptionsParseAsCSV = ParsingOptions & PaginationOptions & OptionsCSV;
/**
 * Parse given Pipeline result stream as CSV format
 */
export default function parseAsCSV<T = any>(pipeline: Pipeline, options?: OptionsParseAsCSV): Promise<Array<T>>;
