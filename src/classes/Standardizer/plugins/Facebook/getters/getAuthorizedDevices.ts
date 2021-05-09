import Facebook from '../Facebook'
import { AuthorizedDevice } from '../../../../../types/schemas'

const AUTHORIZED_DEVICES_FILE = 'security_and_login_information/authorized_logins.json'

interface AuthorizedDevices {
  recognized_devices: Array<{
    name: string
    ip_address: string
    created_timestamp: number
  }>
}

Facebook.prototype.getAuthorizedDevices = async function getAuthorizedDevices(options) {
  const authorizedDevices = await this.parser
    .parseAsJSON<AuthorizedDevices>(AUTHORIZED_DEVICES_FILE, options?.parsingOptions)

  const devices : Array<AuthorizedDevice> = authorizedDevices.recognized_devices.map((device) => ({
    name: device.name,
    ip: device.ip_address,
    authorizationDate: new Date(device.created_timestamp * 1000),
  }))

  return {
    data: devices,
    parsedFiles: [AUTHORIZED_DEVICES_FILE],
  }
}
