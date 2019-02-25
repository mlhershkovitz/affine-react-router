import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';

import Animals from './Components/Animals/Animals.js'
import Plants from './Components/Plants/Plants.js'
import Home from './Components/Home/Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>React Router Affine Lecture</h1>
       <HashRouter>
         <div>
           <ul>
             <li><a href="#/">Home</a></li>
             <li><a href="#/plants">Plants</a></li>
             <li><a href="#/animals">Animals</a></li>
           </ul>
          <Route exact path="/" component={ Home } />
          <Route path="/plants" component={ Plants }/>
          <Route path="/animals" component={ Animals }/>
         </div>
       </HashRouter>
      </div>
    );
  }
}

export default App;
