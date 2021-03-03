import { Type } from 'class-transformer';
import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';

/**
 *
 *
 * @export
 * @class Event
 * @extends {ASchema<Event>}
 */
export class Event extends ASchema<Event> {
/**
   *
   * name of the event
   *
   * @type {string}
   * @memberof Event
   */
  @IsOptional()
  @IsString()
  name?: string;

  /**
   *
   * date and time of the start of the event in timestamp format
   *
   * @type {(number | Date)}
   * @memberof Event
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  startDate?: number | Date;

  /**
   *
   * date and time of the end of the event in timestamp format
   *
   * @type {(number | Date)}
   * @memberof Event
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  endDate?: number | Date;

  /**
   *
   * person who will participate to the event
   *
   * @type {Array<string>}
   * @memberof Event
   */
  @IsArray()
  @IsString({ each: true })
  participants?: Array<string>
}
