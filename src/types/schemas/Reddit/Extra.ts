import { ISchema } from 'types/schemas/ISchema';

/**
 *
 * Interface definition ofReddit not standardized data (extra data)
 *
 */
export interface Extra extends ISchema {
  [k: string]: unknown;
}
