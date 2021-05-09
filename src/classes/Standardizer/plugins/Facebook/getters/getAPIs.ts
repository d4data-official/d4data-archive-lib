import Facebook from '../Facebook'
import { API } from '../../../../../types/schemas'

const APIS_FILE = 'apps_and_websites/apps_and_websites.json'

interface APIS {
  installed_apps: Array<{
    name: string
    added_timestamp: number
  }>
}

Facebook.prototype.getAPIs = async function getAPIs(options) {
  const APIs = await this.parser.parseAsJSON<APIS>(APIS_FILE, options?.parsingOptions)

  const apis : Array<API> = APIs.installed_apps.map((thisApi) => ({
    name: thisApi.name,
    linkingDate: new Date(thisApi.added_timestamp * 1000),
  }))

  return {
    data: apis,
    parsedFiles: [APIS_FILE],
  }
}
