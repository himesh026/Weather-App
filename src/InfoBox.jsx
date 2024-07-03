import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({info}) {

  const Hot_Url="https://png.pngtree.com/png-clipart/20210310/original/pngtree-hot-weather-heatstroke-png-image_5939828.jpg";
  const Cold_Url="https://www.shutterstock.com/image-vector/random-falling-snow-flakes-wallpaper-600nw-2282020887.jpg"
  const Rain_Url="https://play-lh.googleusercontent.com/ZwHE4iOplNNdXNWyKW_ZhVypng7wl1R0NvOOJk8RShrY-AJ0jzP1Ob5-T4V539bW3nw"
  let img_url,Icon;
  if(info.temp>20 && info.humidity<80){
    img_url=Hot_Url;
    Icon=<WbSunnyIcon/>;
  }
  else if(info.temp<20 && info.humidity<80){
    img_url=Cold_Url;
    Icon=<AcUnitIcon/>;
  }
  else if(info.humidity>80){
    img_url=Rain_Url;
    Icon=<ThunderstormIcon/>;
  }

  return (
    <div className="info-box">
   
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="weather image"
            height="140"
            image={`${img_url}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              &nbsp;&nbsp;{Icon}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>Temprature={info.temp}&deg;C</p>
              <p>Max Temprature={info.tempMax}&deg;C</p>
              <p>Min Temprature={info.tempMin}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p>Pressure={info.pressure}</p>
              <p>Wind Speed={info.windSpeed}</p>
              <p>Weather={info.weather}</p>
            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>
  );
}
