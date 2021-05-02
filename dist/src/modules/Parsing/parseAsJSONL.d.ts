import { PaginationOptions, ParsingOptions } from '../../types/Parsing';
import Pipeline from '../../classes/Pipeline';
export interface OptionsJSONL {
    filter?: (unparsedLine: string) => boolean;
    transform?: (item: any) => any;
}
export declare type OptionsParseAsJSONL = ParsingOptions & PaginationOptions & OptionsJSONL;
/**
 * Parse given Pipeline result stream as JSONL format
 */
export default function parseAsJSONL<T = any>(pipeline: Pipeline, options?: OptionsParseAsJSONL): Promise<Array<T>>;
