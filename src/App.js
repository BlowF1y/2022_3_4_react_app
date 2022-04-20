import React, { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Weathercard from './components/WeatherCard'
import UserCardList from './components/UserCardList';
import { makeUserDatas } from './Utils'
import Grid from '@mui/material/Grid';


const userDatas = makeUserDatas(50);
function App() {
  const [useDarkMode, setUseDarkmode] = useState(true);

  const handleChange = (event) => {
    setUseDarkmode(useDarkMode ? false : true)
  };
  

  useEffect(()=>{

   },[])

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
          minHeight : '100%',
          bgcolor: 'Background.default',
          color: 'text.primary',
          p: 1, 
        }}>
          <Container maxWidth="lg">
                <Grid container spacing={{ xs : 2, md: 3}} columns={{ xs:4, sm: 4, md: 12 }}>
                  {[1,2,3,4,5,6,7,8,9].map((no) => <Weathercard id={no} />)}
                </Grid>  
                <Switch 
                  checked={useDarkMode} 
                  onChange={handleChange}
                  color="warning"
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              <UserCardList userDatas = {userDatas}/>
          </Container>
      </Box>
    
    </ThemeProvider>
    
  );
}

export default App;