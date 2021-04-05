import { type } from 'os';
import fs from 'fs/promises'
import Discord from '../Discord'
import { Chat } from '../../../../../types/schemas'
import { GetterOptions } from '../../../../../types/standardizer/Standardizer';

const ACCOUNT_FILE = 'account/user.json'

Discord.prototype.getChats = async function getChats(options) {
  const channels = await this.parser.findFiles(/channel.json$/, './messages/')
  const chats = channels.map(async (channel, id): Promise<Chat> => {
    const parsed = await this.parser.parseAsJSON(channel)
    return {
      title: parsed?.name,
      _id: id.toString(),
      participants: [],
    }
  })
  return {
    data: await Promise.all(chats),
    parsedFiles: channels,
  }
}
