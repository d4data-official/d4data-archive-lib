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

function computeCreationDate(file: string, note: GoogleNotes) {
  const filename = file.split('Takeout/Keep/')?.[1]

  return new RegExp(/\d{4}-\d{2}-\d{2}T\d{2}_\d{2}_\d{2}\.\d{3}\+\d{2}_\d{2}\.json/).test(filename)
    ? new Date(filename.replaceAll('_', ':').replace('.json', ''))
    : new Date(note.userEditedTimestampUsec / 1000)
}

Google.prototype.getNotes = withAutoParser(async parser => {
  const noteFiles = await parser.listFiles('Takeout/Keep/', { extensionWhitelist: ['json'] })

  const notes = await Promise.all(
    noteFiles.map(async file => {
      const { data: note } = await parser.parseAsJSON<GoogleNotes>(file)
      return {
        title: note.title ?? 'No title provided',
        content: note.textContent ?? 'No content provided',
        creationDate: computeCreationDate(file, note),
      } as Note
    }),
  )

  return notes
})
