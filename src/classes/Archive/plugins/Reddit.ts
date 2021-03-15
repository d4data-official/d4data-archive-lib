import Archive from '../Archive'
import Services from '../../../types/Services'
import Standardizer from '../../Standardizer/Standardizer'
import RedditStandardizer from '../../Standardizer/plugins/Reddit/Reddit'

export default class Reddit extends Archive {
  identifyService(): Promise<boolean> {
    throw new Error('Not implemented')
  }

  get service(): Services {
    return Services.REDDIT
  }

  get standardizer(): Standardizer {
    if (!this.isExtracted) {
      throw new Error('Archive not extracted')
    }
    return new RedditStandardizer(this.extractedArchivePath!)
  }
}
