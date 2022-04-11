import React, { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import axios from 'axios';
import Weathercard from './components/WeatherCard'
import UserCardList from './components/UserCardList';
import { makeUserDatas } from './Utils'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import cityLatLon from './dataset/weatherData'
const userDatas = makeUserDatas(50);

function App() {
  const [useDarkMode, setUseDarkmode] = useState(true);
  const [weatherData, setweatherData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [selectedCityData, setselectedCityData] = useState({name : "안양", lat: 37.3, lon: 126.9});
  const handleChange = (event) => {
    setUseDarkmode(useDarkMode ? false : true)
  };
  const selectedHandleChange = (event) => {
      const cityName = event.target.name
      
    setselectedCityData()
  }
  
  useEffect(()=>{

   },[])

  useEffect(() => { 
    const callApi = async() => {
      try{
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityData.lat}&lon=${selectedCityData.lon}&appid=624d5d52ecaa1fcc09066dbfb66c6cbd&appid=624d5d52ecaa1fcc09066dbfb66c6cbd`)
        setweatherData(result.data);
      }catch(err){
        setApiError(err);
      }
    }
    callApi();
    console.log("component did mount")
  }, [selectedCityData]);


  useEffect(() => { console.log(`theme 변경됨 => ${useDarkMode}`)
  }, [useDarkMode])

  return (
    <ThemeProvider theme={createTheme({
      palette: {
        mode: useDarkMode ? 'dark' : 'light',
      },
    })
    }>
        <Box sx={{
          height : '100%',
          bgcolor: 'Background.default',
          color: 'text.primary',
          p: 1, 
        }}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedCityData.name}
                  label="Age"
                  onChange={selectedHandleChange}
                >
                  <MenuItem value={"서울"}>서울</MenuItem>
                  <MenuItem value={"안양"}>안양</MenuItem>
                  
                </Select>
            </FormControl>
          <Weathercard weatherData={weatherData} apiError={apiError} />
        <Switch 
          checked={useDarkMode} 
          onChange={handleChange}
          color="warning"
          inputProps={{ 'aria-label': 'controlled' }}
        />
      
        <Container maxWidth="lg">
            <UserCardList userDatas = {userDatas}/>
        </Container>
      </Box>
    
    </ThemeProvider>
    
  );
}

export default App;