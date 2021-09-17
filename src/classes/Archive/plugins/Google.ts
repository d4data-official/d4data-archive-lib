import Archive from '../Archive'
import Services from '../../../types/Services'
import Standardizer from '../../Standardizer/Standardizer'
import GoogleStandardizer from '../../Standardizer/plugins/Google/Google'
import archiveFileExist from '../../../modules/archiveFileExist'
import Pipeline from '../../Pipeline'
import { parseAsHTML } from '../../../modules/Parsing'

export default class Google extends Archive {
  async identifyService(): Promise<boolean> {
    const filesCheck = await archiveFileExist(this.path, [
      'Takeout/archive_browser.html',
    ])
      .then(results => results.every(item => item))

    if (!filesCheck) {
      return false
    }

    const { data: dom } = await parseAsHTML(await Pipeline.fromArchive(this.path, 'Takeout/archive_browser.html'))
    const htmlTitle = dom.window.document.querySelector('title')?.textContent

    return htmlTitle?.endsWith('Google') ?? false
  }

  get service(): Services {
    return Services.GOOGLE
  }

  get standardizer(): Standardizer {
    if (!this.isExtracted()) {
      throw new Error('Archive not extracted')
    }
    return new GoogleStandardizer(this.extractedArchivePath)
  }
}
