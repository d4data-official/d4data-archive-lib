import papa, { ParseError } from 'papaparse'
import { PaginationOptions, ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'

export interface OptionsCSV {
  columns?: Array<string>
}

export type OptionsParseAsCSV = ParsingOptions & PaginationOptions & OptionsCSV

/**
 * Parse given Pipeline result stream as CSV format
 */
export default async function parseAsCSV<T = any>(pipeline: Pipeline, options?: OptionsParseAsCSV): Promise<Array<T>> {
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
      step(row: any, parser: any) {
        if (offset + items === index) {
          parser.abort()
          stream.destroy()
          return
        }
        if (index >= offset) {
          content.push(row.data)
        }
        index += 1
      },
      complete() {
        resolve(content)
      },
    })
  })
    .then((data) => {
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
    })
}
