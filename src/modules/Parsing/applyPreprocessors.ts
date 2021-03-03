import { Transform } from 'stream'
import { ReadStream } from 'fs'
import { Preprocessor } from '../../types/Parsing'

export default async function applyPreprocessors(
  inputStream: ReadStream | Transform,
  preprocessors: Array<Preprocessor>,
): Promise<Transform> {
  let previousStream = inputStream

  for (const preprocessor of preprocessors) {
    // eslint-disable-next-line no-await-in-loop
    previousStream = await preprocessor(previousStream)
  }

  return previousStream as Transform
}
