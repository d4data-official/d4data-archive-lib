import { ParsingOptions } from '../../types/Parsing';
import Pipeline from '../../classes/Pipeline';
export declare type OptionsParseAsJSON = ParsingOptions;
/**
 * Parse given Pipeline result stream as JSON format
 */
export default function parseAsJSON<T = any>(pipeline: Pipeline, options?: OptionsParseAsJSON): Promise<T>;
