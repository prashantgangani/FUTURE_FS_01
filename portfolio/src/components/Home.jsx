import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import profileImg from '../assets/pgphoto.jpg'; // Adjust the path as necessary

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        background: 'grey',
        color: 'white',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth={false} sx={{ width: '100%', margin: 0, padding: 0 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            py: 8,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                mb: 4,
                width: '100%',
              }}
            >
              Hello , I'm Prashant Gangani
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 6,
                color: 'rgba(255,255,255,0.9)',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                width: '100%',
              }}
            >
              Full Stack Developer | Problem Solver 
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', gap: 3, justifyContent: 'center' }}>
              <Button
                component={Link}
                to="/projects"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: '#1976d2',
                  fontSize: '1.2rem',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                  }
                }}
              >
                VIEW MY WORK
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  fontSize: '1.2rem',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.9)',
                    bgcolor: 'rgba(255,255,255,0.1)',
                  }
                }}
              >
                GET IN TOUCH
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: { xs: 4, md: 0 },
            }}
          >
            <img
              src={profileImg}
              alt="Profile"
              style={{
                width: '300px',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '50%',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;