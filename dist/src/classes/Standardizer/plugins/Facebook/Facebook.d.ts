import Standardizer from '../../Standardizer';
import Services from '../../../../types/Services';
import { PipelineStep } from '../../../Pipeline';
export declare const preProcessors: Array<PipelineStep>;
export default class Facebook extends Standardizer {
    constructor(extractedArchivePath: string);
    get service(): Services;
    get subServices(): Array<Services>;
    get subStandardizers(): Array<Standardizer>;
}
