import Archive from '../Archive'
import Services from '../../../types/Services'
import Standardizer from '../../Standardizer/Standardizer'
import RedditStandardizer from '../../Standardizer/plugins/Reddit/Reddit'
import archiveFileExist from '../../../modules/archiveFileExist'

export default class Reddit extends Archive {
  identifyService(): Promise<boolean> {
    return archiveFileExist(this.path, [
      'reddit_gold_information.csv',
      'subscribed_subreddits.csv',
      'approved_submitter_subreddits.csv',
    ])
      .then(results => results.every(item => item))
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
