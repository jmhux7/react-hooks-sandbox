import React from 'react'
import axios from 'axios'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import App from '../App'

jest.mock('axios')
describe('App', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  describe('#render', () => {
    it('should render an image', async () => {
      const mockResponse = {
        data: {
          message: 'http://doggo',
        },
        status: 200,
      }
      axios.request.mockResolvedValueOnce(mockResponse)

      await act(async () => {
        render(<App />, container)
      })

      const img = container.querySelector('img')
      expect(img.src).toEqual('http://doggo/')
    })

    it('should not render an image if request fails', async () => {
      const mockFailedResponse = {
        data: {
          error: new Error('fail'),
        },
        status: 404,
      }
      axios.request.mockResolvedValueOnce(mockFailedResponse)

      await act(async () => {
        render(<App />, container)
      })

      const img = container.querySelector('img')
      expect(img).toBeFalsy()
    })
  })
})
