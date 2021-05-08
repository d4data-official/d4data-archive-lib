import Getter from '../../types/standardizer/Getter'
import Standardizer from '../../classes/Standardizer/Standardizer'
import { GetterOptions } from '../../types/standardizer/Standardizer'
import GetterReturn from '../../types/standardizer/GetterReturn'
import Parser from '../../classes/Parser'

export type WrappedGetter<T> = (this: Standardizer, parser: Parser, options?: GetterOptions) => Promise<T>

export default function withAutoParser<T>(externalGetter: WrappedGetter<T>): Getter<T> {
  return async function (this: Standardizer, options?: GetterOptions): GetterReturn<T> {
    const parser = this.newParser(options?.parsingOptions)
    const boundGetter = externalGetter.bind(this)

    return {
      data: await boundGetter(parser, options),
      parsedFiles: parser.parsedFiles,
    }
  }
}
