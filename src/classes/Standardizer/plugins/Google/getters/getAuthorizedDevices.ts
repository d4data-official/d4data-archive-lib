/* eslint-disable no-irregular-whitespace */
import { AuthorizedDevice } from '../../../../../types/schemas'
import Google from '../Google'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

Google.prototype.getAuthorizedDevices = withAutoParser(async parser => {
  const files = await parser.findFiles(/Device-.*\.html$/,
    'Takeout/Service de configuration de l_appareil Android')

  const bodyList = await Promise.all(
    files.map((file) => parser.parseAsHTML(file)
      .then(({ data }) => data.window.document.body.textContent)),
  )

  const modelList = bodyList
    .map(body => body?.match(/Modèle : (.*)/)?.[1])
    .filter(result => result)

  const timeList = bodyList
    .map(body => body?.match(/Date et heure d'enregistrement : (.*)/)?.[1])
    .filter(result => result)

  const authorizedDevices: Array<AuthorizedDevice> = modelList
    .map((model, index): AuthorizedDevice => ({
      name: model!,
      authorizationDate: new Date(timeList[index]!),
    }))

  return authorizedDevices
})
