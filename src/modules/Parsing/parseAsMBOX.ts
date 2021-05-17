import mboxParser, { ParsedMail } from 'mbox-parser'
import { PaginationOptions, ParsingOptions } from '../../types/Parsing'
import Pipeline from '../../classes/Pipeline'
import { Mail } from '../../types/schemas'

export type OptionsParseAsMBOX = ParsingOptions & PaginationOptions

/**
 * Parse given Pipeline result stream as MBOX format
 */
export default async function parseAsMBOX(pipeline: Pipeline, options?: OptionsParseAsMBOX): Promise<Array<any>> {
  const mboxFile = await mboxParser(pipeline.run(), {
    pageSize: options?.pagination?.items ?? 50,
    pageNumber: 1, // tmp
  })

  return mboxFile.map((mail: ParsedMail) => {
    const toAddresses = Array.isArray(mail.to)
      ? mail.to.map(t => t?.text)
      : [mail.to?.text ?? 'Unknown']
    return ({
      from: mail.from?.value[0].address ?? '',
      to: toAddresses ?? ['Unknown'],
      date: mail.date,
      subject: mail.subject,
      content: mail.html ?? mail.textAsHtml ?? mail.text ?? 'Empty mail',
      attachments: [], // tmp
    })
  })
}
