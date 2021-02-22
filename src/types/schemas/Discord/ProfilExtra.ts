/* eslint-disable max-classes-per-file */
import { IsArray, IsBoolean, IsDate, IsEmail, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import 'reflect-metadata';
import { ASchema } from '../ASchema';

class AccountLinked {
  /**
 * Platform link to account
 */
  @IsOptional()
  @IsString()
  @IsEmail()
  platform?: string;

  /**
   * Name of the account linked
   */
  @IsOptional()
  @IsString()
  name?: string;

  /**
   * If account still linked
   */
  @IsOptional()
  @IsBoolean()
  revoked?: boolean;
}

/**
 * JSON Schema definition of Discord profile extra properties
 */
export class ProfilExtra extends ASchema<ProfilExtra> {
  /**
   * Time until end of premium (timestamp)
   */
  @IsOptional()
  @IsDate()
  premium?: number;

  /**
   * list of account linked
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AccountLinked)
  account_linked?: Array<AccountLinked>;
}
