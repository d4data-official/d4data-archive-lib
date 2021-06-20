import Facebook from '../Facebook'
import { API } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const APIS_FILE = 'apps_and_websites/apps_and_websites.json'

interface APIS {
  installed_apps: Array<{
    name: string
    added_timestamp: number
  }>
}

Facebook.prototype.getAPIs = withAutoParser(async parser => {
  const rawAPIs = await parser.parseAsJSON<APIS>(APIS_FILE)

  const APIs = rawAPIs.installed_apps.map((thisApi): API => ({
    name: thisApi.name,
    linkingDate: new Date(thisApi.added_timestamp * 1000),
  }))

  return { data: APIs }
})
