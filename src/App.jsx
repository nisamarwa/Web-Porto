import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderResponsive } from './components/Navbar';
import ProjectsPage from './pages/Projects';
import HomePage from './pages/Home';
import { ContactUs } from './pages/Contacts';

function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = () => {
    const nextColorScheme = colorScheme === "light" ? "dark" : "light";
    setColorScheme(nextColorScheme);
  }
  console.log(window.location)
  
    return (
    <>
    <Router>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <HeaderResponsive/>
          <Routes>
           <Route path="/" element={<HomePage/>} />
           <Route path="/projects" element={<ProjectsPage/>} />
           <Route path="/contacts" element={<ContactUs/>} />
          </Routes>
      </MantineProvider>
      </ColorSchemeProvider>
      </Router>
    </>
      
    
  );
}

export default App;
