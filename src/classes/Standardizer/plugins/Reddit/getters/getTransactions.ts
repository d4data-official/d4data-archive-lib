import { Transaction } from 'types/schemas'
import Reddit from '../Reddit'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

Reddit.prototype.getTransactions = withAutoParser(async parser => {
  const { data: transactionsRawData } = await parser.parseAsCSV('reddit_gold_information.csv')

  return transactionsRawData.map((transaction): Transaction => ({
    currency: '$',
    value: transaction.cost,
    date: transaction.date,
    product: transaction.transaction_id,
  }))
})
