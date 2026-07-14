import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({info}){

    let Hot_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLSkxZrhk2v7b67XTea7lHMv-XLQNTDDn3PHLAx9zfje6dkYx1IZw0E4&s=10";
    let Cold_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflcZApHoEFVULwcZruN6aRnNuR5A4-pdtLJsCrWK2xi4zH-8Yzae5J00&s=10";
    let Rain_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";

    return(
    <div className="infobox">
        <h2>Weather Information: {info.weather}</h2>
        <div className="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? Rain_URL : info.temperature > 15 ? Hot_URL : Cold_URL}
        title="greeen iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 80 
                ? <ThunderstormIcon />
                : info.temperature > 15 
                ? <SunnyIcon />
                : <AcUnitIcon />}
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>
               <p>Temperature: {info.temperature}&deg;C</p> 
               <p>Min_temp:{info.temp_min}&deg;C</p>
               <p>Max_temp:{info.temp_max}&deg;C</p>
               <p>Humidity:{info.humidity}</p>
               <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feels_like}&deg;C</p>
            </div>
         
        </Typography>
      </CardContent>
      
    </Card>
    </div>

    </div>
    )
}