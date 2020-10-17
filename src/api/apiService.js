import axios from 'axios'

export const request = async (opts) => {
  let response

  try {
    const res = await axios.request(opts)
    const { data, status } = res
    response = {
      status,
      data,
    }
  } catch (error) {
    response = {
      status: 'failure',
      data: { error },
    }
  }

  return response
}

export default request
