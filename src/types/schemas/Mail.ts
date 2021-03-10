import { Type } from 'class-transformer';
import { IsArray, IsDate, IsEmail, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';
import { Media } from 'types/schemas/Media';

/**
 *
 * Class definition of mail property
 *
 * @export
 * @class Mail
 * @extends {ASchema<Mail>}
 */
export class Mail extends ASchema<Mail> {
  /**
   *
   * Sender of the mail
   *
   * @type {string}
   * @memberof Mail
   */
  @IsString()
  @IsEmail()
  from!: string;

  /**
   *
   * Receiver of the mail
   *
   * @type {string}
   * @memberof Mail
   */
  @IsString()
  @IsEmail()
  to!: string;

  /**
   *
   * Date at the time the mail was send
   *
   * @type {(number | Date)}
   * @memberof Mail
   */
  @IsDate()
  @Type(() => Date)
  date!: number | Date;

  /**
   *
   * Object of the mail
   *
   * @type {string}
   * @memberof Mail
   */
  @IsOptional()
  @IsString()
  subject?: string;

  /**
   *
   * content of the mail
   *
   * @type {string}
   * @memberof Mail
   */
  @IsString()
  content!: string;

  /**
   *
   * info of the file link in the mail
   *
   * @type {Array<Media>}
   * @memberof Mail
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Media)
  attachments?: Array<Media>;
}
