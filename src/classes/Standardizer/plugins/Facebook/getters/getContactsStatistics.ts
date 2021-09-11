import Facebook from '../Facebook'
import { StatisticType } from '../../../../../types/schemas/Statistic'

// 3 noms et le nombre d'occurence

function getFirstName(fullName : string)
{
  return fullName.split(' ')[0]
}

Facebook.prototype.getContactsStatistics = async function getContactsStatistics() {

    const contactsData = await this.getContacts({
      parsingOptions: {
        pagination: {
          offset: 0,
          items: Infinity,
        },
      },
    })
  
    if (!contactsData)
      return null

    var contactMap = new Map()
    contactsData.data.forEach((entry) => {
        const firstName : string = entry.displayName === undefined ? "" : getFirstName(entry.displayName);
        if(contactMap.has(firstName))
            contactMap.set(firstName, contactMap.get(firstName) +1);
        else
            contactMap.set(firstName, 1);
    })

    const contactMapSorted = new Map([...contactMap.entries()].sort((a, b) => b[1] - a[1]));

    let keys = Array.from(contactMapSorted.keys()).slice(0, 3);
    let values = Array.from(contactMapSorted.values()).slice(0, 3);
    const mapContactsLimited = keys.map((el, i) => ({ firstName: el, value: values[i] }));

    return {
      statistics: [
        {
          type: StatisticType.RANKING,
          value: mapContactsLimited,
          name: 'Contacts with the same first name.',
        },
      ],
      parsedFiles: contactsData?.parsedFiles ?? [],
    }
}
