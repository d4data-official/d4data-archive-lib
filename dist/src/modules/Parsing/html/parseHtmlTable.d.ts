export declare type TableRowTuple = Array<string | null>;
export declare type TableRowObject = Record<string, string | null>;
export declare type Table = {
    headers: TableRowTuple | null;
    rows: Array<TableRowTuple> | Array<TableRowObject>;
};
/**
 * Transform a HTML Table Element into an array of objects/tuples.
 * If table header is present rows will be transformed to object else to tuple.
 */
export default function parseHtmlTable(htmlTableElement: HTMLTableElement): Table;
