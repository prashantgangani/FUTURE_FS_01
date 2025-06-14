import { Container, Typography, Box, Grid, Paper, Chip } from '@mui/material';

const skills = [
  'JavaScript', 'React', 'Node.js', 'Python', 'MongoDB',
  'HTML5', 'CSS3', 'TypeScript', 'Git', 'Docker'
];

const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: 'grey',
        color: 'white',
        margin: 0,
        padding: 0,
      }}
    >
      <Container maxWidth={false} sx={{ width: '100%', margin: 0, padding: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'white', textAlign: 'center', mb: 6 }}>
          About Me
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, bgcolor: 'rgba(255, 255, 255, 0.9)' }}>
              <Typography variant="h5" gutterBottom color="primary">
                Who I Am
              </Typography>
              <Typography paragraph>
               Hi, I’m Prashant Gangani — a passionate and curious full-stack web developer with a knack for building intuitive, user-friendly web applications. I enjoy turning complex problems into simple, elegant solutions through clean code and thoughtful design.

With experience in technologies like React.js, Node.js, Express, and MongoDB, I specialize in crafting responsive web interfaces and scalable backend systems.
              </Typography>
              <Typography paragraph>
                I believe in writing clean, maintainable code and staying up-to-date with
                the latest industry trends and best practices.
                When I'm not coding, I enjoy exploring new tech trends, collaborating with other developers, and sharpening my skills through hands-on projects and internships.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, bgcolor: 'rgba(255, 255, 255, 0.9)' }}>
              <Typography variant="h5" gutterBottom color="primary">
                Skills & Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    color="primary"
                    variant="outlined"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
          
          
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 