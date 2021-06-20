/* eslint-disable no-irregular-whitespace */
import { AuthorizedDevice } from '../../../../../types/schemas'
import Google from '../Google'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

Google.prototype.getAuthorizedDevices = withAutoParser(async parser => {
  const files = await parser.findFiles(/Device-.*\.html$/,
    'Takeout/Service de configuration de l_appareil Android')
  const bodyList = await Promise.all(files.map((file) => parser.parseAsHTML(file).then(
    dom => dom.window.document.body.textContent,
  )))
  const modeleList = bodyList.map(body => body?.match(/Modèle : (.*)/)?.[1]).filter(result => result)
  const timeList = bodyList.map(body => body?.match(/Date et heure d'enregistrement : (.*)/)?.[1])
    .filter(result => result)
  const authorizedDevices: Array<AuthorizedDevice> = modeleList
    .map((modele, index): AuthorizedDevice => ({
      name: modele!,
      authorizationDate: new Date(timeList[index]!),
    }))

  return { data: authorizedDevices }
})
