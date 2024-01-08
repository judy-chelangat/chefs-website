import './index.css';
import React from 'react';
import About from './routes/About';
import Contact from './routes/Contact';
import Services from './routes/Services';
import Home from './routes/Home';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route exact path ='/' element={<Home/>}/>
      <Route path ='/contacts' element={<Contact/>}/>
      <Route path ='/about' element={<About/>}/>
      <Route path ='/services' element={<Services/>}/>
    </Routes>
    </>
  );
}

export default App;
