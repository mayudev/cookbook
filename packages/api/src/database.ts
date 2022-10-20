import { DataSource } from 'typeorm'
import { Recipe } from './entity/Recipe'

export const entities = [Recipe]

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: (process.env.DB_PORT || 5432) as number,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'dev',
  database: process.env.DB_NAME || 'cookbook',
  entities,
  synchronize: true,
  logging: true,
})

export async function initalizeDatabase() {
  try {
    await AppDataSource.initialize()
  } catch (e) {
    console.error('initializing database failed')
    console.error(e)
  }
}
