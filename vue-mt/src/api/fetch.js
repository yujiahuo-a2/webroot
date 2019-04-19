import config from 'config'
import axios from 'axios'

const instance = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 1000
})

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  })

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
