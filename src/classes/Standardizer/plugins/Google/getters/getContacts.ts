import Google from '../Google'
import { Contact, ProfilePicture, Media } from '../../../../../types/schemas'
import { MediaType } from '../../../../../types/schemas/Media'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const CONTACT_FILE_CSV = 'Takeout/Contacts/Tous les contacts/Tous les contacts.csv'
const CONTACT_FILE_VCF = 'Takeout/Contacts/Tous les contacts/Tous les contacts.vcf'

Google.prototype.getContacts = withAutoParser(async parser => {
  if (!(await parser.filesExist([CONTACT_FILE_VCF]))) {
    const rawContacts = await parser.parseAsCSV(CONTACT_FILE_CSV)
    const contacts: any = rawContacts.map((contact: any): Contact => ({
      displayName: contact?.Name,
      firstName: contact['Given Name'],
      lastName: contact['Family Name'],
      nickname: contact?.Nickname,
      gender: contact?.Gender,
      birthday: contact?.Birthday ? new Date(contact.Birthday) : undefined,
      phoneNumbers: contact['Phone 1 - Value'],
      mails: contact['E-mail 1 - Value'],
      profilePicture: {
        current: {
          url: contact?.Photo,
          type: MediaType.IMAGE,
        } as Media,
      } as ProfilePicture,
    }))
    return contacts
  }
})
