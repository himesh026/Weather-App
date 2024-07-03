import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";


export default function SearchBox({ updateInfo }) {
  const API_URl = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b9235091d478fbfe3d60fccb68f330b2";
  let [city, setCity] = useState("");
  let [error,setError]=useState(false);
  let updateCity = (event) => {
    setCity(event.target.value);
  };
  
  let getWeather = async () => {
    try{
      let response = await fetch(
        `${API_URl}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();
      // console.log(data);
      let result = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        windSpeed: data.wind.speed,
        weather: data.weather[0].description,
      };
  
      // console.log(result);
      setError("");
      return result;
    }
    catch(err){
      throw err;
      
      console.log(error);
    }
  };
  let handleSubmit = async (event) => {
    try{
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeather();
      updateInfo(newInfo);
    }
    catch(err){
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className="search-box">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City-Name"
          variant="outlined"
          required
          value={city}
          onChange={updateCity}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No Such Place Found</p>}
      </form>
    </div>
  );
}
