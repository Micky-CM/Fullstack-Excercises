import axios from "axios"

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather'

const getWeather = (lat, lon, weatherApiKey) => {
  const params = {
    lat,
    lon,
    appid: weatherApiKey,
    units: 'metric',
  }
  return axios.get(weatherUrl, {params}).then(response => response.data)
}

export default { getWeather }