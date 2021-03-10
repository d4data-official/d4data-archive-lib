import { IsDate, IsString } from 'class-validator';
import { Type } from 'class-transformer'
import 'reflect-metadata'
import { ASchema } from 'types/schemas/ASchema';

/**
 */
/**
 *
 * Class definition of Google note extra properties
 *
 * @export
 * @class NoteExtra
 * @extends {ASchema<NoteExtra>}
 */
export class NoteExtra extends ASchema<NoteExtra> {
  /**
   *
   * content of the note
   *
   * @type {string}
   * @memberof NoteExtra
   */
  @IsString()
  content!: string;

  /**
   *
   * title of the note
   *
   * @type {string}
   * @memberof NoteExtra
   */
  @IsString()
  title!: string;

  /**
   *
   * Creation date of the note in timestamp format
   *
   * @type {(number | Date)}
   * @memberof NoteExtra
   */
  @Type(() => Date)
  @IsDate()
  creationDate!: number | Date;
}
