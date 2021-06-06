import { getCollection } from '#root/database'

const getExpensesByTripId = async tripId => {
  const collection = await getCollection('expenses')
  const allData = await collection.find({ tripId }).toArray()
  const data = allData.map(({ _id, ...rest }) => ({ id: _id, ...rest }))

  return data
}

const createExpense = async (data = {}) => {
  const collection = await getCollection('expenses')
  const { tripId, date, amount, category, description } = data
  const newTrip = await collection.insertOne({
    tripId,
    date,
    amount,
    category,
    description
  })

  return newTrip
}

export default { createExpense, getExpensesByTripId }
