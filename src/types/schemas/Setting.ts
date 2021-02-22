import { IsOptional, IsString } from 'class-validator';
import { ASchema } from './ASchema';

/**
 * JSON Schema definition of setting property
 */
export class Setting extends ASchema<Setting> {
  /**
   * name of setting
   */
  @IsString()
  name!: string;

  /**
   * value of setting
   */
  @IsOptional()
  @IsString()
  value?: string;
}
