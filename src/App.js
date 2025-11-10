import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe';
import { Container, Box } from '@mui/material';
import Projects from './Components/MyProjects/myProjects';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills'


function App() {
  return (
    <Box sx={{ backgroundColor: '#282C34' }}>
      <Hero />
      <Header />
      <Container className="App" >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          <AboutMe />
          <Projects />
          <Contact />
          <Skills />
        </Box>
      </Container>
    </Box >
  );
}

export default App;
