import { ISchema } from 'types/schemas/ISchema';

/**
 *
 * Interface definition ofAPI property
 *
 */
export interface API extends ISchema {
  /**
   *
   * name of API
   *
   */
  name: string;

  /**
   *
   * date of API linking
   *
   */
  linkingDate?: number | Date;
}
