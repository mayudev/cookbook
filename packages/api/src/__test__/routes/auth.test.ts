import request from 'supertest'
import Server from '../../server'
import { TestHelper } from '../database'
import AuthController from '../../controller/auth'

beforeAll(async () => {
  await TestHelper.instance.setupTestDatabase()
})

afterAll(() => {
  TestHelper.instance.teardownTestDatabase()
})

describe('/auth route', () => {
  test('should refuse a request without username', async () => {
    const response = await request(new Server().setup()).post('/api/auth/begin')

    expect(response.statusCode).toBe(400)
    expect(response.body).toStrictEqual({
      error: 'Username is required.',
    })
  })

  it('should begin registration when a new e-mail is provided', () => {
    new Server().setup()
    return request(new Server().setup())
      .post('/api/auth/begin')
      .send({
        username: 'asdf@example.com',
      })
      .expect(501) // TODO implement
  })
})
