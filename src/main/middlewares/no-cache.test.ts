import request from 'supertest'
import { noCache } from './no-cache'
import app from '../config/app'

describe('CORS Middleware', () => {
  test('should enable cors', async () => {
    app.get('/test_cors', noCache, (req, res) => {
      res.send()
    })

    await request(app)
      .get('/test_cors')
      .expect('cache-control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
      .expect('pragma', 'no-cache')
      .expect('expires', '0')
      .expect('surrogate-control', 'no-store')
  })
})
