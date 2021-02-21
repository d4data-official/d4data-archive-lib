import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { ASchema } from './ASchema';

/**
 * JSON Schema definition of a message
 */
export class Message extends ASchema<Message> {
  /**
   * @ignore
   * Obect type name
   */
  __type?: string = 'message';

  /**
   * creation date of the message in timestamp format
   */
  @IsDate()
  @Type(() => Date)
  creationDate!: number | Date;

  /**
   * Who send the message
   */
  @IsString()
  sender!: string;

  /**
   * Who receive the message
   */
  @IsString()
  receiver!: string;

  /**
   * Subject of the message
   */
  @IsOptional()
  @IsString()
  title?: string;

  /**
   * Message content
   */
  @IsString()
  content!: string;
}
