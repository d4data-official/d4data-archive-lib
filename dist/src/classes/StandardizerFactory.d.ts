import Services from '../types/Services';
import Standardizer from './Standardizer/Standardizer';
export default class StandardizerFactory {
    path: string;
    standardizers: Array<Standardizer>;
    constructor(extractedArchivePath: string);
    getStandardizerFromService(service: Services): Standardizer | undefined;
}
