import { Router } from 'express'

const router = new Router()

router.get('/', async (_req, res) => res.json({ message: 'Hello Trip Cost API'}))

export default router
