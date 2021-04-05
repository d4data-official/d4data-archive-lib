import Google from '../Google';
import { History, Extension, SavedForm, Theme, Preference } from '../../../../../types/schemas/BrowserData';
import { BrowserData } from '../../../../../types/schemas';

function getStoreUrl(id: string) {
  return id ? `https://chrome.google.com/webstore/detail/TEXT/${ id }` : undefined;
}

const files = {
  autofill: 'Takeout/Chrome/Autofill.json',
  history: 'Takeout/Chrome/BrowserHistory.json',
  dictionary: 'Takeout/Chrome/Dictionary.csv',
  extensions: 'Takeout/Chrome/Extensions.json',
  searchEngines: 'Takeout/Chrome/SearchEngines.json',
  syncSettings: 'Takeout/Chrome/SyncSettings.json',
}

interface GoogleSavedForm {
  use_count: any; use_date: any; name_first: any[]; name_last: any[]; name_full: any[];
  phone_home_whole_number: any[]; email_address: any[]; company_name: any; address_home_language_code: any;
  address_home_city: any; address_home_country: any; address_home_line1: any; address_home_line2: any;
  address_home_state: any; address_home_street_address: any; address_home_zip: any;
}

interface GoogleHistoryEntry {
  time_usec: number; title: any; url: any; favicon_url: any; client_id: any;
}

interface GoogleExtension {
  name: any; enabled: any; incognito_enabled: any; version: any; id: string;
}

Google.prototype.getBrowserData = async function getBrowserData(options) {
  if (!(await this.parser.filesExist(Object.values(files)))) {
    return null
  }
  const autoFill = await this.parser.parseAsJSON(files.autofill, options?.parsingOptions)
  const history = await this.parser.parseAsJSON(files.history, options?.parsingOptions)
  const dictionary = await this.parser.parseAsCSV(files.dictionary, options?.parsingOptions)
  const extensions = await this.parser.parseAsJSON(files.extensions, options?.parsingOptions)
  const searchEngines = await this.parser.parseAsJSON(files.searchEngines, options?.parsingOptions)
  const syncSettings = await this.parser.parseAsJSON(files.syncSettings, options?.parsingOptions)

  const rawBrowserData = {
    autoFill: autoFill?.['Autofill Profile'],
    history: history?.['Browser History'],
    dictionary,
    extensions,
    searchEngines,
    syncSettings,
  };

  const browserData : BrowserData = {
    history: rawBrowserData.history?.map(
      (historyEntry: GoogleHistoryEntry) => ({
        timestamp: historyEntry.time_usec as number / 1000000,
        title: historyEntry.title,
        url: historyEntry.url,
        faviconUrl: historyEntry.favicon_url,
        clientId: historyEntry.client_id,
      } as History),
    ),
    extensions: rawBrowserData.extensions?.Extensions?.map(
      (extension: GoogleExtension) => ({
        name: extension.name,
        enabled: extension.enabled,
        incognitoEnabled: extension.incognito_enabled,
        version: extension.version,
        websiteUrl: getStoreUrl(extension.id),
      } as Extension),
    ),
    savedForms: rawBrowserData.autoFill?.map((savedForm: GoogleSavedForm) => ({
      useCount: savedForm.use_count,
      lastUseDate: savedForm.use_date,
      firstName: savedForm.name_first[0],
      lastName: savedForm.name_last[0],
      fullName: savedForm.name_full[0],
      phoneNumber: savedForm.phone_home_whole_number[0],
      email: savedForm.email_address[0],
      companyName: savedForm.company_name,
      address: {
        languageCode: savedForm.address_home_language_code,
        city: savedForm.address_home_city,
        country: savedForm.address_home_country,
        line1: savedForm.address_home_line1,
        line2: savedForm.address_home_line2,
        state: savedForm.address_home_state,
        streetAddress: savedForm.address_home_street_address,
        zip: savedForm.address_home_zip,
      },
    } as SavedForm)),
    preferences: rawBrowserData.syncSettings?.Preferences as Array<Preference>,
    theme: {
      name: rawBrowserData.syncSettings?.Themes[0]?.custom_theme_name,
      websiteUrl: getStoreUrl(rawBrowserData.syncSettings?.Themes[0]?.custom_theme_id),
    } as Theme,
  };

  return {
    data: browserData,
    parsedFiles: Object.values(files),
  }
}
