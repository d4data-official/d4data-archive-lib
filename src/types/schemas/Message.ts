import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';

/**
 * Class definition of a message
 */
export class Message extends ASchema<Message> {
  /**
   *
   * creation date of the message in timestamp format
   *
   * @type {(number | Date)}
   * @memberof Message
   */
  @IsDate()
  @Type(() => Date)
  creationDate!: number | Date;

  /**
   *
   * Who send the message
   *
   * @type {string}
   * @memberof Message
   */
  @IsString()
  sender!: string;

  /**
   *
   * Who receive the message
   *
   * @type {string}
   * @memberof Message
   */
  @IsString()
  receiver!: string;

  /**
   *
   * Subject of the message
   *
   * @type {string}
   * @memberof Message
   */
  @IsOptional()
  @IsString()
  title?: string;

  /**
   *
   * Message content
   *
   * @type {string}
   * @memberof Message
   */
  @IsString()
  content!: string;
}
