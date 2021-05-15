/* eslint-disable no-irregular-whitespace */
import parseHtmlTable from '../../../../../modules/Parsing/html/parseHtmlTable';
import { AuthorizedDevice } from '../../../../../types/schemas';
import Google from '../Google';

Google.prototype.getAuthorizedDevices = async function getAuthorizedDevices(options) {
  const files = await this.parser.findFiles(/Device-.*\.html$/,
    'Takeout/Service de configuration de l_appareil Android')
  const bodyList = await Promise.all(files.map((file) => this.parser.parseAsHTML(file).then(
    dom => dom.window.document.body.textContent,
  )))
  const modeleList = bodyList.map(body => body?.match(/Modèle : (.*)/)?.[1]).filter(result => result)
  const timeList = bodyList.map(body => body?.match(/Date et heure d'enregistrement : (.*)/)?.[1])
    .filter(result => result)
  const authorizedDevices: Array<AuthorizedDevice> = modeleList.map((modele, index): AuthorizedDevice => (
    {
      name: modele!,
      authorizationDate: new Date(timeList[index]!),
    }
  ))
  return {
    data: authorizedDevices,
    parsedFiles: files,
  }
}
