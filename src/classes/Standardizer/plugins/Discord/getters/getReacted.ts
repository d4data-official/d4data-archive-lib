import Discord from '../Discord'
import { Reacted } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

interface DiscordReacted {
  guild_id: string;
  channel_id: any;
  message_id: any;
  emoji_name: any;
  timestamp: string
}

Discord.prototype.getReacted = withAutoParser(async parser => {
  const eventFiles = await parser.findFiles(/(tns)|(analytics)/, './activity')
  if (eventFiles.length === 0) {
    return null
  }
  const { data: reactions } = (await parser.parseAsJSONL(eventFiles[0], {
    filter: (unparsedLine: string) => (unparsedLine.startsWith('{"event_type":"add_reaction"')),
  }))

  return reactions.map((reaction: DiscordReacted): Reacted => {
    const guild = reaction?.guild_id ?? '@me'
    return {
      entityType: 'externalLink',
      entity: `https://discordapp.com/channels/${ guild }/${ reaction?.channel_id }/${ reaction?.message_id }`,
      reaction: {
        name: reaction.emoji_name,
        reactionDate: new Date(reaction.timestamp.slice(1, -1)),
      },
    }
  })
})
