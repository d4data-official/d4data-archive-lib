/* eslint-disable max-classes-per-file */
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ASchema } from './ASchema';
import { ProfilExtra } from './Discord/ProfilExtra';
import { ProfilePicture } from './ProfilePicture'

/**
 * JSON Schema definition of contact
 */
export class Contact extends ASchema<Contact> {
  /**
   * @ignore
   * Obect type name
   */
  __type?: string = 'contact';

  /**
   * Display name / profile name of the contact
   */
  @IsOptional()
  @IsString()
  displayName?: string;

  /**
   * Firstname of the contact
   */
  @IsOptional()
  @IsString()
  firstName?: string;

  /**
   * Lastname of the contact
   */
  @IsOptional()
  @IsString()
  lastName?: string;

  /**
   * Username of the contact account
   */
  @IsOptional()
  @IsString()
  username?: string;

  /**
   * Nickname given to the contact by the archive owner
   */
  @IsOptional()
  @IsString()
  nickname?: string;

  /**
   * Gender of the contact
   */
  @IsOptional()
  @IsString()
  gender?: string;

  /**
   * Birthday in timestamp format
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  birthday?: number | Date;

  /**
   * Number of phone of a contact
   */
  @IsOptional()
  @IsString()
  @IsPhoneNumber()
  phone?: string;

  /**
   * Mail of the contact
   */
  @IsOptional()
  @IsString()
  @IsEmail()
  mail?: string;

  /**
   * Since when the contact is in the conctact list of the owner
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  date?: number | Date;

  /**
   * Contact's profile picture object
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ProfilePicture)
  profilePicture?: Omit<ProfilePicture, 'isValid'>;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProfilExtra)
  Extra?: Omit<ProfilExtra, 'isValid'>;
}
