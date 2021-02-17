import Archive from './Archive'
import Services from '../../types/Services'
import Standardizer from '../Standardizer/Standardizer'
import UnknownStandardizer from '../Standardizer/Unknown'

export default class Unknown extends Archive {
  identifyService(): Promise<Archive> {
    return Promise.resolve(this)
  }

  get service(): Services {
    return Services.UNKNOWN
  }

  get standardizer(): Standardizer {
    if (!this.isExtracted) {
      throw new Error('Archive not extracted')
    }
    return new UnknownStandardizer(this.extractedArchivePath!)
  }
}
