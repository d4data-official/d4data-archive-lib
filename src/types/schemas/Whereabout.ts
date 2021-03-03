import { Type } from 'class-transformer';
import { IsDate, ValidateNested } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';
import { Location } from 'types/schemas/Location';

/**
 */
/**
 *
 * Class definition of whereabouts
 *
 * @export
 * @class Whereabout
 * @extends {ASchema<Whereabout>}
 */
export class Whereabout extends ASchema<Whereabout> {
/**
   *
   * Reference to location
   *
   * @type {Location}
   * @memberof Whereabout
   */
  @ValidateNested()
  @Type(() => Location)
  location!: Location;

  /**
   *
   * Timestamp of recorded position
   *
   * @type {(number | Date)}
   * @memberof Whereabout
   */
  @IsDate()
  @Type(() => Date)
  recordDate!: number | Date;
}
