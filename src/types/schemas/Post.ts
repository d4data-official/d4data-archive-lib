/* eslint-disable max-classes-per-file */
import { Type } from 'class-transformer';
import { IsArray, IsDate, IsOptional, IsString, IsUrl, ValidateNested } from 'class-validator';
import { ASchema } from './ASchema';
import { Event } from './Event';
import { Location } from './Location';
import { Media } from './Media';
import { Reaction } from './Reaction';

class ExternalContext extends ASchema<ExternalContext> {
  /**
   * @ignore
   * Obect type name
   */
  __type?: string = 'externalContent';

  /**
   * link of an external site
   */
  @IsOptional()
  @IsString()
  @IsUrl()
  url?: string;
}

/**
 * JSON Schema definition of post property
 */
export class Post extends ASchema<Post> {
  /**
   * @ignore
   * Obect type name
   */
  __type?: string = 'post';

  /**
   * Creation date of the post in timestamp format
   */
  @IsDate()
  @Type(() => Date)
  creationDate!: number | Date;

  /**
   * video or image linked with post
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Media)
  medias?: Array<Omit<Media, 'isValid'>>;

  /**
   * reaction linked with post
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reaction)
  reactions?: Array<Omit<Reaction, 'isValid'>>;

  /**
   * who posted
   */
  @IsString()
  sender!: string;

  /**
   * pseudo of the sender for Twitter only
   */
  @IsOptional()
  @IsString()
  alias?: string;

  /**
   * Title of the post
   */
  @IsOptional()
  @IsString()
  title?: string;

  /**
   * message posted
   */
  @IsOptional()
  @IsString()
  content?: string;

  /**
   * post with a location link
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Location)
  location?: Omit<Location, 'isValid'>;

  /**
   * post with a event link
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Event)
  event?: Omit<Event, 'isValid'>;

  /**
   * post with link of an external site
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ExternalContext)
  externalContext?: Omit<ExternalContext, 'isValid'>;

  /**
   * list of person tag on the post
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: Array<string>;
}
