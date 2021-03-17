import { ProfilExtra } from 'types/schemas/Discord/ProfilExtra';
import { ProfilePicture } from 'types/schemas/ProfilePicture'

/**
 * Interface definition of contact
 */
export interface Contact {
  /**
   * Display name / profile name of the contact
   */
  displayName?: string;

  /**
   * Firstname of the contact
   */
  firstName?: string;

  /**
   * Lastname of the contact
   */
  lastName?: string;

  /**
   * Username of the contact account
   */
  username?: string;

  /**
   * Nickname given to the contact by the archive owner
   */
  nickname?: string;

  /**
   * Gender of the contact
   */
  gender?: string;

  /**
   * Birthday in timestamp format
   */
  birthday?: number | Date;

  /**
   * Number of phone of a contact
   */
  phone?: string;

  /**
   * Mail of the contact
   */
  mail?: string;

  /**
   * Since when the contact is in the conctact list of the owner
   */
  date?: number | Date;

  /**
   * Contact's profile picture object
   */
  profilePicture?: ProfilePicture;

  Extra?: ProfilExtra;
}
