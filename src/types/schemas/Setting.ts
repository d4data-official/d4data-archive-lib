import { ISchema } from 'types/schemas/ISchema';

/**
 *
 * Interface definition ofsetting property
 *
 */
export interface Setting extends ISchema {
/**
   *
   * name of setting
   *
   */
  name: string;

  /**
   *
   * value of setting
   *
   */
  value?: string;
}
