import express from 'express'
import AuthController from './controller/auth'
import RecipesController from './controller/recipes'

const app = express()

export default class Server {
  private configureRoutes() {
    app.get('/', (req, res) => {
      return res.send({
        status: 'OK',
      })
    })
    app.use('/api/recipes', new RecipesController().router)
    app.use('/api/auth', new AuthController().router)
  }

  setup() {
    this.configureRoutes()
    return app
  }
}
