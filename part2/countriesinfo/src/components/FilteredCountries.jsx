import CountryDetails from "./CountryDetails"

const FilteredCountries = ({ filtered, showCountry }) => {
  return (
    <div>
      { filtered.length > 10 && <span>To many matches, specify another filter</span> }
      { filtered.length <= 10 && filtered.length > 1 && (
        <ul>
          {filtered.map(country => (
            <li key={country.cca3}>
              {country.name.common}
              <button onClick={()=> showCountry(country.name.common)}>Show</button>
            </li>
          ))}
        </ul>
      ) }
      { filtered.length === 1 && <CountryDetails country={filtered[0]} /> }
    </div>
  )
}

export default FilteredCountries