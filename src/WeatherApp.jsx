import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';

export default function WeatherApp(){
    
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike : undefined,
        humidity : undefined,
        temp : 31.05,
        tempMax : 31.05,
        tempMin: 31.05,
        weather : "haze",
    });  

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
    <div style={{textAlign: "center"}}>
             <h2>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo} />
    </div>
    )
}