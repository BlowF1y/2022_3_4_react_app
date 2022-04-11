import React, {useState, useEffect} from "react";
import Typography from '@mui/material/Typography'
import { weather_mapping_data } from "../dataset/weatherData";
import Grid from "@mui/material/Grid";

function WeatherCard(props) {
    const { weatherData, apiError} = props;
    const makeWeatherInfo = () => {
        const {temp, temp_min, temp_max, feels_like, humidity } = weatherData.main;
        const { main, icon } = weatherData.weather[0];
        const parseWeatherData = weather_mapping_data[main] ? weather_mapping_data[main] : weather_mapping_data["Mist"]

        const iconURL = ``;

        return <Grid item xs={1} sm={2} md={4}>
            <Typography>{`현재날씨 : ${parseWeatherData.n}`}</Typography>
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