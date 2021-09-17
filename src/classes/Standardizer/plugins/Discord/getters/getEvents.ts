import Discord from '../Discord'
import { Event } from '../../../../../types/schemas'

export type DiscordEvent = Record<string, any> & {
  event_type: string
  event_id: string
  timestamp: string
}

Discord.prototype.getEvents = async function (options) {
  let parsedEventCounter = 0
  const { items, offset } = options?.parsingOptions?.pagination ?? this.parser.defaultOptions.pagination
  const filePathList = await this.parser.findFiles(/(analytics|modeling|reporting|tns)\/events-.*\.json$/, 'activity/')
  const rawEvents: Array<Array<DiscordEvent>> = []

  for await (const filePath of filePathList) {
    if (items - parsedEventCounter <= 0) {
      continue
    }

    const { data: parsedEvents } = await this.parser.parseAsJSONL<DiscordEvent>(filePath, {
      pagination: {
        offset,
        items: items - parsedEventCounter,
      },
    })
    parsedEventCounter += parsedEvents.length

    rawEvents.push(parsedEvents)
  }

  const events: Array<Event> = rawEvents.flat().map((rawEvent): Event => ({
    type: rawEvent.event_type,
    // Slice to delete duplicate double quotes (ex: "\"2019-06-06T10:21:19.103Z\"")
    date: new Date(rawEvent.timestamp.slice(1, -1)),
    extra: rawEvent,
  }))

  return {
    data: events,
    parsedFiles: filePathList,
  }
}
