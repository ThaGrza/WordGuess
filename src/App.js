import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Homepage from './components/pages/Homepage';
import Wrapper from './components/Wrapper';
import Game from './components/Game';
import Footer from './components/Footer';
import words from './words.json';
import Themecard from './components/Themecard';




function App() {
  return (
    <Router>
      <div className="parent-container">
        <Header />
        <Route exact path="/" component={Homepage} />
      </div>
    </Router>
  )
};

export default App;
