import { useEffect, useState } from "react";
import WeatherContext from "./context/WeatherContext";
import Main from "./components/Main";
import './style.css'
import { usePosition } from "use-position";
import axios from "axios";
import Loading from './components/Loading'

function App() {
    const {latitude, longitude} = usePosition();
    const [weather, setWeather] = useState();
    const key = process.env.REACT_APP_WEATHER_API;
    const getdata = async () => {
        const {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric&lang=tr`)
        setWeather(data)
    }
    useEffect(() => {
        latitude && longitude && getdata()
    },[latitude, longitude])
    const [search, setSearch]=useState('Samsun');
    const values = [
        latitude, longitude, weather, search
    ]

   return (
    <div id="myBox">
        {weather ? 
        <WeatherContext.Provider value={values}>
            <Main />
        </WeatherContext.Provider>
        
        : <Loading />}
    </div>
   );
}

export default App;
