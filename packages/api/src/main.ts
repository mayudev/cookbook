import express from 'express'
import RecipesController from './controller/recipes'
import { initalizeDatabase } from './database'

const app = express()

class Server {
  private configureRoutes() {
    app.use('/api/recipes', new RecipesController().router)
  }

  async run() {
    await initalizeDatabase()
    this.configureRoutes()

    const port = process.env.API_PORT || 8080
    app.listen(port)
    console.log('Server running at :' + port)
  }
}

new Server().run()
