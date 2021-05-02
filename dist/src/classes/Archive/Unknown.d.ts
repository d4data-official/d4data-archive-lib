import Archive from './Archive';
import Services from '../../types/Services';
import Standardizer from '../Standardizer/Standardizer';
export default class Unknown extends Archive {
    identifyService(): Promise<boolean>;
    get service(): Services;
    get standardizer(): Standardizer;
}
