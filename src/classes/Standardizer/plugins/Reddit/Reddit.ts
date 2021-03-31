import Standardizer from '../../Standardizer'
import { Contact } from '../../../../types/schemas'
import { GetterOptions } from '../../../../types/standardizer/Standardizer'
import GetterReturn from '../../../../types/standardizer/GetterReturn'
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

  async getFriends(options?: GetterOptions): GetterReturn<Array<Contact>> {
    const FriendsRawData = await this.parser.parseAsCSV(
      'friend.csv',
      options?.parsingOptions,
    )
    const stck = FriendsRawData.map(friend => ({
      displayName: friend.username,
    }))
    return {
      data: stck,
      parsedFiles: ['friend.csv'],
    }
  }
}
