import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import Main from './components/organisms/Main';
import Footer from './components/organisms/Footer';

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
