import { Transaction } from 'types/schemas'
import Reddit from '../Reddit'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

Reddit.prototype.getTransactions = withAutoParser(async parser => {
  const rawTransactions = await parser.parseAsCSV('reddit_gold_information.csv')
  const transactions = rawTransactions.map((transaction): Transaction => ({
    currency: '$',
    value: transaction.cost,
    date: transaction.date,
    product: transaction.transaction_id,
  }))

  return { data: transactions }
})
