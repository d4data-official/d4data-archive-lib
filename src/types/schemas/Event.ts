import { Type } from 'class-transformer';
import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';
import { ASchema } from './ASchema';

export class Event extends ASchema<Event> {
  /**
   * name of the event
   */
  @IsOptional()
  @IsString()
  name?: string;

  /**
   * date and time of the start of the event in timestamp format
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  startDate?: number | Date;

  /**
   * date and time of the end of the event in timestamp format
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  endDate?: number | Date;

  @IsArray()
  @IsString({ each: true })
  participants?: Array<string>
}
