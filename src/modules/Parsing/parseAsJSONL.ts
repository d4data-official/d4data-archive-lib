import readline from 'readline'
import { PaginationOptions, ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export type OptionsParseAsJSONL = ParsingOptions & PaginationOptions

/**
 * Parse given Pipeline result stream as JSONL format
 */
export default async function parseAsJSONL<T = any>(
  pipeline: Pipeline,
  options?: OptionsParseAsJSONL,
): Promise<Array<T>> {
  const content: Array<T> = []
  let i = 0
  const stream = pipeline.run()
  const rl = readline.createInterface({
    input: stream,
  });

  rl.on('line', (line) => {
    if (i < (options?.pagination?.offset ?? 0)) {
      i += 1
      return
    }
    if (i >= (options?.pagination?.offset ?? 0) + (options?.pagination?.items ?? Infinity)) {
      stream.destroy()
      rl.close()
      return
    }
    content.push(JSON.parse(line))
    i += 1
  });

  return new Promise <Array<T>>((resolve, reject) => {
    rl.on('close', () => resolve(content))
    stream.on('error', (e) => {
      reject(e)
    })
  })
}
