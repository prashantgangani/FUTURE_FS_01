import { Box, Container, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'black',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center" color='white'>
          © {new Date().getFullYear()} Prashant Gangani. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2}}>
          <IconButton
            color="primary"
            href="https://github.com/prashantgangani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </IconButton>
          <IconButton
            color="primary"
            href="https://www.linkedin.com/in/prashant-gangani-38046731b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3ByYVzP3%2FWSf6VKNc9ai0uow%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            color="primary"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 