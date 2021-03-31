import { Transaction } from 'types/schemas'
import Reddit from '../Reddit'

Reddit.prototype.getTransactions = async function getTransactions(options) {
  const transactionsRawData = await this.parser.parseAsCSV(
    'reddit_gold_information.csv',
    options?.parsingOptions,
  )
  const transactions = transactionsRawData.map((transaction):Transaction => ({
    currency: '$',
    value: transaction.cost,
    date: transaction.date,
    product: transaction.transaction_id,
  }))
  return {
    data: transactions,
    parsedFiles: ['friends.csv'],
  }
}
