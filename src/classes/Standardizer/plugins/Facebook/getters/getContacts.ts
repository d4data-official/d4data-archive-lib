import Facebook from '../Facebook'
import { Contact } from '../../../../../types/schemas'

const ADDRESS_BOOK_FILE = 'about_you/your_address_books.json'

interface Contacts {
  address_book: {
    address_book: Array<{
      name: string,
      details: any,
      created_timestamp: number,
      updated_timestamp: number
    }>
  }
}

Facebook.prototype.getContacts = async function getContacts(options) {
  const contactList = await this.parser.parseAsJSON<Contacts>(ADDRESS_BOOK_FILE, options?.parsingOptions)

  const contacts : Array<Contact> = contactList.address_book.address_book.map((contact) => ({
    displayName: contact.name,
    Date: new Date(contact.created_timestamp * 1000),
  }))

  return {
    data: contacts,
    parsedFiles: [ADDRESS_BOOK_FILE],
  }
}
