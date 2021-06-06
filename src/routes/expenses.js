import { Router } from 'express'

import { Expenses } from '#root/collections'

const router = new Router()

router.get('/:tripId', async (req, res) => {
  const { tripId } = req.params
  const data = await Expenses.getExpensesByTripId(tripId)
  const count = data.length

  const response = {
    data,
    count,
    message: 'ok',
    status: '200 OK'
  }

  res.json(response)
})

router.post('/', async (req, res) => {
  const { tripId, date, amount, category, description } = req.body

  if (!tripId || !date || !amount || !category || !description) {
    return res.status(422).json({
      type: 'Validation Error',
      reason: 'One or more fields are missing',
      status: 422
    })
  }

  const categories = ['travel', 'food', 'accomodation', 'fun']

  if (!categories.includes(category)) {
    return res.status(422).json({
      type: 'Validation Error',
      reason: 'Category must be one of travel, food, accomodation, fun',
      status: 422
    })
  }

  const { insertedId } = await Expenses.createExpense({
    tripId,
    date,
    amount,
    category,
    description
  })

  const response = {
    data: { id: insertedId },
    message: 'Expense created',
    status: '201 CREATED'
  }

  return res.status(201).json(response)
})

export default router
