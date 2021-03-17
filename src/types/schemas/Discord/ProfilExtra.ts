interface AccountLinked {
  /**
    * Platform link to account
    */
  platform?: string;

  /**
    * Name of the account linked
    */
  name?: string;

  /**
    * If account still linked
    */
  revoked?: boolean;
}

/**
 * Interface of profile extra properties
 */
export interface ProfilExtra {
  /**
    * Time until end of premium (timestamp)
    */
  premium?: number;

  /**
    * list of account linked
    */
  accountLinked?: Array<AccountLinked>;
}
