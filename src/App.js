import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Button  from './components/Button';
import { Home } from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

import Project from './components/Projects/Project';
import Contact from './components/Contacts/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />} />

        <Route path='/projects' element = { <Project />}/>
        <Route path='/contact' element = { <Contact/> } />

      </Routes>


    </>
  );
}

export default App;
