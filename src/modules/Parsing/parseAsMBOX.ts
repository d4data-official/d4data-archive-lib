import mboxParser, { ParsedMail } from 'mbox-parser'
import { PaginationOptions, ParsingOptions, ParsingReturn } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'
import { Mail } from '../../types/schemas'

export type OptionsParseAsMBOX = ParsingOptions & PaginationOptions

/**
 * Parse given Pipeline result stream as MBOX format
 */
export default async function parseAsMBOX(pipeline: Pipeline, options?: OptionsParseAsMBOX): Promise<ParsingReturn<Array<Mail>>> {
  const mboxFile = await mboxParser(pipeline.run(), {
    pageSize: options?.pagination?.items ?? 50,
    pageNumber: 1, // tmp
  })

  const data = mboxFile.map((mail: ParsedMail) => {
    const toAddresses = Array.isArray(mail.to)
      ? mail.to.map(t => t?.text)
      : [mail.to?.text ?? 'Unknown']
    return ({
      from: mail.from?.text ?? 'Unknown',
      to: toAddresses ?? ['Unknown'],
      date: mail.date,
      subject: mail.subject,
      content: mail.html || mail.textAsHtml || mail.text,
      attachments: [], // tmp
    })
  })
  return {
    data,
    pagination: {
      total: 0,
      offset: options?.pagination?.offset ?? 0,
      items: data.length,
    },
  }
}
