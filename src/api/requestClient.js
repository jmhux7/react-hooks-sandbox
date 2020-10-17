import { request } from './apiService'

export const getData = async (url) => request({
  method: 'GET',
  url: `${url}`,
})

export default {
  getData,
}
