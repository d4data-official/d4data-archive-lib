import Google from '../Google'
import { Note } from '../../../../../types/schemas'

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
  const noteFiles = await this.parser.listFiles('Takeout/Keep/', { extensionWhitelist: ['json'] })

  const notes = await Promise.all(noteFiles.map(async file => {
    const note = await this.parser.parseAsJSON<GoogleNotes>(file, options?.parsingOptions)
    return {
      title: note.title ?? 'No title provided',
      content: note.textContent ?? 'No content provided',
      creationDate: new Date(file.split('Takeout/Keep/')[1].replaceAll('_', ':').split('.json')[0]),
    } as Note
  }))

  return {
    data: notes,
    parsedFiles: noteFiles,
  }
}
