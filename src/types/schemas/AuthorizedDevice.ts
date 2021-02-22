import { IsDate, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ASchema } from './ASchema';

/**
 * JSON Schema definition of an authorized device
 */
export class AuthorizedDevice extends ASchema<AuthorizedDevice> {
  /**
   * name of device
   */
  @IsString()
  name!: string;

  /**
   * ip of device
   */
  @IsOptional()
  @IsString()
  ip?: string;

  /**
   * date when the device was authorized
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  timestamp?: number | Date;
}
