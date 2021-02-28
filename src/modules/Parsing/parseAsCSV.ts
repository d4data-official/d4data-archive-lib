import papa from 'papaparse'
import fs from 'fs'
import { PaginationOptions, ParsingOptions } from '../../types/Parsing'

/**
 * Parse CSV file from given path
 * Throw error if can't access file or file format is invalid
 */
export default async function parseAsCSV<T = unknown>(filePath: string,
  options?: ParsingOptions & PaginationOptions): Promise<Array<T>> {
  const stream = fs.createReadStream(filePath);
  const content: Array<T> = [];
  const items = options?.pagination?.items ?? 0
  const offset = options?.pagination?.offset ?? 0

  return new Promise((resolve) => {
    papa.parse(stream, {
      step(row, parser) {
        if (items === 0) {
          // @ts-ignore
          content.push(row.data)
          return;
        }
        if (offset + items === row.meta.cursor) {
          parser.abort()
          return
        }
        if (offset >= row.meta.cursor) {
          // @ts-ignore
          content.push(row.data);
        }
      },
      complete() {
        resolve(content)
      },
    });
  })
}
