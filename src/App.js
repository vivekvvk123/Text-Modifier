
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
    }
    else{
      setMode('light');
    }
  }
  
  return (
    <div>
      <Navbar modde={mode} />

      <TextForm />

      <About />
 
    </div>
  );
}

export default App;
