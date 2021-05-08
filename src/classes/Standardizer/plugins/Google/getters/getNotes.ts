import Google from '../Google'
import { Message } from '../../../../../types/schemas'

interface GoogleNotes {
  color: string,
  isTrashed: boolean,
  isPinned: boolean,
  isArchived: boolean,
  textContent?: string,
  title?: string,
  userEditedTimeStampUsec: number
}

Google.prototype.getNotes = async function getNotes(options) {
  const NOTES_FILES = await (await this.parser.listFiles('Takeout/Keep/')).filter(file => file.includes('.json'))

  const notes = await Promise.all(NOTES_FILES.map(async file => {
    const note = await this.parser.parseAsJSON<GoogleNotes>(file, options?.parsingOptions)
    return {
      sender: 'Note to myself',
      receiver: 'Note to myself',
      title: note.title ?? 'No title provided',
      content: note.textContent ?? 'No content provided',
      creationDate: new Date(file.split('Takeout/Keep/')[1].replaceAll('_', ':').split('.json')[0]),
    } as Message
  }))

  return {
    data: notes,
    parsedFiles: NOTES_FILES,
  }
}
