import Archive from '../Archive'
import Standardizer from '../../Standardizer/Standardizer'
import Services from '../../../types/Services'
import GravatarStandardizer from '../../Standardizer/plugins/Gravatar/Gravatar'
import listFilesFromArchive from '../../../modules/listFilesFromArchive'
import { parseAsJSON } from '../../../modules/Parsing'
import Pipeline from '../../Pipeline'

export default class Gravatar extends Archive {
  async identifyService(): Promise<boolean> {
    const [jsonFilePath] = await listFilesFromArchive(this.path, '', {
      recursive: false,
      extensionWhitelist: ['json'],
    })

    if (!jsonFilePath) {
      return false
    }

    const fileContent = await parseAsJSON(await Pipeline.fromArchive(this.path, jsonFilePath))
    const profileUrl: string | undefined = fileContent?.entry?.[0]?.profileUrl

    if (profileUrl?.startsWith('http://gravatar.com')) {
      return true
    }

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
