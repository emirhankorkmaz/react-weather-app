import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'
import '../style.css'

function Datas() {
  const weatherData = useContext(WeatherContext);
  console.log(weatherData[2])
  return (
    <div className='WeatherData'>
      <h1 className='data-title'>Günlük Havadurumu Verileri</h1>
      <div className='ikiyebol'>
      <div className='Tempratures'>
        <div className='maxTemp'>
          <img alt='Max Temp' id='sss' src='icons/thermometer-warmer.svg' />
          <p>Max: {Math.ceil(weatherData[2].main.temp_max)}°C</p>
        </div>
        <div className='minTemp'>
          <img id='sss' src='icons/thermometer-colder.svg' />
          <p>Min: {Math.ceil(weatherData[2].main.temp_min)}°C</p>
        </div>
      </div>
      <div className='Humidity'>
        <div className='humdata'>
        <img src='icons/humidity.svg' />
        <p>Nem Oranı: {weatherData[2].main.humidity}%</p>
        </div>
        <div className='humhow'>
        <p>{weatherData[2].main.humidity >= 55 ? 'İyi 👍🏻' : 'Kötü 😞'}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Datas