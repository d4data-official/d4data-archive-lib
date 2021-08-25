import { PipelineStep } from '../classes/Pipeline'

export type Preprocessor = PipelineStep

export interface FilterOptions {
  extensionWhitelist?: Array<string>
  extensionBlacklist?: Array<string>
}

export interface PaginationOptions {
  pagination?: {
    offset: number
    items: number
  }
}

export interface PreprocessorOptions {
  preprocessors?: Array<Preprocessor>
}

export interface ParsingOptions {
}

export type FullParsingOptions = ParsingOptions & PreprocessorOptions & PaginationOptions

export interface ParsingPaginationInfo {
  offset: number
  items: number
  total: number
}

export interface ParsingReturn<T> {
  pagination: ParsingPaginationInfo
  data: T
}
