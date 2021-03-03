import papa from 'papaparse'
import fs from 'fs'
import path from 'path'
import applyPreprocessors from './applyPreprocessors';
import { PaginationOptions, ParsingOptions } from '../../types/Parsing'

export interface OptionsCSV {
  columns?: Array<string>
}

/**
 * Parse CSV file from given path
 * Throw error if can't access file or if parsing fail
 */
export default async function parseAsCSV<T = any>(filePath: string,
  options?: ParsingOptions & PaginationOptions & OptionsCSV): Promise<Array<T>> {
  const stream = await applyPreprocessors(fs.createReadStream(filePath), options?.preprocessors ?? []);
  const content: Array<T> = [];
  const items = options?.pagination?.items ?? 0
  const offset = options?.pagination?.offset ?? 0
  let index = 0

  return new Promise((resolve) => {
    papa.parse(stream, {
      header: !options?.columns,
      step(row: any, parser: any) {
        if (items === 0) {
          // @ts-ignore
          content.push(row.data)
          return;
        }
        console.log(index, ' ', items, ' ', offset, ' ', items + offset)
        if (offset + items === index) {
          console.log('skip')
          parser.abort()
          return
        }
        if (index >= offset) {
          console.log('push ', `${ offset } >= ${ index }`)
          // @ts-ignore
          content.push(row.data);
        }
        index += 1
      },
      complete() {
        console.log('complete')
        resolve(content)
      },
    });
  })
    .then((data) => {
      if (!options?.columns) {
        return data
      }
      // @ts-ignore
      return data.map((item) => {
        const obj = {}
        for (let i = 0; i < (options?.columns?.length ?? 0); i += 1) {
          console.log('cc')
          const colName = options?.columns![i]
          // @ts-ignore
          obj[colName] = item[i]
        }
        return obj
      })
    }).then((e) => { console.log('end'); return e })
}
