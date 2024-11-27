import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import App from './App';
import About from './About';
import Education from './Education';
import Hobbies from './Hobbies';
import Photos from './Photos';
import Missing from './Missing';



const Path = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/projects" element={<Missing />} />

      </Routes>
      </Router>
    );
}
export default Path