
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import React, { useState } from 'react';







function App() {

  const [mode,setMode] =useState('light');//wethir dark mode is enabled or not

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
  
  
  <Navbar title="TextHammer" aboutText="about us" mode={mode} toggleMode={toggleMode}/>
  <div className="container">
  <TextForm headline="Enter your Text for Analyzing"/>
  </div>
  
  

    </>
  );
}

export default App;
