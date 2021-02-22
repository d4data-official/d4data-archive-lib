import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { ASchema } from './ASchema';

/**
 * JSON Schema definition of community
 */
export class Community extends ASchema<Community> {
  @IsString()
  @Expose()
  name!: string;
}
