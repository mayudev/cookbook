import { DataSource } from 'typeorm'
import { entities } from '../database'

export class TestHelper {
  private static _instance: TestHelper

  private constructor() {}

  public static get instance(): TestHelper {
    if (!this._instance) this._instance = new TestHelper()

    return this._instance
  }

  source: DataSource

  async setupTestDatabase() {
    this.source = new DataSource({
      type: 'better-sqlite3',
      database: ':memory:',
      entities,
      synchronize: true,
    })

    await this.source.initialize()
  }

  teardownTestDatabase() {
    this.source.destroy()
  }
}
