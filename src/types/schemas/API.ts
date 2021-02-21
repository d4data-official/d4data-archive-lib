import { IsDate, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ASchema } from './ASchema';

/**
 * JSON Schema definition of API property
 */
export class API extends ASchema<API> {
  /**
   * @ignore
   * Obect type name
   */
  __type?: string = 'API';

  /**
   * name of API
   */
  @IsString()
  name!: string;

  /**
   * date of API linking
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  timestamp?: number | Date;
}
