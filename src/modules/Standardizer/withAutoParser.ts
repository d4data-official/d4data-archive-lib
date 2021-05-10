import Getter from '../../types/standardizer/Getter'
import Standardizer from '../../classes/Standardizer/Standardizer'
import { GetterOptions } from '../../types/standardizer/Standardizer'
import GetterReturn from '../../types/standardizer/GetterReturn'
import Parser from '../../classes/Parser'

export type WrappedGetter<T> = (this: Standardizer, parser: Parser, options?: GetterOptions) => Promise<T>

function withAutoParser<T>(options: GetterOptions, externalGetter: WrappedGetter<T>): Getter<T>;
function withAutoParser<T>(externalGetter: WrappedGetter<T>): Getter<T>;
function withAutoParser<T>(
  optionsOrExternalGetter: GetterOptions | WrappedGetter<T>,
  externalGetter?: WrappedGetter<T>,
): Getter<T> {
  return async function autoParser(this: Standardizer, options?: GetterOptions): GetterReturn<T> {
    let effectiveOptions: GetterOptions | undefined;
    let effectiveExternalGetter: WrappedGetter<T>;
    if (externalGetter instanceof Function) {
      effectiveOptions = optionsOrExternalGetter as GetterOptions;
      effectiveExternalGetter = externalGetter
    } else {
      effectiveOptions = options;
      effectiveExternalGetter = optionsOrExternalGetter as WrappedGetter<T>;
    }
    const parser = this.newParser(effectiveOptions?.parsingOptions)
    const boundGetter = effectiveExternalGetter.bind(this)

    return {
      data: await boundGetter(parser, options),
      parsedFiles: parser.parsedFiles,
    }
  }
}

export default withAutoParser
