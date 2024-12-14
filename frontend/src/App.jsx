import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import Navbar from './componets/Navbar.jsx';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack Navbar and Routes vertically
        height: '100vh', // Ensure the app takes full height of the viewport
        backgroundColor: '#f4f6f8', // Light background for the app
        margin: 0, // Remove default margin to prevent gaps
      }}
    >
      {/* Navbar stays at the top, spans the full width */}
      <Navbar />

      {/* Main content area for different routes */}
      <Box sx={{ flexGrow: 1, padding: { xs: '10px', md: '20px' }, width: '100%' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
