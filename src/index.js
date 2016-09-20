import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import Dentists from './Dentists'
import Services from './Services'
import Patient from './Patient'
import Contact from './Contact'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home}/>
  		<Route path="/dentists" component={Dentists}/>
      <Route path="/services" component={Services}/>
      <Route path="/patient" component={Patient}/>
      <Route path="/contact" component={Contact}/>
	 </Route>
  </Router>,
  document.getElementById('root')
);
