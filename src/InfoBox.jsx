// import Card from '@mui/material/Card';

// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import "./InfoBox.css";
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import AcUnitIcon from '@mui/icons-material/AcUnit';

// export default function InfoBox({ info }){
//     const INIT_URL = 
//     "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//     let COLD_URL = "https://images.unsplash.com/photo-1564314966899-839134794c8c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
//     let HOT_URL = "https://images.unsplash.com/photo-1664328900302-6cb92b21902f?q=80&w=1054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
//     let RAINY_URL = "https://media.istockphoto.com/id/902497530/photo/cars-driving-on-wet-road-in-the-rain-with-headlights.webp?a=1&b=1&s=612x612&w=0&k=20&c=tkP2euU7394M7fWbgBP3iNwY34Fy7XdBymhe73MSeqU=";

//     return(
//         <div className="InfoBox">
//             <div className="cardContainer">
//             <Card sx={{ maxWidth: 345 }}>
//       <CardMedia          
//         sx={{ height: 160, width: 300 }}
//         image={
//             info.humidity > 80 ? RAINY_URL: info.temp > 15 ? HOT_URL : COLD_URL
//         }
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div" className="typography">
//           {info.city}{
//           info.humidity > 80 ? <ThunderstormIcon/>: info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
//         </Typography>
//         <Typography variant="body2" color= "text.secondary" component={"span"} className= "typo">
//         <div>Tempreture = {info.temp}&deg;C</div>
//         <div>Humidity = {info.humidity}</div>
//         <div>Min Temp = {info.tempMin}&deg;C</div>
//         <div>Max Temp = {info.tempMax}&deg;C</div>
//         <div>The weather {info.feelsLike}</div>
//         </Typography>
//       </CardContent>
//     </Card>
//     </div>
//         </div>
//     )
// }

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL = 
    "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const COLD_URL = 
    "https://images.unsplash.com/photo-1564314966899-839134794c8c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  
  const HOT_URL = 
    "https://images.unsplash.com/photo-1664328900302-6cb92b21902f?q=80&w=1054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  const RAINY_URL = 
    "https://media.istockphoto.com/id/902497530/photo/cars-driving-on-wet-road-in-the-rain-with-headlights.webp?a=1&b=1&s=612x612&w=0&k=20&c=tkP2euU7394M7fWbgBP3iNwY34Fy7XdBymhe73MSeqU=";

  // Function to get weather image
  const getWeatherImage = () => {
    if (info.humidity > 80) return RAINY_URL;
    if (info.temp > 15) return HOT_URL;
    return COLD_URL;
  };

  // Function to get weather icon
  const getWeatherIcon = () => {
    if (info.humidity > 80) return <ThunderstormIcon sx={{ color: 'gray' }} />;
    if (info.temp > 15) return <WbSunnyIcon sx={{ color: 'orange' }} />;
    return <AcUnitIcon sx={{ color: 'blue' }} />;
  };

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 160, width: 300 }}
            image={getWeatherImage()}
            title="Weather Condition"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="typography"
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              {info.city}
              {getWeatherIcon()}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="span"
              className="typo"
            >
              <div>Temperature = {info.temp}&deg;C</div>
              <div>Humidity = {info.humidity}%</div>
              <div>Min Temp = {info.tempMin}&deg;C</div>
              <div>Max Temp = {info.tempMax}&deg;C</div>
              <div>Feels Like = {info.feelsLike}&deg;C</div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
