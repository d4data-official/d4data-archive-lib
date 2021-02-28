export type Preprocessor = (fileContent: string) => Promise<string>

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

export interface ParsingOptions {
  // List of pre-processing functions applied to the file content before type parsing
  preprocessors?: Array<Preprocessor>
}
