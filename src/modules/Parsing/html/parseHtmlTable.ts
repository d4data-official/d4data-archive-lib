export type TableRowTuple = Array<string | null>
export type TableRowObject = Record<string, string | null>
export type Table = {
  headers: TableRowTuple | null,
  rows: Array<TableRowTuple> | Array<TableRowObject>
}

/**
 * Transform HTML Table Row Element in row tuple (string array)
 */
function getRowContent(htmlTableRowElement: HTMLTableRowElement): TableRowTuple {
  const cellsContent: Array<string | null> = []

  for (let i = 0; i < htmlTableRowElement.cells.length; i += 1) {
    cellsContent.push(htmlTableRowElement.cells[i].textContent)
  }

  return cellsContent
}

/**
 * Return table header as row tuple (string array) if found else null
 */
function getTableHeaders(htmlTableElement: HTMLTableElement): TableRowTuple | null {
  // @ts-ignore
  const firstRow: HTMLTableRowElement | null = htmlTableElement.firstChild?.firstChild ?? null
  if (firstRow?.firstChild?.nodeName.toLowerCase() !== 'th') {
    return null
  }
  return getRowContent(firstRow)
}

/**
 * Transform a HTML Table Element into an array of objects/tuples.
 * If table header is present rows will be transformed to object else to tuple.
 */
export default function parseHtmlTable(htmlTableElement: HTMLTableElement): Table {
  if (htmlTableElement.nodeName.toLowerCase() !== 'table') {
    throw new Error('Given html element is not an HTMLTableElement')
  }

  const headers = getTableHeaders(htmlTableElement)
  const { rows: htmlRows } = htmlTableElement
  const rows: Array<TableRowTuple> = []

  for (let i = 0; i < htmlRows.length; i += 1) {
    rows.push(getRowContent(htmlRows[i]))
  }

  if (!headers) {
    return { headers: null, rows }
  }

  // If table headers are present, remove header row and transform row tuple list to row object list
  const rowObjectList = rows
    .slice(1)
    .map(row => {
      const rowObject: TableRowObject = {}

      headers.forEach((header, idx) => {
        rowObject[header ?? (idx + 1)] = row[idx]
      })

      return rowObject
    }) as Array<TableRowObject>

  return { headers, rows: rowObjectList }
}
