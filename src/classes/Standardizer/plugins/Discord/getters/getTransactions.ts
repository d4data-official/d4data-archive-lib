import Discord from '../Discord'
import { Transaction } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const TRANSACTIONS_FILE = 'account/user.json'

interface DiscordTransaction {
  created_at: string,
  currency: string,
  description?: string,
  amount: number,
  id: string,
  payment_source?: {
    billing_address?: {
      city?: string,
      country?: string,
      line_1?: string,
      line_2?: string,
      name?: string,
      postal_code?: string,
      state?: string,
    },
    brand?: string,
    country?: string,
  },
  status: number,
}

Discord.prototype.getTransactions = withAutoParser(async parser => {
  const rawTransactions = await parser.parseAsJSON(TRANSACTIONS_FILE)

  const transactions = rawTransactions.payments.map((tr: DiscordTransaction): Transaction => ({
    date: new Date(tr.created_at),
    product: tr.description ?? 'Unknown product',
    currency: tr.currency,
    value: tr.amount / 100,
    status: tr.status === 1 ? 'completed' : 'unknown',
    paymentMethod: tr.payment_source?.brand,
    description: tr.description,
  }))

  return { data: transactions }
})
