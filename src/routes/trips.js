import { Router } from 'express'

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
  const response = {
    data: { id: '', name },
    message: 'Trip created',
    status: '201 CREATED'
  }

  res.status(201).json(response)
})

export default router
