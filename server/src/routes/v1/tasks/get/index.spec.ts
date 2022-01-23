/* eslint-disable import/first */
const mockFindTasks = jest.fn(() => [{}])
jest.mock('../../../../controllers/tasks', () => ({
  find: mockFindTasks,
}))

import request from 'supertest'
import server from '../../../../server'

const path = '/api/v1/tasks'

describe('API - /v1', () => {
  describe('GET /tasks', () => {
    afterEach(() => {
      jest.clearAllMocks()
    })

    it('responds with 200', async () => {
      const mockTask = {
        _id: '61ed45bda10f8b2ed4302b74',
        name: 'test2',
        description: "I'm testing the app",
        status: false,
        createdAt: '2022-01-23T12:10:37.645Z',
        updatedAt: '2022-01-23T12:10:37.645Z',
        __v: 0,
      }
      mockFindTasks.mockImplementationOnce(() => [mockTask])
      const response = await request(server).get(path)
      expect(response.statusCode).toEqual(200)
      expect(response.body.tasks).toMatchObject([mockTask])
    })
  })
})
