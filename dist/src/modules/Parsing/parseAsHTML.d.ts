import { JSDOM } from 'jsdom';
import { ParsingOptions } from '../../types/Parsing';
import Pipeline from '../../classes/Pipeline';
export declare type OptionsParseAsHTML = ParsingOptions;
/**
 * Parse given Pipeline result stream as HTML format
 */
export default function parseAsHTML(pipeline: Pipeline, options?: OptionsParseAsHTML): Promise<JSDOM>;
