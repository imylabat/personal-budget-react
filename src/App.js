import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import LoginPage from './LoginPage/LoginPage';
import AboutPage from './AboutPage/AboutPage';

function App() {
  return (
    <Router> 
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Routes>
           <Route path="/about">
            <AboutPage/>
           </Route>
           <Route path="/login">
            <LoginPage/>
           </Route>
           <Route path="/">
            <HomePage/>
           </Route>
        </Routes>
      </div>
      <HomePage/>
      <Footer/>
    </Router>
  );
}

export default App;
