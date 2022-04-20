import React, {useState, useEffect} from "react";
import Typography from '@mui/material/Typography'
import { weather_mapping_data, cityLatLon } from "../dataset/weatherData";
import Grid from "@mui/material/Grid";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

function WeatherCard(props) {
    const { id } = props;
    const [weatherData, setweatherData] = useState(null);
    const [apiError, setApiError] = useState(null);
    const [selectedCityData, setselectedCityData] = useState({name : "안양", lat: 37.3, lon: 126.9});
    

    const selectedHandleChange = (event) => {
        const cityName = event.target.value;
        const findCitytLatLon = cityLatLon.find(data => data.name === cityName)
      setselectedCityData(findCitytLatLon)
    }


    useEffect(() => { 
        const callApi = async() => {
          const cityName = selectedCityData.name;
          const cityGetDate = cityName+'_현재시간'
          //현재시간 - 로컬스토리에 저장한시간 = 로컬스토리지에 저장한 시간으로 부터 흘러간 시간이 나옴
          //흘러간 시간이 10분 미만이면 로컬스토리 저장된 날씨데이터 활용
          //흘러간 간시간이 10분 이상이면 openAPI 호출
          if(Date.now() - localStorage.getItem(cityGetDate) / 1000 / 60 > 60){
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityData.lat}&lon=${selectedCityData.lon}&appid=624d5d52ecaa1fcc09066dbfb66c6cbd&appid=624d5d52ecaa1fcc09066dbfb66c6cbd`)
            .then(result =>{
              setweatherData(result.data);
              localStorage.setItem(cityName, JSON.stringify(result.data));
              localStorage.setItem('_현재시간', Date.now());
            })
    
          } else if(Date.now() - localStorage.getItem(cityGetDate) / 1000 / 60 < 60){ 
            setweatherData(JSON.parse(localStorage.getItem(cityName)));
          }
        }
          callApi();
          console.log("component did mount")
        }, [selectedCityData]);


    const makeWeatherInfo = () => {
        const {temp, temp_min, temp_max, feels_like, humidity } = weatherData.main;
        const { main, icon } = weatherData.weather[0];
        const parseWeatherData = weather_mapping_data[main] ? weather_mapping_data[main] : weather_mapping_data["Mist"]

        const iconURL = ``;

        return <Grid item xs={1} sm={2} md={4}>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedCityData.name}
                      label="Age"
                      onChange={selectedHandleChange}
                    >
                      {cityLatLon.map((city)=> <MenuItem value={city.name}>{city.name}</MenuItem>)}
                    </Select>
                </FormControl>
            <Typography>{`현재날씨 : ${main}`}</Typography>
            <img src={iconURL} alt="날씨 아이콘"></img>
            <Typography>{`현재온도 : ${temp}℃ 체감온도 : ${feels_like}℃`}</Typography>
            <Typography>{`최저기온 : ${temp_min}℃ 최고기온 : ${temp_max}℃ 습도 : ${humidity}`}</Typography>
        </Grid>
    }

        return <>
            {   apiError ? 
                <Typography>{apiError.message}</Typography>
                : 
                weatherData ? 
                    makeWeatherInfo() 
                    :
                    <Typography>날씨 정보 없음</Typography>
            }
        </>
    
    
}
export default WeatherCard;