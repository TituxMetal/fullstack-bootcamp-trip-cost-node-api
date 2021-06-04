import express from 'express'
import path from 'path'

import { port } from '#root/config'
import { errorHandler } from '#root/middlewares'
import { mainRoutes } from '#root/routes'

const createApp = () => {
  const app = express()
  
  app.use(express.json())
  
  app.use('/', mainRoutes)

  app.all('*', async (req, res, next) => {
    const error = `${req.path} page does not exists`

    res.status(404).json({ message: error })

    return next()
  })

  app.use(errorHandler)

  const server = app.listen(port, '0.0.0.0', () =>
    console.info(`Server is listening on http://localhost:${port}`)
  )

  return server
}

export default createApp
