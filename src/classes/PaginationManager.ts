import Pagination from '../types/Pagination'
import { ParsingPaginationInfo } from '../types/Parsing'

// Utility class to keep pagination state across many process (like multi file parsing)
export default class PaginationManager {
  // Items count to skip in process
  public readonly offset: number

  // Items limit to process
  public readonly limit: number

  // Count of items already processed
  public processedItems: number = 0

  // Count of items skipped in process
  public skippedItems: number = 0

  // Items count that can be processed
  public total: number = 0

  constructor(pagination: Pagination) {
    this.offset = pagination.offset
    this.limit = pagination.items
  }

  get remainingItems() {
    return this.limit - this.processedItems
  }

  get nextPagination(): Pagination {
    return {
      offset: this.offset - this.skippedItems,
      items: this.limit - this.processedItems,
    }
  }

  get paginationResult(): ParsingPaginationInfo {
    return {
      offset: this.offset,
      items: this.processedItems,
      total: this.total,
    }
  }

  pushPagination({ offset, items, total }: ParsingPaginationInfo) {
    this.processedItems += items
    this.skippedItems += offset > total ? total : offset
    this.total += total
  }
}
