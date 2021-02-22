import { IsDate, IsString } from 'class-validator';
import { Type } from 'class-transformer'
import 'reflect-metadata'
import { ASchema } from '../ASchema';

/**
 * JSON Schema definition of Google note extra properties
 */
export class NoteExtra extends ASchema<NoteExtra> {
  /**
   * content of the note
   */
  @IsString()
  content!: string;

  /**
   * title of the note
   */
  @IsString()
  title!: string;

  /**
   * Creation date of the note in timestamp format
   */
  @Type(() => Date)
  @IsDate()
  creationDate!: number | Date;
}
