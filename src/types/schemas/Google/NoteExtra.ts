/**
 * Interface of note extra properties
 */
export interface NoteExtra {
  /**
   * content of the note
   */
  content: string

  /**
   * title of the note
   */
  title: string

  /**
   * Creation date of the note in timestamp format
   */
  creationDate: Date;
}
