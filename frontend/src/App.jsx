import './App.css';
import "./Components/CSS/utils.css";
import "./Components/CSS/style.css";

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Project from './Components/Project';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import State from './Components/Context/State';

function App() {
  return (
    <div className="App">
      <State>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route path='/projects/:projectID' element={<Project />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </State>
    </div>
  );
}

export default App;
