import path from 'path'
import Standardizer, { EXTERNAL_GETTERS_DIR } from '../../Standardizer'
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

Standardizer.importExternalGettersSync(path.resolve(__dirname, EXTERNAL_GETTERS_DIR))
