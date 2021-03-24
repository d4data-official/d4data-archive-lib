import Standardizer from 'classes/Standardizer/Standardizer'
import Services from '../../../../types/Services'
import { GetterOptions } from 'types/standardizer/Standardizer'
import API from 'types/schemas/API'

export default class Reddit extends Standardizer {
  get service(): Services {
    return Services.REDDIT
  }

  get subServices(): Array<Services> {
    return []
  }

  get subStandardizers(): Array<Standardizer> {
    return []
  }

  async getAPIs(options?: GetterOptions): Promise<Array<API> | null> {
    const APIRawData = await this.parser.parseAsCSV(
      'twitter.csv',
      options?.parsingOptions,
    )
    return APIRawData.map(API => ({
      name: API.username,
    }))
  }

}
