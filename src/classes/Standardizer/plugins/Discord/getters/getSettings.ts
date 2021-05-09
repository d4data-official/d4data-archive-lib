import Discord from '../Discord'
import { Setting } from '../../../../../types/schemas'

const SETTINGS_FILE = 'account/user.json'

Discord.prototype.getSettings = async function getSettings(options) {
  const settingsRaw = await this.parser.parseAsJSON(SETTINGS_FILE, options?.parsingOptions)

  const settings : Array<Setting> = Object.keys(settingsRaw.settings).map((key) : Setting => ({
    name: key,
    value: settingsRaw.settings?.[key]?.toString(),
  }));

  return {
    data: settings,
    parsedFiles: [SETTINGS_FILE],
  }
}
