import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';
import { Media } from 'types/schemas/Media';

export class ProfilePicture extends ASchema<ProfilePicture> {
/**
   *
   * Index of current contact picture in history array
   *
   * @type {number}
   * @memberof ProfilePicture
   */
  @IsOptional()
  @IsNumber()
  currentPictureIndex?: number;

  /**
   *
   * History of contact picture
   *
   * @type {Array<Media>}
   * @memberof ProfilePicture
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Media)
  history?: Array<Media>
}
