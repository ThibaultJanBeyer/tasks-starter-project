import request from 'supertest'

import server from '../server'

describe('API - /ping', () => {
  it('responds with 200', async () => {
    const response = await request(server).get('/ping')
    expect(response.statusCode).toEqual(200)
    expect(response.text).toEqual('pong')
  })
})
