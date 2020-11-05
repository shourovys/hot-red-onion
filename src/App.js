import React from 'react';
import './App.css'
import Home from './Components/HomeContainer/Home/Home';
import Navbar from './Components/HomeContainer/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;