import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";
import { colors } from '@mui/material';
// import { update } from 'tar';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false)

   const API_URL = "https://api.openweathermap.org/data/2.5/weather";

   let getWeatherInfo = async () => {
   try {
    let response = await fetch(
        `${API_URL}?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
   } catch(err){
     throw err;
   }

   }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    }

    return (
        <div className="SearchBox">
            
            <form onSubmit={handleSubmit}>
            <TextField 
            id="city" 
            label="City Name" 
            variant="outlined" 
            required
            value={city}
            onChange={handleChange}/>
            <br></br>
            <br></br>
             <Button variant="contained" type="submit">Search</Button>
             {error && <p style={{color: "red"}}>No Such Place Exist</p>}
            </form>
        </div>
    )
}