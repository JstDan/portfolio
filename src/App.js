import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import { Container, Box } from '@mui/material';
import Projects from './Components/MyProjects/myProjects';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <Box sx={{ backgroundColor: '#282C34' }}>
      <Container className="App" >
        <Header />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          <Hero />
          <Projects />
          <Contact />
        </Box>
      </Container>
    </Box >
  );
}

export default App;
