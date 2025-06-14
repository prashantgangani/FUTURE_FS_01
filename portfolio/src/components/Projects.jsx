import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip, Box } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

const projects = [
  {
    title: 'Gesture Galaxy',
    description: 'A full-stack  platform built with React, Node.js, and MongoDB open Source plateform for learning sign language.',
    image: 'galaxy.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/VandanKambodi/GestureGalaxy',
   
  },
   {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts for multiple cities using weather API integration.',
    image: 'weather.png',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
    github: 'https://github.com/prashantgangani/FUTURE_FS_02',
    demo: 'https://weather-dashboard-demo.com'
  },
  {
    title: 'Task Management App',
    description: 'A responsive task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://via.placeholder.com/400x200',
    technologies: ['React', 'Express.js', 'Mongodb', 'node.js'],
    github: 'https://github.com/prashantgangani/FSWD_Personal_task_manager',
    demo: 'https://task-manager-demo.com'
  }
 
];

const Projects = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: 'grey',
        margin: 0,
        padding: 0,
      }}
    >
      <Container maxWidth={false} sx={{ width: '100%', margin: 0, padding: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'white', textAlign: 'center', mb: 6 }}>
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" color="primary">
                    {project.title}
                  </Typography>
                  <Typography paragraph color="text.secondary">
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<GitHub />}
                    href={project.github}
                    target="_blank"
                    variant="contained"
                  >
                    Code
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<Launch />}
                    href={project.demo}
                    target="_blank"
                    variant="outlined"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 