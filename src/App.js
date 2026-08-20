import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import React from "react";

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Navbar />
      <div className="flex flex-col flex-1">
        <main className="flex-1 w-[90%] max-w-5xl mx-auto p-4">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;