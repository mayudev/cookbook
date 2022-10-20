import { Request, Response, Router } from 'express'
import { Recipe } from '../entity/Recipe'

export default class RecipesController {
  public router = Router()

  constructor() {
    this.initRoutes()
  }

  private initRoutes() {
    this.router.get('/', this.getRecipes)
    this.router.get('/latest', this.getLatestRecipes)
  }

  private async getRecipes(req: Request, res: Response) {
    const recipes = await Recipe.find()

    return res.send(recipes)
  }

  private async getLatestRecipes(req: Request, res: Response) {
    const latest = await Recipe.find({
      // todo make it 10 latest
      take: 3,
      order: {
        id: -1,
      },
    })

    return res.send(latest)
  }
}
