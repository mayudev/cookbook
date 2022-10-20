import request from 'supertest'
import Server from '../server'

describe('Application entry point', () => {
  test('should return 200 OK on /', (done) => {
    request(new Server().setup())
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toStrictEqual({ status: 'OK' })
        done()
      })
  })
})
