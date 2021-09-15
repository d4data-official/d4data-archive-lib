import papa, { ParseError } from 'papaparse'
import { PaginationOptions, ParsingOptions, ParsingReturn } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export interface OptionsCSV {
  columns?: Array<string>
}

export type OptionsParseAsCSV = ParsingOptions & PaginationOptions & OptionsCSV

/**
 * Parse given Pipeline result stream as CSV format
 */
export default async function parseAsCSV<T = any>(
  pipeline: Pipeline,
  options?: OptionsParseAsCSV,
): Promise<ParsingReturn<Array<T>>> {
  const stream = pipeline.run()
  const content: Array<T> = []
  const items = options?.pagination?.items ?? Infinity
  const offset = options?.pagination?.offset ?? 0
  let index = 0

  return new Promise<Array<any>>((resolve) => {
    papa.parse(stream, {
      header: !options?.columns,
      error(error: ParseError) {
        console.error(error)
      },
      step(row: any) {
        index += 1
        if (offset + items < index) {
          return
        }
        if (index - 1 >= offset) {
          content.push(row.data)
        }
      },
      complete() {
        resolve(content)
      },
    })
  }).then((data) => {
    if (!options?.columns) {
      return data
    }
    return data.map((item) => {
      const obj: Record<string, any> = {}
      for (let i = 0; i < (options?.columns?.length ?? 0); i += 1) {
        const colName = options?.columns![i]
        obj[colName] = item[i]
      }
      return obj
    })
  }).then((data: Array<T>): ParsingReturn<Array<T>> => ({
    data,
    pagination: {
      items: data.length,
      total: index,
      offset: options?.pagination?.offset ?? 0,
    },
  }))
}
