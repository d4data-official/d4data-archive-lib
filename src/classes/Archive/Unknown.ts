import Archive from './Archive'
import SERVICES from '../../types/SERVICES'
import Standardizer from '../Standardizer/Standardizer'
import UnknownStandardizer from '../Standardizer/Unknown'

export default class Unknown extends Archive {
  identifyService(): Promise<Archive> {
    return Promise.resolve(this)
  }

  get service(): SERVICES {
    return SERVICES.UNKNOWN
  }

  get standardizer(): Standardizer {
    if (!this.isExtracted) {
      throw new Error('Archive not extracted')
    }
    return new UnknownStandardizer(this.extractedArchivePath!)
  }
}
