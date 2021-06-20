import Standardizer from '../../classes/Standardizer/Standardizer'
import { GetterOptions } from '../../types/standardizer/Standardizer'
import GetterReturn, { GetterData } from '../../types/standardizer/GetterReturn'
import Parser from '../../classes/Parser'

export type GetterDataWithAutoParser<T> = Omit<NonNullable<GetterData<T>>, 'parsedFiles'> | null

export type AutoParserGetter<T, TT extends unknown[]> = (
  this: Standardizer,
  ...args: [...TT, GetterOptions]
) => GetterReturn<T>

export type WrappedGetter<T, TT extends unknown[]> = (
  this: Standardizer,
  parser: Parser,
  ...args: [...TT, GetterOptions]
) => Promise<GetterDataWithAutoParser<T>>

export default function withAutoParser<T, TT extends unknown[]>(
  externalGetter: WrappedGetter<T, TT>,
): AutoParserGetter<T, TT> {
  return async function autoParser(this, ...args): GetterReturn<T> {
    const options: GetterOptions = args[args.length - 1] as GetterOptions
    const parser = this.newParser(options?.parsingOptions)

    try {
      const getterData = await externalGetter.call(this, parser, ...args)

      // Intercept empty array or null return from getter
      if (getterData === null || (Array.isArray(getterData.data) && getterData.data.length === 0)) {
        return null
      }

      return {
        data: getterData.data,
        statistics: getterData.statistics,
        parsedFiles: parser.parsedFiles,
      }
    } catch (e) {
      console.error(e)
      return null
    }
  }
}
