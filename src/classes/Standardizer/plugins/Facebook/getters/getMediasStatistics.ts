import { Media } from 'types/schemas';
import Facebook from '../Facebook'
import { StatisticType } from '../../../../../types/schemas/Statistic'

const fs = require('fs'); // Load the filesystem module

Facebook.prototype.getMediasStatistics = async function getMediasStatistics() {
  const mediasData = await this.getMedias({
    parsingOptions: {
      pagination: {
        offset: 0,
        items: Infinity,
      },
    },
  })

  if (!mediasData) return null

  let totalSize = 0;
  mediasData.data.forEach((media: Media) => totalSize += media.size ?? 0)

  const bibleSize = 2.2 * 1024 * 1024

  return {
    statistics: [
      {
        type: StatisticType.NUMBER,
        value: totalSize,
        name: 'Size of all medias and convertion to numbers of bible.',
      },
      {
        type: StatisticType.NUMBER,
        value: totalSize / bibleSize,
        name: 'Equivalent number to bibles.',
      },
    ],
    parsedFiles: mediasData?.parsedFiles ?? [],
  }
}
