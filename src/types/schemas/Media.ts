import { IsEnum, IsNumber, IsString } from 'class-validator';
import { ASchema } from './ASchema';

enum MediaType {
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
}

/**
 * JSON Schema definition of media type
 */
export class Media extends ASchema<Media> {
  /**
   * Absolute path on the host
   */
  @IsString()
  path!: string;

  /**
   * Media size in bytes
   */
  @IsNumber()
  size!: number;

  /**
   * Media type
   */
  @IsEnum(MediaType)
  type!: MediaType;
}
