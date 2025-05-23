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
        background: 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)',
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
                I'm a passionate Full Stack Developer with a strong foundation in web technologies
                and a keen eye for creating engaging user experiences. With several years of
                experience in the field, I've worked on various projects that have helped me
                develop a comprehensive understanding of the software development lifecycle.
              </Typography>
              <Typography paragraph>
                I believe in writing clean, maintainable code and staying up-to-date with
                the latest industry trends and best practices.
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
          
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3, mt: 2, bgcolor: 'rgba(255, 255, 255, 0.9)' }}>
              <Typography variant="h5" gutterBottom color="primary">
                Experience
              </Typography>
              <Box>
                <Typography variant="h6">Senior Developer - Tech Company</Typography>
                <Typography color="textSecondary">2020 - Present</Typography>
                <Typography paragraph sx={{ mt: 1 }}>
                  Led development of multiple web applications, mentored junior developers,
                  and implemented best practices for code quality and team collaboration.
                </Typography>
              </Box>
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6">Full Stack Developer - StartUp</Typography>
                <Typography color="textSecondary">2018 - 2020</Typography>
                <Typography paragraph sx={{ mt: 1 }}>
                  Developed and maintained various client projects, worked directly with
                  customers, and contributed to the company's core product development.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 