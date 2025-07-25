import axios from "axios"

const countriesUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAllCountries = () => {
  const request = axios.get(countriesUrl)
  return request.then(response => response.data)
}

export default { getAllCountries }