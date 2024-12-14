import React from 'react';
import { Box } from '@mui/material';
import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import Navbar from './componets/Navbar.jsx'

function App() {
  return (
    <Box  sx={{
      width: 100,
      height: 100,}}>
     <Navbar />
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/create" element={<CreatePage/>}  />
      

      </Routes>


    </Box>
  );
}

export default App;
