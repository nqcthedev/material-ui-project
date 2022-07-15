import { Box, Container, Stack, ThemeProvider, createTheme } from '@mui/material';
import React, { useState } from 'react';

import AddPost from './components/AddPost';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette:{
     // @ts-ignore
     mode:mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color='text.primary'>
        <Navbar/>
       <Stack direction='row' spacing={2} justifyContent="space-between">
       <Sidebar 
// @ts-ignore
       setMode={setMode} mode={mode}/>
        <Feed/>
        <Rightbar/>
       </Stack>
       <AddPost/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
