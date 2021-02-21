import { validate } from 'class-validator';
import { classToClass } from 'class-transformer';

export abstract class ASchema<T extends ASchema<T>> {
  /**
   * @ignore
   * Obect type name
   */
  __type?: string = 'abstractParent';

  public constructor(init: Omit<T, 'isValid'>) {
    Object.assign(this, init);
    // this.isValid();
  }

  public async isValid(): Promise<ASchema<T>> {
    const valid = await validate(classToClass(this));
    if (valid.length) { throw new Error(valid.toString()) }
    return this;
  }
}
