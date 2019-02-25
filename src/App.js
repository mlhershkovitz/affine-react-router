import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Animals from './Components/Animals/Animals.js'
import Plants from './Components/Plants/Plants.js'
import Home from './Components/Home/Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>React Router Affine Lecture</h1>
       <Router>
         <div>
           <h2>This element has no route!</h2>
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/plants">Plants</Link></li>
             <li><Link to="/animals">Animals</Link></li>
           </ul>
          <Route exact path="/" component={ Home } />
          <Route path="/plants" component={ Plants }/>
          <Route path="/animals" component={ Animals }/>
         </div>
       </Router>
      </div>
    );
  }
}

export default App;
