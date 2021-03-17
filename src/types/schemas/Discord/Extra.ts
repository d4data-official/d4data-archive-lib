import { ISchema } from 'types/schemas/ISchema';

/**
 *
 * Interface definition ofDiscord not standardized data (extra data)
 *
 */
export interface Extra extends ISchema {
  [k: string]: unknown;
}
