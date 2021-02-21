import { IsDate, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ASchema } from './ASchema';
import { Services } from '../Services';

/**
 * JSON Schema definition of archives property
 */
export class Archive extends ASchema<Archive> {
  /**
   * @ignore
   * Obect type name
   */
  __type?: string = 'archive';

  /**
   * Archive size in bytes
   */
  @IsOptional()
  @IsNumber()
  size?: number;

  /**
   * Archive creation date in timestamp format
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  creationDate?: number | Date;

  /**
   * Archive service name
   */
  @IsEnum(Services)
  service!: Services;
}
