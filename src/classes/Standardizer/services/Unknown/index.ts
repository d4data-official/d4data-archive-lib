import { Services } from 'types/Services'
import Standardizer from 'classes/standardizer/Standardizer'

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
