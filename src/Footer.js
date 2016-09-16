import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'

class Footer extends Component {
  render() {
    return (

      <footer className="footer-distributed">

        <div className="footer-left">

          <a className="footer-logo" href="#"><img src="/img/yu_icon3_cropped.jpg" alt="MC2 Dentistry"></img></a>

          <p className="footer-links">
            <a href="#">Home</a>
            · 
            <a href="#"> Our Dentists</a> 
            · 
            <a href="#"> Services</a> 
            · 
            <a href="#"> Contact Us</a> 
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

            <a href="#"><i className="fa fa-facebook"></i></a>

          </div>

        </div>

      </footer>
      );
  }
}