import Archive from '../Archive'
import Services from '../../../types/Services'
import Standardizer from '../../Standardizer/Standardizer'
import DiscordStandardizer from '../../Standardizer/plugins/Discord/Discord'
import archiveFileExist from '../../../modules/archiveFileExist'

export default class Discord extends Archive {
  identifyService(): Promise<boolean> {
    return archiveFileExist(this.path, [
      'account/user.json',
      'messages/index.json',
      'servers/index.json',
    ])
      .then(results => results.every(item => item))
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
