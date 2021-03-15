import Archive from '../Archive'
import Services from '../../../types/Services'
import Standardizer from '../../Standardizer/Standardizer'
import DiscordStandardizer from '../../Standardizer/plugins/Discord/Discord'

export default class Discord extends Archive {
  identifyService(): Promise<boolean> {
    throw new Error('Not implemented')
  }

  get service(): Services {
    return Services.DISCORD
  }

  get standardizer(): Standardizer {
    if (!this.isExtracted) {
      throw new Error('Archive not extracted')
    }
    return new DiscordStandardizer(this.extractedArchivePath!)
  }
}
