import { Type } from 'class-transformer';
import { IsDate, ValidateNested } from 'class-validator';
import { ASchema } from './ASchema';
import { Location } from './Location';

/**
 * JSON Schema definition of whereabouts
 */
export class Whereabout extends ASchema<Whereabout> {
  /**
   * @ignore
   * Obect type name
   */
  __type?: string = 'whereabout';

  /**
   * Reference to location
   */
  @ValidateNested()
  @Type(() => Location)
  location!: Omit<Location, 'isValid'>;

  /**
   * Timestamp of recorded position
   */
  @IsDate()
  @Type(() => Date)
  timestamp!: number | Date;
}
