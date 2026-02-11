import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000
})

export const getCurrentWeather = (city) =>
  api.get(`/weather?city=${city}`)

export const getForecast = (city) =>
  api.get(`/forecast?city=${city}`)
