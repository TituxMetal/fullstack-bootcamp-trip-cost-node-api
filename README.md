# Trip Cost Calculator API

A simple api that calculate the cost of your trip based on expenses you make, eg.gasoline, hotels, food, tickets... 

This project is made with NodeJs, Express, MongoDb and uses Javascript Esnext syntax.

For Mongo database I've choosed to use an online service: https://cloud.mongodb.com

# Start the project for dev

First install the dependencies with `yarn install` then copy/paste .env.example file, rename it .env and change the value in it especially the DATABASE_URI variable.
You can now run the watch command: `yarn watch`

This project is not for running in production, only the local dev/watch mode is working.

# Endpoints

## Create trip (DONE)

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

## Get all trips (DONE)
 
    `
    GET /api/trips
      Response: {
        data: [{ id, name }],
        count: 1,
        message: 'ok',
        status: '200 OK'
      }
    `

## Add an expense (DONE)

    `
    POST /api/expenses
      Params: { tripId, date, amount, category, description }
      Response: {
        data: { tripId, date, amount, category, description },
        message: 'Expense created',
        status: '201 CREATED'
      }
    `

## Get expenses for a given trip (DONE)

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
        name: String, required, minLength: 4
      }
      `

- Expenses

      `
      {
        id: MongoObjectID,
        tripId: MongoObjectID,
        date: String,
        amount: Number,
        category: Enum ['travel', 'food', 'accomodation', 'fun'],
        description: String
      }
      `

# Requests examples

All examples are using Curl

## Create trip

    `
      curl --request POST \
        --url http://localhost:3000/api/trips \
        --header 'Content-Type: application/json' \
        --data '{
        "name": "Sweden 2017"
      }'
    `

## Get all trips

    `
      curl --request GET \
        --url http://localhost:3000/api/trips
    `

## Add an expense

    `
      curl --request POST \
        --url http://localhost:3000/api/expenses \
        --header 'Content-Type: application/json' \
        --data '{
        "tripId": "60bc5436a42734540f34f3a2",
        "date": "2018-11-04T07:32:22",
        "amount": 50,
        "category": "food",
        "description": "Lunch on the road"
      }'
    `

## Get expenses for a given trip

    `
      curl --request GET \
        --url http://localhost:3000/api/expenses/60bc5436a42734540f34f3a2
    `
