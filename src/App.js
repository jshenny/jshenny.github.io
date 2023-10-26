import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import React from "react";
import styles from "./index.css"

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex w-full mx-auto md:max-w-3xl sm:flex sm:items-center py-32 sm:justify-between">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
