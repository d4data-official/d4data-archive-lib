import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { ASchema } from './ASchema';
import { Media } from './Media';

export class ProfilePicture extends ASchema<ProfilePicture> {
  /**
 * Index of current contact picture in history array
 */
  @IsOptional()
  @IsNumber()
  currentPictureIndex?: number;

  /**
   * History of contact picture
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Media)
  history?: Array<Media>
}
