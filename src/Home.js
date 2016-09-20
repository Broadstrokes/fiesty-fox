import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (

      <div className="container-fluid container-home">

        <div className="home-header">

          <img src="/img/yu_icon3_cropped.jpg" className="home-logo" alt="MC2 Dentistry"></img>

        </div>

        <div>

          <img src="http://placehold.it/1500x500" className="home-pic" />

        </div>

        <div className="container-fluid container-home-info">

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
      </div>
    );
  }
}
