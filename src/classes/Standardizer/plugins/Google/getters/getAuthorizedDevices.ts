import Pipeline from 'classes/Pipeline';
import { AuthorizedDevice } from 'types/schemas'
import Google from '../Google';

Google.prototype.getAuthorizedDevices = async function getAuthorizedDevices(options) {
  const file = await this.parser.listFiles('Compte Google/')
  const AuthorizedDevicePostRawData = await this.parser.parseAsHTML(
    Pipeline.fromFile(file[0])).then(dom => {
      const htmlTable = dom.window.document.querySelector('tr')
      if (!htmlTable) {
        throw new Error ('no html table found')
      }
    })
  //  test.next().value[1].querySelectorAll('th').entries()
  // eslint-disable-next-line no-restricted-syntax
  //  console.log(test2.next().value[1].textContent)
  /*  const authorizedDevices = AuthorizedDevicePostRawData.map((authorizedDevice):AuthorizedDevice => ({
    name: ,
    ip: reaction.permalink,
    authorizationDate: ,
  })) */
  return {
    data: [],
    parsedFiles: ['friends.csv'],
  }
}
