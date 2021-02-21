import { IsString } from 'class-validator';
import { ASchema } from './ASchema';

/**
 * JSON Schema definition of community
 */
export class Community extends ASchema<Community> {
  /**
   * @ignore
   * Obect type name
   */
  __type?: string = 'community';

  @IsString()
  name!: string;
}
