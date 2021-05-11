import Standardizer from '../../classes/Standardizer/Standardizer'
import { GetterOptions } from '../../types/standardizer/Standardizer'
import GetterReturn from '../../types/standardizer/GetterReturn'
import Parser from '../../classes/Parser'

export type AutoParserGetter<T, TT extends unknown[]> = (
  this: Standardizer, ...args: [...TT, GetterOptions]) => GetterReturn<T>

export type WrappedGetter<T, TT> = (
  this: Standardizer, parser: Parser, options?: GetterOptions, ...args: Array<TT>) => Promise<T>

export default function withAutoParser<T, TT extends unknown[]>(
  externalGetter: WrappedGetter<T, TT>,
): AutoParserGetter<T, TT> {
  return async function autoParser(this, ...args): GetterReturn<T> {
    const options: GetterOptions = args[args.length - 1] as GetterOptions
    const slicedArgs = args.slice(0, -1) as unknown as TT[]
    const parser = this.newParser(options?.parsingOptions)
    const boundGetter = externalGetter.bind(this)

    return {
      data: await boundGetter(parser, options, ...slicedArgs),
      parsedFiles: parser.parsedFiles,
    }
  }
}
