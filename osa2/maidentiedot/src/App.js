import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Weather from './components/Weather'
import Country from './components/Country'

const api_key = process.env.REACT_APP_API_KEY


const Filter = ({search, handleSearch}) => {
  return (
    <p>Find countries <input value={search} onChange={handleSearch} /> </p>
  )
}






const CountryList = ({countries, selectedCountry}) => {
  return (
    <ul>
     {countries.map(country => <Country key={country.name} country={country}
      selectedCountry={selectedCountry}/>)}
     
    </ul>
  )
}



const ShowCountries = ({countries, selectedCountry} ) => {
  if (countries.length === 1) {
    return (
      <FullStats country={countries[0]}/>
    ) 
  } 
  else if (1 < countries.length && countries.length <= 10) {
    return (
      <CountryList countries={countries} selectedCountry={selectedCountry} />
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

  const [weather, setWeather] = useState(undefined)
    useEffect(() => {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
        .then(response => {
          if (response.data.success !== false) {
            setWeather(response.data);
          }
        })
    },[])
    
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
      <img src={country.flag} alt ="flag not found" height="150px" />
      <h2>Weather in {country.capital}</h2>
      <Weather weather={weather} />
    </div>
  )
}





/*
<p>temperature: {weather.current.temperature} °C</p>
<p>Feels like: {weather.current.feelslike} °C</p>
<img src={weatherImage} alt="image not found" height="50px" />*/
const App = () => {
const [countries, setCountries] = useState([])
const [filter, setFilter] = useState('')
const [showAll, setShowAll] = useState(false)

const selectedCountry = (country) => (
  setFilter(country.name)
)


const handleSearch = (event) => {
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

  return (
    <div>
      <Filter search={filter} handleSearch={handleSearch} />
      <ShowCountries countries={countriesToShow} selectedCountry={selectedCountry} />
    


    </div>
  );
}
export default App;
