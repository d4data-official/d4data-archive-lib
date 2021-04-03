import Archive from '../Archive'
import Services from '../../../types/Services'
import Standardizer from '../../Standardizer/Standardizer'
import FacebookStandardizer from '../../Standardizer/plugins/Facebook/Facebook'
import archiveFileExist from '../../../modules/archiveFileExist'

export default class Facebook extends Archive {
  identifyService(): Promise<boolean> {
    return archiveFileExist(this.path, [
      'security_and_login_information/account_activity.json',
      'profile_information/profile_information.json',
      'friends/friends.json',
    ])
      .then(results => results.every(item => item))
  }

  get service(): Services {
    return Services.FACEBOOK
  }

  get standardizer(): Standardizer {
    if (!this.isExtracted()) {
      throw new Error('Archive not extracted')
    }
    return new FacebookStandardizer(this.extractedArchivePath)
  }
}
