import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString, IsUrl } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';

/**
 *
 * Class definition of notifications property
 *
 * @export
 * @class Notification
 * @extends {ASchema<Notification>}
 */
export class Notification extends ASchema<Notification> {
  /**
   *
   * text of the notification
   *
   * @type {string}
   * @memberof Notification
   */
  @IsOptional()
  @IsString()
  content?: string;

  /**
   *
   * date of the notification
   *
   * @type {(number | Date)}
   * @memberof Notification
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  notificationDate?: number | Date;

  /**
   *
   * link of the notification
   *
   * @type {string}
   * @memberof Notification
   */
  @IsOptional()
  @IsString()
  @IsUrl()
  href?: string;
}
