import Archive from '../Archive'
import Standardizer from '../../Standardizer/Standardizer'
import Services from '../../../types/Services'
import GravatarStandardizer from '../../Standardizer/plugins/Gravatar/Gravatar'

export default class Gravatar extends Archive {
  async identifyService(): Promise<boolean> {
    return false
  }

  get service(): Services {
    return Services.GRAVATAR
  }

  get standardizer(): Standardizer {
    if (!this.isExtracted()) {
      throw new Error('Archive not extracted')
    }
    return new GravatarStandardizer(this.extractedArchivePath)
  }
}
