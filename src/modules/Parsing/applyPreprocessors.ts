import { Stream } from 'stream'
import { Preprocessor } from '../../types/Parsing'

export default async function applyPreprocessors(inputStream: Stream, preprocessors: Array<Preprocessor>): Promise<Stream> {
  let previousStream = inputStream
  for (const preprocessor of preprocessors) {
    // eslint-disable-next-line no-await-in-loop
    previousStream = await preprocessor(previousStream)
  }
  return previousStream
}
