import { initalizeDatabase } from './database'
import Server from './server'

initalizeDatabase().then(() => {
  const server = new Server()
  const app = server.setup()

  const port = process.env.API_PORT || 8080
  app.listen(port)
  console.log('Server running at :' + port)
})
