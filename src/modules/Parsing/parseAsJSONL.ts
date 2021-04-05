import readline from 'readline'
import { PaginationOptions, ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export interface OptionsJSONL {
  // Filter unparsed lines (JSON string)
  filter?: (unparsedLine: string) => boolean
  // Transform each parsed item
  transform?: (item: any) => any
}

export type OptionsParseAsJSONL = ParsingOptions & PaginationOptions & OptionsJSONL

/**
 * Parse given Pipeline result stream as JSONL format
 */
export default async function parseAsJSONL<T = any>(
  pipeline: Pipeline,
  options?: OptionsParseAsJSONL,
): Promise<Array<T>> {
  let i = 0
  const offset = options?.pagination?.offset ?? 0
  const itemLimit = options?.pagination?.items ?? Infinity
  const content: Array<T> = []
  const stream = pipeline.run()
  const rl = readline.createInterface({
    input: stream,
  })

  rl.on('line', (line) => {
    if (!(options?.filter?.(line) ?? true)) {
      return
    }

    if (i < offset) {
      i += 1
      return
    }

    if (content.length >= itemLimit) {
      stream.destroy()
      rl.close()
      return
    }

    const parsedItem = JSON.parse(line)

    content.push(options?.transform?.(parsedItem) ?? parsedItem)

    i += 1
  })

  return new Promise<Array<T>>((resolve, reject) => {
    rl.on('close', () => resolve(content))
    stream.on('error', (e) => reject(e))
  })
}
