import React, { useState } from 'react';
import { Button, Box, CssBaseline } from '@mui/material';
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
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

  return (
    <ThemeProvider theme={theme}> {/* Apply the theme globally */}
      <CssBaseline /> {/* Normalize styles across browsers */}
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Align items to the left and right
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: '#3f51b5', // Navbar background color
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow effect
          borderRadius: '8px', // Rounded corners
          width: '100%', // Ensure it spans the full width
        }}
      >
        {/* Product Store Text */}
        <Box sx={{ fontWeight: 'bold', color: 'white', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Product Store
          </Link>
        </Box>

        {/* Button Container */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Add Product Button */}
          <Link to="/create" style={{ textDecoration: 'none' }}>
            <Button 
              variant="contained" 
              color="secondary" 
              startIcon={<FaCartPlus />} 
              sx={{
                borderRadius: '30px', // Rounded button
                textTransform: 'none', // Prevent text from being capitalized
                padding: '8px 20px',
                '&:hover': {
                  backgroundColor: '#f50057', // Hover effect
                },
                boxShadow: 'none', // Remove button shadow
              }}
            >
              Add Product
            </Button>
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
