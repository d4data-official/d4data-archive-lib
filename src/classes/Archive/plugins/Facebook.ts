import Archive from '../Archive'
import Services from '../../../types/Services'
import Standardizer from '../../Standardizer/Standardizer'
import FacebookStandardizer from '../../Standardizer/plugins/Facebook/Facebook'

export default class Facebook extends Archive {
  identifyService(): Promise<Archive> {
    throw new Error('Not implemented')
  }

  get service(): Services {
    return Services.FACEBOOK
  }

  get standardizer(): Standardizer {
    if (!this.isExtracted) {
      throw new Error('Archive not extracted')
    }
    return new FacebookStandardizer(this.extractedArchivePath!)
  }
}
