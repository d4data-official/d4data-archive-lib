import Standardizer from '../../Standardizer'
import Services from '../../../../types/Services'

export default class Facebook extends Standardizer {
  get service(): Services {
    return Services.FACEBOOK
  }

  get subServices(): Array<Services> {
    return []
  }

  get subStandardizers(): Array<Standardizer> {
    return []
  }
}
