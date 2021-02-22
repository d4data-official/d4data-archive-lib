import { Type } from 'class-transformer';
import { IsDate, ValidateNested } from 'class-validator';
import { ASchema } from './ASchema';
import { Location } from './Location';

/**
 * JSON Schema definition of whereabouts
 */
export class Whereabout extends ASchema<Whereabout> {
  /**
   * Reference to location
   */
  @ValidateNested()
  @Type(() => Location)
  location!: Location;

  /**
   * Timestamp of recorded position
   */
  @IsDate()
  @Type(() => Date)
  timestamp!: number | Date;
}
