import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import AboutMe from './Components/AboutMe/AboutMe';
import { Box } from '@mui/material';
import Projects from './Components/MyProjects/myProjects';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';

const sectionWrapperSx = {
  width: '100%',
  maxWidth: '1200px',
  px: { xs: 2, sm: 3 },
  py: { xs: '3rem', md: '4rem' },
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: '3rem', md: '4rem' },
  mx: 'auto',
};

function App() {
  return (
    <Box
      sx={{
        backgroundColor: '#282C34',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Header />
      <Hero />
      <Box className="App" sx={sectionWrapperSx}>
        <AboutMe />
        <Experience />
        <Education />
      </Box>
      <Skills />
      <Box className="App" sx={sectionWrapperSx}>
        <Projects />
        <Contact />
      </Box>
    </Box>
  );
}

export default App;
