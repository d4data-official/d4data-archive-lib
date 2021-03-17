import { ISchema } from 'types/schemas/ISchema';

export type Discriminator<T extends ISchema, Name> = T & { __type: Name };
