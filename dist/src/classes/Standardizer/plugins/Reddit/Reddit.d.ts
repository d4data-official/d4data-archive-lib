import Standardizer from '../../Standardizer';
import Services from '../../../../types/Services';
export default class Reddit extends Standardizer {
    get service(): Services;
    get subServices(): Array<Services>;
    get subStandardizers(): Array<Standardizer>;
}
