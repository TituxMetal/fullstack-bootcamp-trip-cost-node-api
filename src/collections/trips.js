import { getCollection } from '#root/database'

const getAllTrips = async () => {
  const collection = await getCollection('trips')
  const allData = await collection.find().toArray()

  return allData
}

const createTrip = async (data = {}) => {
  const collection = await getCollection('trips')
  const { name } = data
  const newTrip = await collection.insertOne({ name })

  return newTrip
}

export default { createTrip, getAllTrips }
