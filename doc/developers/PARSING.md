# Parsing

Majority of project's parsing logic is grouped in Parsing module, its methods are parsing utilities for commonly
encountered file formats inside Service archives.

[Parser class](/src/classes/Parser.ts): /src/classes/Parser.ts

[Parsing module](/src/modules/Parsing): /src/modules/Parsing

## How to use parsing utilities from getters (Standardizer)

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

A pre-processor is generally a Node.js stream which apply a transformation on the data it receives

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
        new Transform({
          transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback) {
            const transformedChunk = chunk.toString().replace(/o/g, '0')
            callback(null, transformedChunk)
          },
        }),
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

## How to add a parsing utility

This guide explains how to add a parsing utility which can be used from getters (Standardizer)

### Parsing utility

1. Create a Typescript file named `parseAs<FILE_EXTENSION>.ts` in `src/modules/Parsing` folder.

Where `<FILE_EXTENSION>` (in **CAPSLOCK**) is the file extension (file format) you want to parse with this new utility
function. (ex: `parseAsJSON.ts`)

2. Declare and export as default a function with this form.

*This example is based on a CSV parsing utility.*

```typescript
import { ParsingOptions } from '../../types/Parsing'

export type OptionsParseAsCSV =
  & ParsingOptions
  & PaginationOptions

/**
 * Parse given Pipeline result stream as CSV format
 */
export default async function parseAsCSV(pipeline: Pipeline, options?: OptionsParseAsCSV): Promise<string> {
  throw new Error('Not implemented') // Replace this with your code
}
```

*Please note that `options` parameter type in declared and exported as a standalone type, it's useful for better
maintainability and avoid code duplication as this type are also used for Parsing class methods.*

The `options` parameter is typed `ParsingOptions`, but can be typed
with [Intersection Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types)
to add specific options to your parsing utility like for exemple pagination: `ParsingOptions & PaginationOptions`

All Parsing types are located in this file: `src/types/Parsing.ts`

If you have many Intersection Types, please use this syntax for more readability:

```ts
type Options =
  & ParsingOptions
  & PaginationOptions
// ... More types
```

3. Implement parsing

⚠ **WARNING:**

- **Always perform parsing with async functions to avoid freezing the process.**
- **Don't forget to consider provided `options` in parameters (ex: pagination) and change your process consequently**

*The pipeline parameter is an instance of Pipeline class (`src/classes/Pipeline.ts`), it's a wrapper of Node.js pipeline
which permit to chain multiples streams. It used in this context to apply transformations (pre-processing) on archive
file data.*

```typescript
import { ParsingOptions } from '../../types/Parsing'

export type OptionsParseAsCSV =
  & ParsingOptions
  & PaginationOptions

/**
 * Parse given Pipeline result stream as CSV format
 */
export default async function parseAsCSV(pipeline: Pipeline, options?: OptionsParseAsCSV): Promise<string> {
  // Get the stream from the pipeline
  const stream = pipeline.run()

  // Pass the stream to a parsing library or use your own
  // Don't forget options paramater
  // Then return the result of the parsing
}
```

#### Special cases

##### Wait for complete data (not recommended)

⚠ **WARNING: Be careful, this practice bypass Node.js streams usage as it will put all stream data in memory during
parsing**

This special case must be used for formats which concern only small data sets / files, otherwise prefer the Node.js
stream method.

```typescript
import { ParsingOptions } from '../../types/Parsing'

export type OptionsParseAsJSON =
  & ParsingOptions

/**
 * Parse given Pipeline result stream as JSON format
 */
export default async function parseAsJSON(pipeline: Pipeline, options?: OptionsParseAsJSON): Promise<string> {
  // Run Pipeline and wait for complete stream data before return
  // WARNING: Will put all stream data in memory until return,
  //   can crash the process with heavy data set
  const completeData = await pipeline.toString()

  // Pass the complete data to a parsing library or use your own
  // Don't forget options paramater
  // Then return the result of the parsing
}
```

### Parser class method

After you add your new parsing utility function you must add it to the Parser class to be able to use it from getters (
Standardizer)

1. Add a new method in Parse class: `src/classes/Parser.ts`

The parameters differ of the parsing utility function:

- `relativeFilePath` is a file path relative to the archive root, always typed `string`
- `options` is parsing options **PLUS** a pre-processor array, typed with exported type from parsing utility file **
  AND** pre-processor options `OptionsParseAsCSV & PreprocessorOptions` (in CSV case)

```ts
// ...Rest of imports
import parseAsCSV, { OptionsParseAsCSV } from '../modules/Parsing/parseAsCSV'

/**
 * Parse CSV file from given path
 * Throw error if can't access file or if parsing fail
 */
export default class Parser {
  // ...Rest of class

  async parseAsCSV<T = any>(
    relativeFilePath: string,
    options?: OptionsParseAsCSV & PreprocessorOptions,
  ): Promise<Array<T>> {
    throw new Error('Not implemented') // Replace this with your code
  }
}
```

2. Merge given parsing options with Parser default ones
3. Call the corresponding parsing utility with correct parameters

```ts
// ...Rest of imports
import parseAsCSV, { OptionsParseAsCSV } from '../modules/Parsing/parseAsCSV'

/**
 * Parse CSV file from given path
 * Throw error if can't access file or if parsing fail
 */
export default class Parser {
  // ...Rest of class

  async parseAsCSV<T = any>(
    relativeFilePath: string,
    options?: OptionsParseAsCSV & PreprocessorOptions,
  ): Promise<Array<T>> {
    // Merge given parsing options with Parser default ones
    const mergedOptions = this.mergeOptions(options)

    return parseAsCSV(
      // Create a Pipeline from a file with given pre-processors
      Pipeline.fromFile(this.resolveRelativePath(relativeFilePath), mergedOptions.preprocessors),
      // Forward merged options
      mergedOptions,
    )
  }
}
```

You're done! 🎉
