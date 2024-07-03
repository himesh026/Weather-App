import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState({
        
            city: "delhi",
            humidity: 66,
            pressure: 994,
            temp: 33.05,
            tempMax:35,
            tempMin:30,
            weather: "haze",
            windSpeed: 4.12,
          
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Search Your City to get Weather Info</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>

    </div>
  );
}
