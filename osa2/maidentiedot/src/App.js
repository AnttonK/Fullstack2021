import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Filter = ({search, handleSearch}) => {
  return (
    <p>Find countries <input value={search} onChange={handleSearch} /> </p>
  )
}
const Country = ({country}) => {
  return (
    <li>{country.name}</li>
  )
}
const CountryList = ({countries}) => {
  return (
    <ul>
     {countries.map(country => <Country key={country.name} country={country}/>)}
    </ul>
  )
}

const ShowCountries = ({countries}) => {
  if (countries.length === 1) {
    return (
      <FullStats country={countries[0]}/>
    ) 
  } 
  else if (1 < countries.length && countries.length <= 10) {
    return (
      <CountryList countries={countries} />
    )
  }
 
  else {
    return (
    <div>
      <p>
      Too many matches, specify another filter
      </p>
    </div>
    )
  }

}


const FullStats = ({country}) => {
  return (
    <div>
      <h1>{country.name}</h1>
        <p>capital: {country.capital}</p>
        <p>population: {country.population}</p>
      <h2>Languages:</h2>
      <ul>
          {country.languages.map(language => (
            <li key={language.name}>{language.name}</li>
          ))}
      </ul>
      <img src={country.flag} alt ="flag not found" height="150px" width="250px" />
    </div>
  )
}
const App = () => {
const [countries, setCountries] = useState([])
const [filter, setFilter] = useState('')
const [showAll, setShowAll] = useState(false)


const handleSearch = (event) => {
  console.log(event.target.value)
  console.log(filter)
  setFilter(event.target.value)
}

const countriesToShow = showAll
  ? countries
  : countries.filter (country => country.name.toLowerCase().includes(filter.toLowerCase()))

useEffect(() => {
  axios 
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])  
  console.log('countries', countries.length)

  return (
    <div>
      <Filter search={filter} handleSearch={handleSearch} />
      <ShowCountries countries={countriesToShow} />
    


    </div>
  );
}
//{countriesToShow.map((country,i) => <FullStats key={i} country={country} />)}
export default App;
