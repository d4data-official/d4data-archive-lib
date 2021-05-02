import { ParsingOptions } from '../../types/Parsing';
import Pipeline from '../../classes/Pipeline';
export declare type OptionsParseAsVCARD = ParsingOptions;
/**
 * Parse given Pipeline result stream as VCARD format
 */
export default function parseAsVCARD(pipeline: Pipeline, options?: OptionsParseAsVCARD): Promise<any>;
