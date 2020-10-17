import { getData } from '../requestClient'
import * as apiService from '../apiService'

describe('#getData', () => {
  it('should make the api request to the correct url', async () => {
    const requestMock = jest.spyOn(apiService, 'request').mockResolvedValue({})

    await getData('http://localhost/api/someroute')

    expect(requestMock).toHaveBeenCalledWith({
      method: 'GET',
      url: 'http://localhost/api/someroute',
    })
  })
})
