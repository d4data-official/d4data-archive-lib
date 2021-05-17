import Google from '../Google'
import { Note } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

interface GoogleNotes {
  color: string,
  isTrashed: boolean,
  isPinned: boolean,
  isArchived: boolean,
  textContent?: string,
  title?: string,
  userEditedTimestampUsec: number
}

function computeCreationDate(file:string, note:GoogleNotes) {
  return file.split('Takeout/Keep/')?.[1]
    ? new Date(file.split('Takeout/Keep/')?.[1]?.replaceAll('_', ':').split('.json')[0])
    : new Date(note.userEditedTimestampUsec / 1000)
}

Google.prototype.getNotes = withAutoParser(async parser => {
  const noteFiles = await parser.listFiles('Takeout/Keep/', { extensionWhitelist: ['json'] })

  const notes = await Promise.all(noteFiles.map(async file => {
    const note = await parser.parseAsJSON<GoogleNotes>(file)
    return {
      title: note.title ?? 'No title provided',
      content: note.textContent ?? 'No content provided',
      creationDate: computeCreationDate(file, note),
    } as Note
  }))

  return notes
})
