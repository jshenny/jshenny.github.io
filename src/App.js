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
    <div className="flex md:flex-row flex-col gap-5 justify-center w-full md:max-w-3xl mx-auto mt-[18vh] p-4">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>

  );
}

export default App;
