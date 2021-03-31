import path from 'path'
import Standardizer, { EXTERNAL_GETTERS_DIR } from '../../Standardizer'
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

Standardizer.importExternalGettersSync(path.resolve(__dirname, EXTERNAL_GETTERS_DIR))
