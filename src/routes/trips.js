import { Router } from 'express'

import { Trips } from '../collections'

const router = new Router()

router.get('/', async (_req, res) => {
  const response = {
    data: [],
    count: 1,
    message: 'ok',
    status: '200 OK'
  }

  res.json(response)
})

router.post('/', async (req, res) => {
  const { name } = req.body

  if (typeof name !== 'string') {
    return res.status(422).json({
      type: 'Validation Error',
      reason: 'Name must be a string value',
      status: 422
    })
  }

  if (!name || name.length < 4) {
    return res.status(422).json({
      type: 'Validation Error',
      reason: 'Name must be at least 4 characters long',
      status: 422
    })
  }

  const { insertedId } = await Trips.createTrip({ name })

  const response = {
    data: { id: insertedId },
    message: 'Trip created',
    status: '201 CREATED'
  }

  return res.status(201).json(response)
})

export default router
