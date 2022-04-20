import React, { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import WeatherCard from './components/WeatherCard'
import UserCardList from './components/UserCardList';
import { makeUserDatas } from './Utils'
import Grid from '@mui/material/Grid';


const userDatas = makeUserDatas(50);
function App() {
  const [useDarkMode, setUseDarkmode] = useState(true);

  const handleChange = (event) => {
    setUseDarkmode(useDarkMode ? false : true)
  };
  

  useEffect(() => { console.log(`theme 변경됨 => ${useDarkMode}`)
  }, [useDarkMode])

  return (
    <ThemeProvider theme={createTheme({
        palette: {
          mode: useDarkMode? 'dark' : 'light',
        },
      })
    }>
    <Box sx={{
      minHeight: '100%',
      bgcolor: 'background.default',
      color: 'text.primary',
      p: 1,
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 4, md: 12}}>  {/*weatherCard호출 및 Grid지정*/}
         {/* {[1,2,3,4,5,6,7,8,9].map((no) => <Weathercard id={no} />)} */} 
                  {/* 복문으로 여러번 돌리기 */}
          <WeatherCard cityName="안양" />
          <WeatherCard cityName="서울" />
          <WeatherCard cityName="부산" />
        </Grid>
        <Switch
          checked={useDarkMode}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <UserCardList userDatas={userDatas} />
      </Container>
    </Box> 
  </ThemeProvider>
  );
}



export default App;