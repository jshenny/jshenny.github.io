import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
                  {/* <Routes>
                      <Route exact path='/' exact element={<Home />} />
                      <Route path='/about' element={<About />} />
                      <Route path='/contact' element={<Contact />} />
                      <Route path='/blogs' element={<Blogs />} />
                      <Route path='/sign-up' element={<SignUp />} />
                  </Routes> */}
    </div>
  );
}

export default App;
