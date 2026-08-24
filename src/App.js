import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Research from './components/Research'
import Footer from './components/Footer';
import React from "react";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full">
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='research' element={<Research/>}></Route>
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;