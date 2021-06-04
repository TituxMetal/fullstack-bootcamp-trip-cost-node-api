import { shutdownServer } from '#root/helpers'

import createApp from './app'

const server = createApp()

shutdownServer(server)
