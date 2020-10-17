import axios from 'axios'

import { request } from '../apiService'

describe('apiService', () => {
  let mockHttpClient
  const requestOpts = {
    method: 'GET',
    url: 'http://localhost',
  }

  beforeEach(() => {
    mockHttpClient = jest.spyOn(axios, 'request')
  })

  it('should return a successful response', async () => {
    mockHttpClient.mockResolvedValueOnce({
      data: {
        users: [
          'bruce lee',
          'chuck norris',
        ],
      },
      status: 200,
    })

    const expectedResponse = {
      status: 200,
      data: { users: ['bruce lee', 'chuck norris'] },
    }

    const res = await request(requestOpts)

    expect(mockHttpClient).toHaveBeenCalled()
    expect(res).toEqual(expectedResponse)
  })

  it('should return the error with an unsuccessful response', async () => {
    const mockError = new Error('ohhh boy')
    mockHttpClient.mockRejectedValueOnce(mockError)

    const expectedResponse = {
      status: 'failure',
      data: { error: mockError },
    }

    const result = await request(requestOpts)

    expect(mockHttpClient).toHaveBeenCalled()
    expect(result).toEqual(expectedResponse)
  })
})
