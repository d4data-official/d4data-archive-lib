import { Type } from 'class-transformer';
import { IsArray, IsDate, IsEmail, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ASchema } from './ASchema';
import { Media } from './Media';

/**
 * JSON Schema definition of mail property
 */
export class Mail extends ASchema<Mail> {
  /**
   * @ignore
   * Obect type name
   */
  __type?: string = 'mail';

  /**
   * Sender of the mail
   */
  @IsString()
  @IsEmail()
  from!: string;

  /**
   * Receiver of the mail
   */
  @IsString()
  @IsEmail()
  to!: string;

  /**
   * Date at the time the mail was send
   */
  @IsDate()
  @Type(() => Date)
  date!: number | Date;

  /**
   * Object of the mail
   */
  @IsOptional()
  @IsString()
  subject?: string;

  /**
   * content of the mail
   */
  @IsString()
  content!: string;

  /**
   * info of the file link in the mail
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Media)
  attachments?: Array<Omit<Media, 'isValid'>>;
}
