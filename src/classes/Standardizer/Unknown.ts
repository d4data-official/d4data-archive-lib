import Standardizer from './Standardizer'
import SERVICES from '../../types/SERVICES'

export default class Unknown extends Standardizer {
  get service(): SERVICES {
    return SERVICES.UNKNOWN
  }
}
