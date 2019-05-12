import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './normalize.css';
import HomePage from './components/homePage/homePage.js';

function App() {
  return <Router>
    <HomePage/>
  </Router>;
}

export default App;
