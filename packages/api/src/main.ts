import { initalizeDatabase } from './database'
import { initializeRootUser } from './modules/auth/initialization'
import Server from './server'

initalizeDatabase().then(() => {
  const server = new Server()
  const app = server.setup()
  initializeRootUser()

  const port = process.env.API_PORT || 8080
  app.listen(port)
  console.log('Server running at :' + port)
})
