import Standardizer from '../../Standardizer'
import Services from '../../../../types/Services'

export default class Google extends Standardizer {
  get service(): Services {
    return Services.GOOGLE
  }

  get subServices(): Array<Services> {
    return []
  }

  get subStandardizers(): Array<Standardizer> {
    return []
  }
}
