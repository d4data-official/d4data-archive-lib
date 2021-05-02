"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Transform HTML Table Row Element in row tuple (string array)
 */
function getRowContent(htmlTableRowElement) {
    const cellsContent = [];
    for (let i = 0; i < htmlTableRowElement.cells.length; i += 1) {
        cellsContent.push(htmlTableRowElement.cells[i].textContent);
    }
    return cellsContent;
}
/**
 * Return table header as row tuple (string array) if found else null
 */
function getTableHeaders(htmlTableElement) {
    var _a, _b, _c;
    // @ts-ignore
    const firstRow = (_b = (_a = htmlTableElement.firstChild) === null || _a === void 0 ? void 0 : _a.firstChild) !== null && _b !== void 0 ? _b : null;
    if (((_c = firstRow === null || firstRow === void 0 ? void 0 : firstRow.firstChild) === null || _c === void 0 ? void 0 : _c.nodeName.toLowerCase()) !== 'th') {
        return null;
    }
    return getRowContent(firstRow);
}
/**
 * Transform a HTML Table Element into an array of objects/tuples.
 * If table header is present rows will be transformed to object else to tuple.
 */
function parseHtmlTable(htmlTableElement) {
    if (htmlTableElement.nodeName.toLowerCase() !== 'table') {
        throw new Error('Given html element is not an HTMLTableElement');
    }
    const headers = getTableHeaders(htmlTableElement);
    const { rows: htmlRows } = htmlTableElement;
    const rows = [];
    for (let i = 0; i < htmlRows.length; i += 1) {
        rows.push(getRowContent(htmlRows[i]));
    }
    if (!headers) {
        return { headers: null, rows };
    }
    // If table headers are present, remove header row and transform row tuple list to row object list
    const rowObjectList = rows
        .slice(1)
        .map(row => {
        const rowObject = {};
        headers.forEach((header, idx) => {
            rowObject[header !== null && header !== void 0 ? header : (idx + 1)] = row[idx];
        });
        return rowObject;
    });
    return { headers, rows: rowObjectList };
}
exports.default = parseHtmlTable;
