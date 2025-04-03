import React from 'react';
import Slider from './Components/slider';
import Header from './Components/Header';
import './App.css';
import Aboutus from './Components/Aboutus';
import Whatdou from './Components/Whatdou';


function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Aboutus/>
      <Whatdou/>
    </div>
  );
}

export default App;
