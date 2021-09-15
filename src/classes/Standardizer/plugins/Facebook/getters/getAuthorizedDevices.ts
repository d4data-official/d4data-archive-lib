import Facebook from '../Facebook'
import { AuthorizedDevice } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const AUTHORIZED_DEVICES_FILE = 'security_and_login_information/authorized_logins.json'

interface AuthorizedDevices {
  recognized_devices: Array<{
    name: string
    ip_address: string
    created_timestamp: number
  }>
}

Facebook.prototype.getAuthorizedDevices = withAutoParser(async parser => {
  const { data: authorizedDevices } = await parser
    .parseAsJSON<AuthorizedDevices>(AUTHORIZED_DEVICES_FILE)

  return authorizedDevices.recognized_devices.map((device): AuthorizedDevice => ({
    name: device.name,
    ip: device.ip_address,
    authorizationDate: new Date(device.created_timestamp * 1000),
  }))
})
