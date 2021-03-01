# Parsing

Majority of project's parsing logic is grouped in Parsing module, its methods are parsing utilities for commonly
encountered file formats inside Service archives.

[Parser class](/src/classes/Parser.ts)

[Parsing module](/src/modules/Parsing)

## How to use parsing utilities from getters

### Basic usage

There is a basic example of using a parsing utility from a getter, this example is based on Facebook's Profile getter.

⚠ **WARNING:** The property `parsingOptions` of `options` parameter needs to be forwarded to the parsing utility.

```typescript
// File: src/classes/Standardizer/Facebook/getters/getProfile.ts

import Standardizer, { GetterOptions } from '../../Standardizer'
import IProfile from '../../../../types/standardizer/IProfile'

export default async function getProfile(this: Standardizer, options?: GetterOptions): Promise<IProfile> {
  // Will read file and parse its content as JSON asynchronously
  const profileRawData = await this.parser.parseAsJSON(
    'profile_information/profile_information.json',
    options?.parsingOptions,
  )

  return {
    firstName: profileRawData.profile.name.first_name,
    lastName: profileRawData.profile.name.last_name,
    gender: profileRawData.profile.gender.pronoun,
    mail: profileRawData.profile.emails.emails[0],
    birthday: new Date(profileRawData.profile.birthday.year, profileRawData.profile.birthday.month
      - 1, profileRawData.profile.birthday.day).getTime() / 1000,
  }
}
```

### Advanced usage

#### Generic Type

By default, parsing utilities will return an `any` or a `Array<any>` Typescript type.

If you need to manipulate the data more deeply, you can describe it using Generic Typing, as shown in the following
example :

This will permit to your IDE to offers you autocompletion on the parsed data for easier development.

This example is based on Reddit's Comment list getter.

```typescript
// File: src/classes/Standardizer/Reddit/getter/getComments.ts

import Standardizer, { GetterOptions } from '../../Standardizer'
import IComment from '../../../../types/standardizer/IComment'

// Type of parsed data from 'comments.csv' file
interface RawPost {
  id: string
  permalink: string
  date: string
  ip: string
  subreddit: string
  gildings: string
  link: string
  parent: string
  body: string
}

export default async function getComments(this: Standardizer, options?: GetterOptions): Promise<IComment> {
  // You can specify the parsed data type thanks to Generic Typing
  const posts = await this.parser.parseAsCSV<RawPost>('comments.csv', options?.parsingOptions)

  return posts.map(post => ({
    // You now can have autocompletion on post object
    content: post.body,
    sender: 'You',
    creationDate: new Date(post.date).getTime() / 1000,
  }))
}
```

#### Pre-processors

A pre-processor is a function which take a Node.js stream as input, apply a transformation on the data and return
another stream.

```typescript
import { Transform, TransformCallback } from 'stream'
import Standardizer, { GetterOptions } from '../../Standardizer'
import IProfile from '../../../../types/standardizer/IProfile'

export default async function getProfile(this: Standardizer, options?: GetterOptions): Promise<IProfile> {
  // Will read file and parse its content as JSON asynchronously
  const profileRawData: any = await this.parser.parseAsJSON(
    'profile_information/profile_information.json',
    {
      preprocessors: [
        // This pre-processor will replace all 'o' characters by '0'
        async (stream) => stream.pipe(new Transform({
          transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback) {
            const transformedChunk = chunk.toString().replace(/o/g, '0')
            callback(null, transformedChunk)
          },
        })),
      ],
      ...options?.parsingOptions,
    },
  )

  return {
    firstName: profileRawData.profile.name.first_name,
    lastName: profileRawData.profile.name.last_name,
    gender: profileRawData.profile.gender.pronoun,
    mail: profileRawData.profile.emails.emails[0],
    birthday: new Date(profileRawData.profile.birthday.year, profileRawData.profile.birthday.month
      - 1, profileRawData.profile.birthday.day).getTime() / 1000,
  }
}
```
