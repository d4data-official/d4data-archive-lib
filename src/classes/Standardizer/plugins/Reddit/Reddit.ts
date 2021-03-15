import Standardizer from '../../Standardizer'
import Services from '../../../../types/Services'

export default class Reddit extends Standardizer {
  get service(): Services {
    return Services.REDDIT
  }

  get subServices(): Array<Services> {
    return []
  }

  get subStandardizers(): Array<Standardizer> {
    return []
  }
}
