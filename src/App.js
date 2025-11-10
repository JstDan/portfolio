import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe';
import { Container, Box } from '@mui/material';
import Projects from './Components/MyProjects/myProjects';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';


function App() {
  return (
    <Box sx={{ backgroundColor: '#282C34', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Hero />
      <Header />
      <Box className="App" sx={{ display: 'flex', gap: '4rem', flexDirection: 'column', maxWidth: '1200px', py: '4rem' }}  >
        <AboutMe />
        <Experience />
        <Education />
      </Box>
      <Skills />
      <Box className="App" sx={{ display: 'flex', gap: '4rem', flexDirection: 'column', maxWidth: '1200px', py: '4rem' }}  >
        <Projects />
        <Contact />
      </Box>
    </Box >
  );
}

export default App;
