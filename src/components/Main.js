import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'
import Current from './Current'
import Datas from './Datas'


function Main() {
    const data = useContext(WeatherContext)
  return (
      <WeatherContext.Provider value={data}>
      <Current />
      <Datas />
      </WeatherContext.Provider>
  )
}

export default Main