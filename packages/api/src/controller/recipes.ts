import { Request, Response, Router } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../database'
import { Recipe } from '../entity/Recipe'

export default class RecipesController {
  public router = Router()

  constructor() {
    this.initRoutes()
  }

  private initRoutes() {
    this.router.get('/', this.getRecipes)
  }

  private async getRecipes(req: Request, res: Response) {
    const repository = AppDataSource.getRepository(Recipe)
    const recipes = await repository.find()

    return res.send(recipes)
  }
}
