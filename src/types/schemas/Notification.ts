import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString, IsUrl } from 'class-validator';
import { ASchema } from './ASchema';

/**
 * JSON Schema definition of notifications property
 */
export class Notification extends ASchema<Notification> {
  /**
   * text of the notification
   */
  @IsOptional()
  @IsString()
  content?: string;

  /**
   * date of the notification
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  notificationDate?: number | Date;

  /**
   * link of the notification
   */
  @IsOptional()
  @IsString()
  @IsUrl()
  href?: string;
}
