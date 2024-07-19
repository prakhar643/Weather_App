import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Gorakhpur",
        feelsLike : 42.88,
        humdity:38,
        temp:38.16,
        tempMax:38.16,
        tempMin:38.16,
        weather:"broken clouds",
    })
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo} />
        </div>
    )
}