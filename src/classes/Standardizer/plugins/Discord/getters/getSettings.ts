import Discord from '../Discord'
import { Setting } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const SETTINGS_FILE = 'account/user.json'

Discord.prototype.getSettings = withAutoParser(async parser => {
  const rawSettings = await parser.parseAsJSON(SETTINGS_FILE)

  const settings = Object.keys(rawSettings.settings).map((key): Setting => ({
    name: key,
    value: rawSettings.settings?.[key]?.toString(),
  }))

  return { data: settings }
})
