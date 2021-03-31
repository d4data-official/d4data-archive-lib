import { Reacted } from 'types/schemas'
import Standardizer from '../../Standardizer'
import Services from '../../../../types/Services'
import { GetterOptions } from '../../../../types/standardizer/Standardizer'
import GetterReturn from '../../../../types/standardizer/GetterReturn'

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

  async getReacted(options?: GetterOptions): GetterReturn<Array<Reacted>> {
    const ReactsPostRawData = await this.parser.parseAsCSV(
      'post_votes.csv',
      options?.parsingOptions,
    )
    const ReactsCommentRawData = await this.parser.parseAsCSV(
      'comment_votes.csv',
      options?.parsingOptions,
    )
    const FinalRawData = ReactsPostRawData.concat(ReactsCommentRawData)
    const stck = FinalRawData.map(friend => ({
      type: 'post',
      entity: {},
    }))
    return {
      data: stck,
      parsedFiles: ['friends.csv'],
    }
  }
}
