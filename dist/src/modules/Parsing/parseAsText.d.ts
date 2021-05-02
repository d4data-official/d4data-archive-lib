import { ParsingOptions } from '../../types/Parsing';
import Pipeline from '../../classes/Pipeline';
export declare type OptionsParseAsText = ParsingOptions;
/**
 * Parse given Pipeline result stream as Text format
 */
export default function parseAsText(pipeline: Pipeline, options?: OptionsParseAsText): Promise<string>;
