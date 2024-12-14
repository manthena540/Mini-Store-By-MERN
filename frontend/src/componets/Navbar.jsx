import React, { useState } from 'react';
import { Button, Container, Typography, Box, CssBaseline } from '@mui/material';
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Navbar = () => {
  // State for managing the current theme mode
  const [darkMode, setDarkMode] = useState(false);

  // Create themes for light and dark modes
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', // Toggle between dark and light
    },
  });

  // Function to toggle the theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}> {/* Apply the theme globally */}
      <CssBaseline /> {/* Normalize styles across browsers */}
      
      <Container
      style={{
        display: 'flex',
        justifyContent: 'space-between', // Align items to the left and right
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid #ccc',
      }}
      >
        {/* Product Store Text */}
        <Typography variant="h6" style={{ fontWeight: 'bold', color: '#3f51b5',paddingRight: '950px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Product Store
          </Link>
        </Typography>

        {/* Button Container */}
        <Box display="flex" alignItems="center" gap="20px">
          {/* Add Product Button */}
          <Link to="/create" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" startIcon={<FaCartPlus />}>
              Add Product
            </Button>
          </Link>

          {/* Theme Toggle Button */}
          <Button
            variant="outlined"
            onClick={toggleTheme}
            style={{ borderRadius: '50%', padding: '10px' }}
          >
            {darkMode ? <LuSun style={{ fontSize: '20px', color: '#fbc02d' }} /> : <IoMoon style={{ fontSize: '20px', color: '#3f51b5' }} />}
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Navbar;
