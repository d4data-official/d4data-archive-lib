export interface Address {
  languageCode?: string | undefined
  city?: string | undefined
  country?: string | undefined
  line1?: string | undefined
  line2?: string | undefined
  state?: string | undefined
  streetAddress?: string | undefined
  zip?: string | undefined
}

export interface History {
  datetime: Date
  title: string
  url: string
  faviconUrl?: string | undefined
  clientId?: string | undefined
}

export interface Extension {
  name: string
  enabled?: boolean | undefined
  incognitoEnabled?: boolean | undefined
  version?: string | undefined
  websiteUrl?: string | undefined
}

export interface SavedForm {
  useCount?: number | undefined
  lastUseDate?: number | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  fullName?: string | undefined
  phoneNumber?: string | undefined
  email?: string | undefined
  companyName?: string | undefined
  address?: Address | undefined
}

export interface Preference {
  name: string
  value: unknown
}

export interface Theme {
  name: string
  websiteUrl?: string | undefined
}

export default interface BrowserData {
  history: Array<History>
  extensions: Array<Extension>
  savedForms: Array<SavedForm>
  preferences: Array<Preference>
  theme: Theme
}
