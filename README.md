# Trip Cost Calculator API

A simple api that calculate the cost of your trip based on expenses you make, eg.gasoline, hotels, food, tickets... 

This project is made with NodeJs, Express, MongoDb and uses Javascript Esnext syntax.

For Mongo database I've choosed to use an online service: https://railway.app

# Start the project for dev

First install the dependencies with `yarn install` then copy/paste .env.example file, rename it .env and change the value in it especially the DATABASE_URI variable.
You can now run the watch command: `yarn watch`

This project is not for running in production, only the local dev/watch mode is working.

# Endpoints

## Create trip (DONE)
Validation: name => string, minLength: 4

    `
    POST /api/trips
      Params: { name }
      Response: {
        data: { id, name },
        message: 'Trip created',
        status: '201 CREATED'
      }
      Error: {
        type: 'Validation Error',
        reason: 'Name must be a string value' || 'Name must be at least 4 characters long',
        status: 422
      }
    `

## Get all trips (TODO)
 
    `
    GET /api/trips
      Response: {
        data: [{ id, name }],
        count: 1,
        message: 'ok',
        status: '200 OK'
      }
    `

## Add an expense (TODO)

    `
    POST /api/expenses
      Params: { tripId, date, amount, category, description }
      Response: {
        data: { tripId, date, amount, category, description },
        message: 'Expense created',
        status: '201 CREATED'
      }
    `

## Get expenses for a given trip (TODO)

    `
    GET /api/expenses/:tripId
      Arguments: tripId Id of the trip for which we want the costs
      Response: {
        data: [{ tripId, date, amount, category, description }],
        count: 1,
        message: 'ok',
        status: '200 OK'
      }
    `

# Data Models

- Trips

      `
      {
        id: MongoObjectID,
        name: String, required
      }
      `

- Expenses

      `
      {
        id: MongoObjectID,
        tripId: MongoObjectID,
        date: Date,
        amount: Number,
        category: Enum ['travel', 'food', 'accomodation', 'fun'],
        description: String
      }
      `
