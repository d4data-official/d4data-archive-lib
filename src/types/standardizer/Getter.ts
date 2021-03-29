import Standardizer from '../../classes/Standardizer/Standardizer'
import { GetterOptions } from './Standardizer'
import GetterReturn from './GetterReturn'

type Getter<T> = (this: Standardizer, options?: GetterOptions) => GetterReturn<T>

export default Getter
