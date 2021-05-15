import Discord from '../Discord'
import { Setting } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const SETTINGS_FILE = 'account/user.json'

Discord.prototype.getSettings = withAutoParser(async parser => {
  const settingsRaw = await parser.parseAsJSON(SETTINGS_FILE)

  return Object.keys(settingsRaw.settings).map((key) : Setting => ({
    name: key,
    value: settingsRaw.settings?.[key]?.toString(),
  }))
})
