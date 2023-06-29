import axios from 'axios'

const { REACT_APP_API_BASE_URL: baseURL } = process.env

axios.defaults.baseURL = baseURL

export const errorHandling = (error: any) => {
  return Promise.reject(error.message || error.response)
}

export default axios