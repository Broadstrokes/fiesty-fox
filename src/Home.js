import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (

      <div className="container-fluid container-home">

        <div className="home-header">

          <img src="/img/yu_icon3_cropped.jpg" className="home-logo" alt="MC2 Dentistry"></img>

        </div>

        <div className="home-banner">

          <img src="http://wallstdentalspanyc.com/wp-content/uploads/section-dental-chair1-1500x500.jpg" className="home-pic" />

        </div>

        <div className="container-fluid container-home-info">

              <h1>Welcome to MC2 Dental Clinic</h1>
              <hr></hr>
              <p>
                  Welcome to MC2 Dental Clinic. We are committed to providing comprehensive oral care to our patients while upholding outstanding ethics. 
                We have been providing dental services in the Greater Vancouver Region since 1998. Our office is conveniently located at 
                809 West 41st Ave in Vancouver with easy transit and parking access.
                Our mission statement is to provide individualized, patient-centered, exceptional care using the latest technologies 
                in order to improve the overall health and well-being of our patients. We are also dedicated to continuous education in order 
                to provide the best treatment options and techniques for our patients.
              </p>

        </div>
      </div>
    );
  }
}
