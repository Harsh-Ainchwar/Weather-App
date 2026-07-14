import {useState} from "react";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Pune",
        weather:"overcasts clouds",
        feels_like:30.96,
        temp_max:27.38,
        temp_min:27.38,
        temperature:27.38,
        humidity:92
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>See your Weather..!</h1>

            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}