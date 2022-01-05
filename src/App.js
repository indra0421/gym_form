import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import index from './index.css'
import Home from './Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Fitness from './Fitness'
import About from './About'
import Contact from './Contact'
import { useEffect } from 'react';
import Menu from './Menu';

function App() {

  
  return (
    <>

      <Menu/>
      <Routes>

        <Route exact path='' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/fitness' element={<Fitness/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}
export default App;

