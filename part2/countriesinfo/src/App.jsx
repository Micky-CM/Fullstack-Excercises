import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Filter from './components/Filter'
import FilteredCountries from './components/FilteredCountries'

const App = ()=> {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(()=> {
    countryService.getAllCountries()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  useEffect(() => {
    if (search.trim() === '') {
      setFiltered([])
    } else {
      const results = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
      setFiltered(results)
    }
  }, [search, countries])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <h1>Countries Info</h1>
      <Filter search={search} handleChange={handleChange} />
      <FilteredCountries filtered={filtered} />
    </>
  )
}

export default App
