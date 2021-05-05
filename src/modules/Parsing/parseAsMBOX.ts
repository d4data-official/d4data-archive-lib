import mboxParser, { ParsedMail } from 'mbox-parser'
import { AddressObject, EmailAddress } from 'mailparser'
import { PaginationOptions, ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'
import { Mail } from '../../types/schemas'

export type OptionsParseAsMBOX = ParsingOptions & PaginationOptions

/**
 * Parse given Pipeline result stream as MBOX format
 */
export default async function parseAsMBOX(pipeline: Pipeline, options?: OptionsParseAsMBOX): Promise<Array<any>> {
  return mboxParser(pipeline.run(), {
    pageSize: options?.pagination?.items ?? 50,
    pageNumber: 1, // tmp
  }).then((mails: Array<ParsedMail>) => {
    const address: Array<string> = []
    for (let x: number = 0; x < mails.length; x += 1) {
      const tmp: ParsedMail = mails[x]
      if (tmp.to) {
        if (Array.isArray(tmp.to)) {
          for (let y: number = 0; y < tmp.to.length; y += 1) {
            const tmpTo: AddressObject = tmp.to[y]
            for (let z: number = 0; z < tmpTo.value.length; z += 1) {
              const tmpAddress = tmpTo.value[z].address
              if (tmpAddress !== undefined) {
                address.push(tmpAddress)
              }
            }
          }
        } else {
          for (let z: number = 0; z < tmp.to.value.length; z += 1) {
            const tmpAddress = tmp.to.value[z].address
            if (tmpAddress !== undefined) {
              address.push(tmpAddress)
            }
          }
        }
      }
    }
    const formatedMails: Array<Mail> = mails.map((mail: ParsedMail) => ({
      from: mail.from?.value[0].address ?? '',
      to: address,
      date: mail.date,
      subject: mail.subject,
      content: mail.text,
      attachments: [], // tmp
    }));
    return formatedMails
  });
}
