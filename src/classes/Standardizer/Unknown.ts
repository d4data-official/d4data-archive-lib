import Standardizer from './Standardizer'
import Services from '../../types/Services'

export default class Unknown extends Standardizer {
  get service(): Services {
    return Services.UNKNOWN
  }

  get subServices(): Array<Services> {
    return [];
  }

  get subStandardizers(): Array<Standardizer> {
    return [];
  }
}
