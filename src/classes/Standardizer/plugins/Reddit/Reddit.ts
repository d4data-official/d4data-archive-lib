import API from 'types/schemas/API'
import { GetterOptions } from 'types/standardizer/Standardizer'
import Standardizer from '../../Standardizer'
import Services from '../../../../types/Services'

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
    return APIRawData.map(api => ({
      name: api.username,
    }))
  }
}
