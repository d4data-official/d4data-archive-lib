import Discord from '../Discord'
import { Reacted } from '../../../../../types/schemas'

Discord.prototype.getReacted = async function getReacted(options) {
  const eventFiles = await this.parser.findFiles(/(tns)|(analytics)/, './activity')
  if (eventFiles.length === 0) {
    return {
      data: [],
      parsedFiles: [],
    }
  }
  const reactions = (await this.parser.parseAsJSONL(events[0], {
    filter: (unparsedLine) => (unparsedLine.startsWith('{"event_type":"add_reaction"')),
    ...options?.parsingOptions,
  }))
  const reacted = reactions.map((reaction): Reacted => {
    const guild = reaction?.guild_id ?? '@me'
    return {
      type: 'externalLink',
      entity: `https://discordapp.com/channels/${ guild }/${ reaction?.channel_id }/${ reaction?.message_id }`,
      reaction: {
        name: reaction.emoji_name,
        reactionDate: new Date(reaction.timestamp.slice(1, -1)),
      },
    }
  })
  return {
    data: reacted,
    parsedFiles: eventFiles,
  }
}
