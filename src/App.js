
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {

  const [mode , setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17,24,39)';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  
  return (
    <div>
      <Navbar modde={mode} toggleModde={toggleMode}/>

      <TextForm modde={mode}/>

      <About />
 
    </div>
  );
}

export default App;
