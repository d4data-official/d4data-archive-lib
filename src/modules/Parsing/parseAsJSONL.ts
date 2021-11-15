import readline from 'readline'
import { PaginationOptions, ParsingOptions, ParsingReturn } from '../../types/Parsing'
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
): Promise<ParsingReturn<Array<T>>> {
  let i = 0
  const offset = options?.pagination?.offset ?? 0
  const itemLimit = options?.pagination?.items ?? Infinity
  const content: Array<T> = []
  const stream = pipeline.run()
  const rl = readline.createInterface({
    input: stream,
  })

  rl.on('line', (line) => {
    i += 1
    if (!(options?.filter?.(line) ?? true)) {
      return
    }
    if (i <= offset) {
      return
    }
    if (content.length >= itemLimit) {
      return
    }
    const parsedItem = JSON.parse(line)
    content.push(options?.transform?.(parsedItem) ?? parsedItem)
  })

  return new Promise<ParsingReturn<Array<T>>>((resolve, reject) => {
    rl.on('close', () => resolve({
      pagination: {
        offset: options?.pagination?.offset ?? 0,
        items: content.length,
        total: i,
      },
      data: content,
    }))
    stream.on('error', (e) => reject(e))
  })
}
