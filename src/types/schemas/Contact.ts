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
import { ASchema } from 'types/schemas/ASchema';
import { ProfilExtra } from 'types/schemas/Discord/ProfilExtra';
import { ProfilePicture } from 'types/schemas/ProfilePicture'

/**
 *
 * Class definition of contact
 *
 * @export
 * @class Contact
 * @extends {ASchema<Contact>}
 */
export class Contact extends ASchema<Contact> {
  /**
   *
   * Display name / profile name of the contact
   *
   * @type {string}
   * @memberof Contact
   */
  @IsOptional()
  @IsString()
  displayName?: string;

  /**
   *
   * Firstname of the contact
   *
   * @type {string}
   * @memberof Contact
   */
  @IsOptional()
  @IsString()
  firstName?: string;

  /**
   *
   * Lastname of the contact
   *
   * @type {string}
   * @memberof Contact
   */
  @IsOptional()
  @IsString()
  lastName?: string;

  /**
   *
   * Username of the contact account
   *
   * @type {string}
   * @memberof Contact
   */
  @IsOptional()
  @IsString()
  username?: string;

  /**
   *
   * Nickname given to the contact by the archive owner
   *
   * @type {string}
   * @memberof Contact
   */
  @IsOptional()
  @IsString()
  nickname?: string;

  /**
   *
   * Gender of the contact
   *
   * @type {string}
   * @memberof Contact
   */
  @IsOptional()
  @IsString()
  gender?: string;

  /**
   *
   * Birthday in timestamp format
   *
   * @type {(number | Date)}
   * @memberof Contact
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  birthday?: number | Date;

  /**
   *
   * Number of phone of a contact
   *
   * @type {string}
   * @memberof Contact
   */
  @IsOptional()
  @IsString()
  @IsPhoneNumber()
  phone?: string;

  /**
   *
   * Mail of the contact
   *
   * @type {string}
   * @memberof Contact
   */
  @IsOptional()
  @IsString()
  @IsEmail()
  mail?: string;

  /**
   *
   * Since when the contact is in the conctact list of the owner
   *
   * @type {(number | Date)}
   * @memberof Contact
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  date?: number | Date;

  /**
   *
   * Contact's profile picture object
   *
   * @type {ProfilePicture}
   * @memberof Contact
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ProfilePicture)
  profilePicture?: ProfilePicture;

  /**
   *
   *
   * @type {ProfilExtra}
   * @memberof Contact
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ProfilExtra)
  Extra?: ProfilExtra;
}
