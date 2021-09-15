import moment from 'moment'
import Google from '../Google'
import Statistic, { StatisticType } from '../../../../../types/schemas/Statistic'
import { BrowserData } from '../../../../../types/schemas'

export type UniqueWebsites = Record<string, number>

export interface TopWebsites {
  max: number,
  min: number,
  websites: Array<{ domain: string, count: number }>
}

export class BrowserDataStats {
  private uniqueWebsites?: UniqueWebsites = undefined

  readonly data: BrowserData

  constructor(data: BrowserData) {
    this.data = data
  }

  get historyCount(): number {
    return this.data.history.length
  }

  get historyUniqueWebsitesCount(): number {
    return Object.keys(this.uniqueWebsites ?? this.getHistoryUniqueWebsites()).length
  }

  getHistoryUniqueWebsites(): UniqueWebsites {
    if (this.uniqueWebsites) {
      return this.uniqueWebsites
    }

    const uniqueWebsites: UniqueWebsites = {}

    this.data.history.forEach((entry) => {
      const domain = new URL(entry.url).hostname.replace('www.', '')
      uniqueWebsites[domain] = (uniqueWebsites[domain] ?? 0) + 1
    })

    this.uniqueWebsites = uniqueWebsites

    return this.uniqueWebsites
  }

  getHistoryTopWebsites(websiteCount: number = 5): TopWebsites {
    const topWebsites = Object.entries(this.getHistoryUniqueWebsites())
      .sort((entry1, entry2) => entry2[1] - entry1[1])
      .slice(0, websiteCount)
      .map(([domain, count]) => ({ domain, count }))

    return {
      max: topWebsites[0].count,
      min: topWebsites[topWebsites.length - 1].count,
      websites: topWebsites,
    }
  }

  getHistoryDuration(): moment.Duration | undefined {
    const start = this.data.history[0]?.datetime
    const end = this.data.history[this.data.history.length - 1]?.datetime

    if (!start && !end) {
      return undefined
    }

    return moment.duration(end.valueOf() - start.valueOf())
  }
}

Google.prototype.getBrowserDataStatistics = async function getBrowserDataStatistics() {
  const browserData = await this.getBrowserData({
    parsingOptions: {
      pagination: {
        offset: 0,
        items: Infinity,
      },
    },
  })

  if (!browserData) {
    return null
  }

  const statisticsClass = new BrowserDataStats(browserData?.data)

  const historyDuration = statisticsClass.getHistoryDuration()?.toISOString()

  const statistics: Array<Statistic> = [
    {
      type: StatisticType.NUMBER,
      value: statisticsClass.historyCount,
      name: 'History entries',
    },
    {
      type: StatisticType.NUMBER,
      value: statisticsClass.historyUniqueWebsitesCount,
      name: 'Visited websites',
    },
    {
      type: StatisticType.RANKING,
      value: statisticsClass.getHistoryTopWebsites().websites.map(website => ({
        value: website.count,
        label: website.domain,
      })),
      name: 'Top websites',
    },
  ]

  if (historyDuration) {
    statistics.push({
      type: StatisticType.DURATION,
      value: historyDuration,
      name: 'Of history',
    })
  }

  return {
    statistics,
    parsedFiles: browserData?.parsedFiles ?? [],
  }
}
