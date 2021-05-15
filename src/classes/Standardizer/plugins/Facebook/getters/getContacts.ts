import Facebook from '../Facebook'
import { Contact } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

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

Facebook.prototype.getContacts = withAutoParser(async parser => {
  const contactList = await parser.parseAsJSON<Contacts>(ADDRESS_BOOK_FILE)

  return contactList.address_book.address_book.map((contact): Contact => ({
    displayName: contact.name,
    date: new Date(contact.created_timestamp * 1000),
  }))
})
