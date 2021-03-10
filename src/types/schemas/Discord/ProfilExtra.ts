/* eslint-disable max-classes-per-file */
import { IsArray, IsBoolean, IsDate, IsEmail, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import 'reflect-metadata';
import { ASchema } from 'types/schemas/ASchema';

/**
 *
 *
 * @class AccountLinked
 */
class AccountLinked {
  /**
   *
   * Platform link to account
   *
   * @type {string}
   * @memberof AccountLinked
   */
  @IsOptional()
  @IsString()
  @IsEmail()
  platform?: string;

  /**
   *
   * Name of the account linked
   *
   * @type {string}
   * @memberof AccountLinked
   */
  @IsOptional()
  @IsString()
  name?: string;

  /**
   *
   * If account still linked
   *
   * @type {boolean}
   * @memberof AccountLinked
   */
  @IsOptional()
  @IsBoolean()
  revoked?: boolean;
}

/**
 *
 * Class definition of Discord profile extra properties
 *
 * @export
 * @class ProfilExtra
 * @extends {ASchema<ProfilExtra>}
 */
export class ProfilExtra extends ASchema<ProfilExtra> {
  /**
   *
   * Time until end of premium (timestamp)
   *
   * @type {number}
   * @memberof ProfilExtra
   */
  @IsOptional()
  @IsDate()
  premium?: number;

  /**
   *
   * list of account linked
   *
   * @type {Array<AccountLinked>}
   * @memberof ProfilExtra
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AccountLinked)
  account_linked?: Array<AccountLinked>;
}
