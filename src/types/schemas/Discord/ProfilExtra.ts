import { ISchema } from 'types/schemas/ISchema';

interface AccountLinked {
  /**
    *
    * Platform link to account
    *
    */
  platform?: string;

  /**
    *
    * Name of the account linked
    *
    */
  name?: string;

  /**
    *
    * If account still linked
    *
    */
  revoked?: boolean;
}

/**
 *
 * Interface definition ofDiscord profile extra properties
 *
 */
export interface ProfilExtra extends ISchema {
  /**
    *
    * Time until end of premium (timestamp)
    *
    */
  premium?: number;

  /**
    *
    * list of account linked
    *
    */
  account_linked?: Array<AccountLinked>;
}
