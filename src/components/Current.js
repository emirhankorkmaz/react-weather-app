import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'
import '../style.css'
import { useState } from 'react';
import { useEffect } from 'react';


function Current() {
  const date = new Date();
  const today = date.getDay();
  const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
    const weatherData = useContext(WeatherContext);
    const icon_url = process.env.REACT_APP_URL;
  return (
    <div className='CurrentData'>
      <div className='allCurrent'>
        <div className='searchBar'>
        <label></label>
        <input id='src' type='text' placeholder={`Şehir Adı : `}/>
        </div>
        <h1>{weatherData[2].name}, {weatherData[2].sys.country == "TR" ? "Türkiye" : ""}</h1>
        <figure>
        <img src={(`icons/${weatherData[2].weather[0].icon}.svg`)} alt={weatherData[2].weather[0].description} title={weatherData[2].weather[0].description}/>
        </figure>
        <div className='Temp'>{Math.ceil(weatherData[2].main.temp)}°C</div>
        <div><h3>Hissedilen : {Math.ceil(weatherData[2].main.feels_like)}°C</h3></div>
        <div className='ToDay'>{days[today].toUpperCase()}</div>
        <div className='desc'>
          <img src={`https://openweathermap.org/img/wn/${weatherData[2].weather[0].icon}.png`} />
          <p>{weatherData[2].weather[0].description.toUpperCase()}</p>
        </div>
        <div className='rain'>
          <img src='icons/rain-drops.svg' />
          <p>{weatherData[2].rain ? `Rain - ${weatherData[2].rain}%` : '0%'}</p>
        </div>
      </div>
    </div>
  )
}

export default Current