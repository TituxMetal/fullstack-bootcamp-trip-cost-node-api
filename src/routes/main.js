import { Router } from 'express'

const router = new Router()

router.get('/', async (_req, res) =>
  res.json({
    name: 'fullstack-bootcamp-trip-cost-node-api',
    description:
      'A simple api that calculate the cost of your trip based on expenses you make, eg.gasoline, hotels, food, tickets..',
    url: 'https://github.com/TituxMetal/fullstack-bootcamp-trip-cost-node-api'
  })
)

export default router
