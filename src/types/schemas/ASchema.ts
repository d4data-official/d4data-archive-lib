/**
 *
 * @abstract
 * @generic <T extends ASchema<T>>
 *
 */
export abstract class ASchema<T extends ASchema<T>> {
  public constructor(init: T) {
    Object.assign(this, init);
  }

  __type?: string;
}
