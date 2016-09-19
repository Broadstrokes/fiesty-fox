import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'

class Home extends Component {
  render() {
    return (

      <div className="container-fluid container-home">

        <div className="row">
          <div className="col-md-9">
            <img src="http://placehold.it/700x400" className="intro-pic" />
          </div>
          <div className="col-md-3 intro-right">
            <p>
              <span><i className="fa fa-phone fa-3x"></i></span>  (123)456-7890
            </p>
            <a className="btn btn-social-icon btn-facebook" href="#" target="_blank">
              <span className="fa fa-facebook fa-3x"></span><span>Visit us on Facebook!</span>
            </a>
          </div>
        </div>
            
        <hr></hr>

        <div className="row">
          <div className="col-md-8 welcome">
            <h1>Welcome to Yu Dentistry</h1>
            <p>
                Welcome to ______. We are committed to providing comprehensive oral care to our patients while upholding outstanding ethics. 
              We have been providing dental services in the Greater Vancouver Region since 1998. Our office is conveniently located at 
              809 West 41st Ave in Vancouver with easy transit and parking access.
              Our mission statement is to provide individualized, patient-centered, exceptional care using the latest technologies 
              in order to improve the overall health and well-being of our patients. We are also dedicated to continuous education in order 
              to provide the best treatment options and techniques for our patients.
            </p>
          </div>

          <div className="col-md-4">
            <p>afhweildsjk</p>
          </div>

        </div>
        
      </div>

    );
  }
}
