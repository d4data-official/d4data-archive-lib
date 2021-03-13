import Archive from '../Archive'
import Services from '../../../types/Services'
import Standardizer from '../../Standardizer/Standardizer'
import GoogleStandardizer from '../../Standardizer/plugins/Google/Google'

export default class Google extends Archive {
  identifyService(): Promise<boolean> {
    throw new Error('Not implemented')
  }

  get service(): Services {
    return Services.GOOGLE
  }

  get standardizer(): Standardizer {
    if (!this.isExtracted) {
      throw new Error('Archive not extracted')
    }
    return new GoogleStandardizer(this.extractedArchivePath!)
  }
}
