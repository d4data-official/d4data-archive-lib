import { IsEnum, IsNumber, IsString } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';

enum MediaType {
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
}

/**
 *
 * Class definition of media type
 *
 * @export
 * @class Media
 * @extends {ASchema<Media>}
 */
export class Media extends ASchema<Media> {
  /**
   *
   * Absolute path on the host
   *
   * @type {string}
   * @memberof Media
   */
  @IsString()
  path!: string;

  /**
   *
   * Media size in bytes
   *
   * @type {number}
   * @memberof Media
   */
  @IsNumber()
  size!: number;

  /**
   *
   * Media type
   *
   * @type {MediaType}
   * @memberof Media
   */
  @IsEnum(MediaType)
  type!: MediaType;
}
