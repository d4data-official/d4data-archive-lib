export default interface API {
  /**
   * name of API
   */
  name: string;

  /**
   * date of API linking
   */
  linkingDate?: Date | undefined

  /**
   * username of the user
   */
  username?: string | undefined
}
