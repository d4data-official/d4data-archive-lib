import 'reflect-metadata'
import { ISchema } from 'types/schemas/ISchema';

/**
 *
 * Interface definition ofGoogle note extra properties
 *
 */
export interface NoteExtra extends ISchema {
  /**
   *
   * content of the note
   *
   */
  content: string

  /**
   *
   * title of the note
   *
   */
  title: string

  /**
   *
   * Creation date of the note in timestamp format
   *
   * @type {(number | Date)}
   */
  creationDate: number | Date;
}
