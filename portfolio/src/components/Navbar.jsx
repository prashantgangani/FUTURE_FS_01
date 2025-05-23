import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar 
      position="static" 
      sx={{ 
        height: '64px',
        backgroundColor: 'rgba(17, 17, 17, 0.95)',
      }}
    >
      <Container maxWidth={false}>
        <Toolbar sx={{ height: '100%' }}>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ 
              flexGrow: 1,
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            P/G
          </Typography>
          <Button 
            component={Link} 
            to="/"
            sx={{ 
              color: location.pathname === '/' ? '#f50057' : 'white',
              mx: 1,
            }}
          >
            HOME
          </Button>
          <Button 
            component={Link} 
            to="/about"
            sx={{ 
              color: location.pathname === '/about' ? '#f50057' : 'white',
              mx: 1,
            }}
          >
            ABOUT
          </Button>
          <Button 
            component={Link} 
            to="/projects"
            sx={{ 
              color: location.pathname === '/projects' ? '#f50057' : 'white',
              mx: 1,
            }}
          >
            PROJECTS
          </Button>
          <Button 
            component={Link} 
            to="/contact"
            sx={{ 
              color: location.pathname === '/contact' ? '#f50057' : 'white',
              mx: 1,
            }}
          >
            CONTACT
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 