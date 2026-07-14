import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import {useState} from "react";

export default function SearchBox({updateInfo}){
let[city,setCity]=useState("");
let[error,setError]=useState(false);

const API_URL="https://api.openweathermap.org/data/2.5/weather";
const API_Key="c38efac8d3b5a4564480511412b637bc"

let getWeatherInfo=async()=>{
    try{
     let response=await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
     let jsonResponse= await response.json();
    //  console.log(jsonResponse);
     let result={
        city:city,
        temperature:jsonResponse.main.temp,
        temp_min:jsonResponse.main.temp_min,
        temp_max:jsonResponse.main.temp_max,
        feels_like:jsonResponse.main.feels_like,
        description:jsonResponse.weather[0].description,
        humidity:jsonResponse.main.humidity
     };
    //  console.log(result);
     return result;
}catch(err){
    throw err;
}
}

    let handleSearch=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit=async (evt)=>{
        try{
        evt.preventDefault();
        // console.log(city);
        setCity("");
       let newInfo= await getWeatherInfo();
       updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }

   

    
   
    
    return(
        <div className="searchbox" >
            <form onSubmit={handleSubmit}>
                <h3>Search for the city</h3>
                 <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleSearch}/>
                 <br /><br />
                 <Button  variant="contained" type="submit">
                   Search
                 </Button>
                 {error && <p style={{color:"red"}}>No such Place exists..!</p>}
            </form>
        </div>
    )

}