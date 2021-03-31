import API from 'types/schemas/API'
import GetterReturn from 'types/standardizer/GetterReturn'
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

  async getAPIs(options?: GetterOptions): GetterReturn<Array<API>> {
    const APIRawData = await this.parser.parseAsCSV(
      'twitter.csv',
      options?.parsingOptions,
    )
    const stck = APIRawData.map(api => ({
      name: api.username,
    }))
    return {
      data: stck,
      parsedFiles: ['twitter.csv'],
    }
  }
}
