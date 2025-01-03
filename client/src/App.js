import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutMe from './pages/About/About.js';
import Menus from './components/Menus/Menus';
import Skills from './pages/Skills/Skills.js';
import Contact from './pages/Contact/Contact.js';
import Projects from './pages/Projects/Project.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <div className='h-screen w-screen '>
      <Router>
        <div>
          <Menus />
        </div>
        <div className='pt-14'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
