import React, { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import UserCardList from './components/UserCardList';
import { makeUserDatas } from './Utils'

const userDatas = makeUserDatas(50);

function App() {
  
  const [useDarkMode, setUseDarkmode] = useState(true);

  const handleChange = (event) => {
    setUseDarkmode(useDarkMode ? false : true)
  };

  useEffect(() => { console.log("component did mount")
  }, []);
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