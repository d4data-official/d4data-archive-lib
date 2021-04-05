import ProfilePicture from 'types/schemas/ProfilePicture'

export default interface Contact {
  /**
   * Display name / profile name of the contact
   */
  displayName?: string | undefined

  /**
   * Firstname of the contact
   */
  firstName?: string | undefined

  /**
   * Lastname of the contact
   */
  lastName?: string | undefined

  /**
   * Username of the contact account
   */
  username?: string | undefined

  /**
   * Nickname given to the contact by the archive owner
   */
  nickname?: string | undefined

  /**
   * Gender of the contact
   */
  gender?: string | undefined

  /**
   * Birthday in timestamp format
   */
  birthday?: Date | undefined

  /**
   * Number of phone of a contact
   */
  phone?: string | undefined

  /**
   * Mail of the contact
   */
  mail?: string | undefined

  /**
   * Since when the contact is in the conctact list of the owner
   */
  date?: Date | undefined

  /**
   * Contact's profile picture object
   */
  profilePicture?: ProfilePicture | undefined
}
