import Standardizer from '../../Standardizer'
import Services from '../../../../types/Services'

export default class Discord extends Standardizer {
  get service(): Services {
    return Services.DISCORD
  }

  get subServices(): Array<Services> {
    return []
  }

  get subStandardizers(): Array<Standardizer> {
    return []
  }
}
