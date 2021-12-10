import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Service from './components/Service';
import Contact from './components/Contact';

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home}  />
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/service" component={Service}/>
      <Redirect to="/"/>
      
    </Switch>
      );
  
}

export default App;
