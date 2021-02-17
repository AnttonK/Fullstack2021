import React from 'react'

const Country = ({country, selectedCountry}) => {
    const clickHandler = (country) => {
      return () => selectedCountry(country)
    }
    return (
      <li>{country.name} 
       <Button onClick={clickHandler(country)} text = 'Show' /></li>
    )
  }

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

export default Country