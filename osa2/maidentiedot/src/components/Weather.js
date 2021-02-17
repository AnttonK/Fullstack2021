import React from 'react'

const Weather = ({ weather }) => {
    console.log(weather)
    if (weather !== undefined) {
      return (
        <div>
          <p>temperature: {weather.current.temperature} °C</p>
          <p>Wind : {weather.current.wind_speed} km/h</p>
          <img src={weather.current.weather_icons[0]} alt="weather icon" />
        </div>
      );
    }
    return <div>Weather data not found</div>;
  };
  //<p>temperature: {weather.current.temperature} °C</p>
  //<p>Wind : {weather.</p></div>

export default Weather;