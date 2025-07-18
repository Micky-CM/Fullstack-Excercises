import { useState, useEffect } from "react"
import weatherService from "../services/weather"

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState(null)
  const weatherApiKey = import.meta.env.VITE_WEATHER_KEY

  useEffect(() => {
    if (!country.capitalInfo || !country.capitalInfo.latlng) return

    const [lat, lon] = country.capitalInfo.latlng

    weatherService.getWeather(lat, lon, weatherApiKey)
      .then(data => {
        setWeather(data)
      })
  }, [country])

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Area: {country.area}</p>

      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((lang, i) => (
          <li key={i}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />

      { weather && weather.weather && (
        <>
          <h3>Weather in {country.capital?.[0]}</h3>
          <p>Temperature: {weather.main.temp} Celsius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>Wind: {weather.wind.speed} m/s</p>
        </>
      )}
    </div>
  )
}

export default CountryDetails