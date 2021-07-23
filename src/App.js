import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Homepage from './components/pages/Homepage';
import Gamepage from './components/pages/Gamepage';




const App = () => {
  return (
    <Router>
      <div className="parent-container">
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Gamepage/:themeTitle" component={Gamepage} />
      </div>
    </Router>
  )
};

export default App;
