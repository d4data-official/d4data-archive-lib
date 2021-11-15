export default interface Setting {
  // Key/internal name of setting
  key: string

  // Value of setting
  value?: string | undefined

  // User friendly name of setting
  friendlyName?: string | undefined

  // Description of what the setting is to help the user
  description?: string | undefined
}
