import React, { Component } from 'react';
import { IndexLink } from 'react-router'
import NavLink from './NavLink'

export default class Footer extends Component {
  render() {
    return (

      <footer className="footer-distributed">

        <div className="footer-left">

          <a className="footer-logo"><IndexLink to="/"><img src="/img/yu_icon3_cropped.jpg" alt="MC2 Dentistry"></img></IndexLink></a>

          <p className="footer-links">
            <IndexLink to="/">Home</IndexLink>
            · 
            <NavLink to="/dentists">Our Dentists</NavLink>
            · 
            <NavLink to="/services">Services</NavLink>
            · 
            <NavLink to="/patient">Patient Info</NavLink>
            · 
            <NavLink to="/contact">Contact Us</NavLink>
          </p>

          <p className="footer-company-name">MC2 Dental &copy; 2016</p>
        </div>

        <div className="footer-center">

          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>#115-809 West 41st Ave.</span> Vancouver, B.C. V5Z 2N6</p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>(604) 266 - 8602</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@mc2dental.com">support@mc2dental.com</a></p>
          </div>

        </div>

        <div className="footer-right">

          <div className="footer-hours">
                
                    <div>
                      <h3>Office Hours</h3>
                      <hr></hr>
                      <ul>
                        <li>Monday - 9:30 am - 6:00 pm</li>
                        <li>Tuesday - 9:30 am - 6:00 pm</li>
                        <li>Wednesday - 9:30 am - 6:00 pm</li>
                        <li>Thursday - CLOSED</li>
                        <li>Friday - 9:30 am - 6:00 pm</li>
                        <li>Saturday - 9:30 am - 6:00 pm</li>
                        <li>Sunday - CLOSED</li>
                      </ul>
                    </div>

                  </div>

          <div className="footer-icons">

          </div>

        </div>

      </footer>
      );
  }
}