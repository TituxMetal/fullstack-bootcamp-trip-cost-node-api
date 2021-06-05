import { MongoClient } from 'mongodb'

import { databaseUri } from '#root/config'

const connectMongo = async callback => {
  let db

  try {
    const client = await MongoClient.connect(databaseUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    db = await client.db()
    console.log('Database connected')
  } catch (err) {
    console.error('Database Error', err.message)
  }

  return callback(db)
}

export const getCollection = async collectionName =>
  connectMongo(async db => db.collection(collectionName))
