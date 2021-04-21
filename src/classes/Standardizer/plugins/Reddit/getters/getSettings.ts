import Reddit from '../Reddit'
import { Setting } from '../../../../../types/schemas';

const SETTINGS_FILE = 'user_preferences.csv'

interface RedditSetting {
  preference: string,
  value: string
}

Reddit.prototype.getSettings = async function getSettings(options) {
  const settingList = await this.parser.parseAsCSV<RedditSetting>(SETTINGS_FILE, options?.parsingOptions)

  const settings: Array<Setting> = settingList.map((setting) => ({
    name: setting.preference,
    value: setting.value,
  }))

  return {
    data: settings,
    parsedFiles: [SETTINGS_FILE],
  }
}
