import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <Router history={browserHistory}>

    <Route path="/" component={App}>
		<Route path="/Nav" component={Nav}/>
		<Route path="/Home" component={Home}/>
		<Route path="/Footer" component={Footer}/>
	</Route>

  </Router>,
  document.getElementById('root')
);
