import { PaginationOptions, ParsingOptions } from '../../types/Parsing';
import Pipeline from '../../classes/Pipeline';
export declare type OptionsParseAsMBOX = ParsingOptions & PaginationOptions;
/**
 * Parse given Pipeline result stream as MBOX format
 */
export default function parseAsMBOX(pipeline: Pipeline, options?: OptionsParseAsMBOX): Promise<Array<any>>;
