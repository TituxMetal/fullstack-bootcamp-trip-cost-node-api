import { getCollection } from '#root/database'

const getAllTrips = async () => {
  const collection = await getCollection('trips')
  const allData = await collection.find().toArray()
  const data = allData.map(({ _id, name }) => ({ id: _id, name }))

  return data
}

const createTrip = async (data = {}) => {
  const collection = await getCollection('trips')
  const { name } = data
  const newTrip = await collection.insertOne({ name })

  return newTrip
}

export default { createTrip, getAllTrips }
