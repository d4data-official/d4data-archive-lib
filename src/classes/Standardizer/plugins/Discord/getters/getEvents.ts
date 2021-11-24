import Discord from '../Discord'
import { Event } from '../../../../../types/schemas'
import PaginationManager from '../../../../PaginationManager'

export type DiscordEvent = Record<string, any> & {
  event_type: string
  event_id: string
  timestamp: string
}

Discord.prototype.getEvents = async function (options) {
  const paginationManager = new PaginationManager(
    options?.parsingOptions?.pagination ?? this.parser.defaultOptions.pagination,
  )

  const filePathList = await this.parser.findFiles(/(analytics|modeling|reporting|tns)\/events-.*\.json$/, 'activity/')
    .catch(error => {
      console.error(error)
      return null
    })

  if (filePathList === null) {
    return null
  }

  const rawEvents: Array<Array<DiscordEvent>> = []

  for await (const filePath of filePathList) {
    const {
      data: parsedEvents,
      pagination,
    } = await this.parser.parseAsJSONL<DiscordEvent>(filePath, { pagination: paginationManager.nextPagination })

    if (paginationManager.remainingItems > 0) {
      rawEvents.push(parsedEvents)
    }

    if (pagination) {
      paginationManager.pushPagination(pagination)
    }
  }

  const events: Array<Event> = rawEvents.flat()
    .map((rawEvent): Event => ({
      type: rawEvent.event_type,
      // Slice to delete duplicate double quotes (ex: "\"2019-06-06T10:21:19.103Z\"")
      date: new Date(rawEvent.timestamp.slice(1, -1)),
      extra: rawEvent,
    }))

  return {
    data: events,
    parsedFiles: filePathList,
    pagination: paginationManager.paginationResult,
  }
}
