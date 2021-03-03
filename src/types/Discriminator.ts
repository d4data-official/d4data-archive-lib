import { ASchema } from 'types/schemas/ASchema';

export type Discriminator<T extends ASchema<T>, Name> = T & { __type: Name };
