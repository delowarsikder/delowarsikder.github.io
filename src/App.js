import React from 'react';
import './App.css';
import ParticlesBg from 'particles-bg'
import Main from './components/main'
import Particles from 'react-particles-js';

function App() {
  return (
    <div>
	<div id="particle"><ParticlesBg type="cobweb" bg={true} num={40} color="#000000"/></div>
	 
      <Main/>
    </div>
  );
}

export default App;
