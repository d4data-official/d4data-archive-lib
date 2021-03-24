export interface Address {
  languageCode?: string
  city?: string
  country?: string
  line1?: string
  line2?: string
  state?: string
  streetAddress?: string
  zip?: string
}

export interface History {
  timestamp: number
  title: string
  url: string
  faviconUrl?: string
  clientId?: string
}

export interface Extension {
  name: string
  enabled?: boolean
  incognitoEnabled?: boolean
  version?: string
  websiteUrl?: string
}

export interface SavedForm {
  useCount?: number
  lastUseDate?: number
  firstName?: string
  lastName?: string
  fullName?: string
  phoneNumber?: string
  email?: string
  companyName?: string
  address?: Address
}

export interface Preference {
  name: string
  value: unknown
}

export interface Theme {
  name: string
  websiteUrl?: string
}

export default interface BrowserData {
  history: Array<History>
  extensions: Array<Extension>
  savedForms: Array<SavedForm>
  preferences: Array<Preference>
  theme: Theme
}
