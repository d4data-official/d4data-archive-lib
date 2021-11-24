import { PipelineStep } from '../classes/Pipeline'
import Pagination from './Pagination'

export type Preprocessor = PipelineStep

export interface FilterOptions {
  extensionWhitelist?: Array<string>
  extensionBlacklist?: Array<string>
}

export interface PaginationOptions {
  pagination?: Pagination
}

export interface PreprocessorOptions {
  preprocessors?: Array<Preprocessor>
}

export interface ParsingOptions {
}

export type FullParsingOptions = ParsingOptions & PreprocessorOptions & PaginationOptions

export interface ParsingPaginationInfo {
  // Items count to skip in process
  offset: number
  // Items limit to process
  items: number
  // Items count that can be processed
  total: number
}

export interface ParsingReturn<T> {
  pagination: ParsingPaginationInfo | null
  data: T
}
