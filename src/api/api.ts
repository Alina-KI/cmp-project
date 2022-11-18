import axios from 'axios'

const API_PATH = 'http://185.244.172.108:8081/'

export const api = axios.create({
  baseURL: API_PATH
})

api.interceptors.request.use((config) => {
  return config
})