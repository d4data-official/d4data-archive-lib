# Schemas

## Definition

Every schema are defined using class-validator and class-transformer packages.
Theses packages allow us a more generic use of our objects with type checking more efficient.

### Abstraction
Every Schema must extend this abstract class
```TS
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
```

### Declaration

Some rules have to be respected while declaring a schema class
- Every optional attribute must use the `@IsOptional()` decorator
- Every sub-attribute implementing a class or and Array of class must use
	- the `@Type(() => ${TypeOfAttribute})` decorator
    - the `@ValidateNested()` decorator
- Every Array atrributes must pass `{ each: true }` as every validation decorator's properties

```TS
import { Type } from 'class-transformer';
import { IsArray, IsDate, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ASchema } from './ASchema';
import { Media } from './Media';

/**
 * Class Schema definition of reaction property
 */
export class Reaction extends ASchema<Reaction> {
  /**
   * name of reaction
   */
  @IsString()
  name!: string;

  /**
   * Use to give context or extra info to the reaction
   */
  @IsOptional()
  @IsString()
  description?: string;

  /**
   * Creation date time of the reaction (timestamp format)
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  reactionDate?: number | Date;

  /**
   * Image associated to the reaction
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Media)
  medias?: Array<Media>;
}
```

#### Specific case

In case of a union type, a discriminator must be set following this exemple.

```ts
import { Type } from 'class-transformer';
import { IsEnum, IsOptional, ValidateNested } from 'class-validator';
import { ASchema } from './ASchema';
import { Community } from './Community';
import { Contact } from './Contact';

enum FollowingType {
  COMMUNITY = 'community',
  CONTACTS = 'contacts',
}

/**
 * Following is an entity that a user can follow (user, page/community, ...)
 */
export class Following extends ASchema<Following> {
  /**
   * name of the entity's type
   */
  @IsOptional()
  @IsEnum(FollowingType)
  type?: FollowingType;

  /**
   * Either Community or Contact object depending on type value
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ASchema, {
    discriminator: {
      property: '__type',
      subTypes: [
        { value: Community, name: 'community' },
        { value: Contact, name: 'contact' },
      ],
    },
  })
  entity?: Community | Contact
}
```

Here entity is of type `Community | Contact`, the discriminaor is the `__type` property, the validated type depend on it's corresponding name value on the `subTypes` array.

## How To Use

The best way to use and verify your schema instance is to create it from a plain object using the `SchemaError`'s static method `contructAndCatch` as follow

### Basic usage exemples:

In these exemple, we create an instance of an `API` object by passing as argument the API class constructor function as first argument to the `constructAndCatch` static method as well as an object with at least all the mandatory attributes of this object.

```typescript
import { SchemaError } from '../src/types/errors/Schema.error';
import { API } from '../src/types/schemas/API';

const api: API | null = SchemaError.constructAndCatch(API, {
  name: 'API Name',

  // as linkingDate is optional, you do not have to define it
  linkingDate: Date.now(),
});

console.log(api);
// API { name:  'API Name', linkingDate: 2021-02-22T14:22:12.901Z }
```

or

```typescript
import { SchemaError } from '../src/types/errors/Schema.error';
import { API } from '../src/types/schemas/API';

const api: API = {
  name: 'API Name',

  // as linkingDate is optional, you do not have to define it
  linkingDate: 99999999999999999999999999999,
}

console.log(SchemaError.constructAndCatch(API, api));
// null because of linkingDate wich is to high to be taken as a timestamp and use as a Date (an appropriate message will be logged in the error output)
```

### Advanced Usage Exemples

Typescript allows union type for class attributes, in order to make a safe conversion and validation of a plain object to a class instance, a `__type` property must be pass in case of a union type attribute to precise the targeted type of the conversion.
> The `__type` property will not be set in the final object instance.

In these exemples, the attribute `entity` is of type `Contact | Community`.<br/>
In order to convert it in the correct type, the `__type` property must be set, if we want a community we have to use the correct discriminator name, here `community`.

```typescript
import { SchemaError } from '../src/types/errors/Schema.error';
import { Following } from '../src/types/schemas/Following';

const following = SchemaError.constructAndCatch(Following, {
  entity: {
    __type: 'community',
    name: 'My community',
  },
});

console.log(following);
// Following { entity: Community { name: 'My community' } }
```

Note that typescript will accept in the entity every attributes of `Contact` AND `Community` without any error. In order to verify this kind of missuse, the instance validation will forbid any extra attributes.

```typescript
import { SchemaError } from '../src/types/errors/Schema.error';
import { Following } from '../src/types/schemas/Following';

const following = SchemaError.constructAndCatch(Following, {
  entity: {
    __type: 'contact',
    name: 'My community',
  },
});

console.log(following);
// null because name is not an attribute of contact (an appropriate message will be logged in the error output)
```
