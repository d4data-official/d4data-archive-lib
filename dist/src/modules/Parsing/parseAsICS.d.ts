import { ParsingOptions } from '../../types/Parsing';
import Pipeline from '../../classes/Pipeline';
export declare type OptionsParseAsICS = ParsingOptions;
/**
 * Parse given Pipeline result stream as ICS format
 */
export default function parseAsICS(pipeline: Pipeline, options?: OptionsParseAsICS): Promise<any>;
