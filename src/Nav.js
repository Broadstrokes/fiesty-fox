import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'

class Nav extends Component {
  render() {
    return (
      <nav id="mainnav" className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid container-nav">
      <div className="navbar-header">

        <a className="navbar-brand" href="#"><img src="/img/yu_icon4.jpg" alt="MC2 Dentistry" className="nav-logo"></img></a>

      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li>
            <a href="#" id="dentists">Our Dentists</a>
          </li>
          <li>
            <a href="#" id="services">Services</a>
          </li>
          <li>
            <a href="#" id="patient-info">Patient Info</a>
          </li>
          <li>
            <a href="#" id="contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
  }
}
