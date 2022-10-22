import { DataSource } from 'typeorm'
import { Recipe } from './entity/Recipe'
import { Users } from './entity/Users'

export const entities = [Recipe, Users]

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: (process.env.DB_PORT || 5432) as number,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'dev',
  database: process.env.DB_NAME || 'cookbook',
  entities,
})

export async function initalizeDatabase() {
  try {
    await AppDataSource.initialize()
    await AppDataSource.synchronize()
  } catch (e) {
    console.error('initializing database failed')
    console.error(e)
  }
}
