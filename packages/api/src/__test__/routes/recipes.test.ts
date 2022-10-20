import request from 'supertest'
import Server from '../../server'
import { TestHelper } from '../database'

beforeAll(async () => {
  await TestHelper.instance.setupTestDatabase()
})

afterAll(() => {
  TestHelper.instance.teardownTestDatabase()
})

describe('/recipes route', () => {
  test('should return no recipes', (done) => {
    request(new Server().setup())
      .get('/api/recipes/latest')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toStrictEqual([])
        done()
      })
  })
})
