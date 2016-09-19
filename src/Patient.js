import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'

class Patient extends Component {
  render() {
    return (

      <div className="container-fluid container-patient">

        <section className="row patient-section" id="scheduling">
          <div className="col-md-12">
            <h3>Scheduling</h3>
            <p>
              Please call us at 604-266-8602 to schedule an appointment. We will try our best to get you in at a 
            convenient time as soon as possible.
            </p>
            <p>
              If you have an emergency situation or are in pain, every attempt will be made to see you that day.
            </p>
            <p>
              When you arrive, please check in with the front desk, and there may be a short wait as unexpected 
            delays and situations may have occurred. We greatly appreciate your patience in that regard.
            </p>
          </div>
        </section>

        <hr></hr>

        <section className="row patient-section" id="first-visit">
          <div className="col-md-12">
            <h3>First Visit</h3>
            <p>
                At your first visit, please assist us by providing the following information:
            </p>
            <br></br>
            <p>
                1)  A list of medications you are presently taking
            </p>
            <p>
                2)  Any x-rays that may have been taken recently at another dental office. These can be forwarded 
            to us through e-mail, our office e-mail is drjuiyu@gmail.com
            </p>
            <p>
                3)  Any information pertaining to your dental insurance. This will help us greatly with expediting the process of any claims.
            </p>
            <br></br>
            <p>
                Please also let us know if you have a medical condition that may be of concern (eg. Diabetes, high blood pressure, 
              a history of heart, liver, or kidney disease) and any allergies you may have. We are dedicated to provide you with 
              the safest level of care possible, and a thorough medical history will help us do so.
            </p>
          </div>
        </section>

        <hr></hr>

        <section className="row patient-section" id="insurance">
          <div className="col-md-12">
            <h3>Insurance</h3>
            <p>
                We accept most Canadian dental insurance policies. We accept direct payment of benefits from your insurance provider 
              but do require your portion of payment at the time of service.
            </p>
            <p>
                Please feel free to contact us if you have questions about your insurance policy. Our staff will do our best to get any 
              doubts clarified.
            </p>
          </div>
        </section>

        <hr></hr>

        <section className="row patient-section" id="additional-links">
          <div className="col-md-12">
            <h3>Additional Links</h3>
            <p>
                <a href="https://yourdentalhealth.ca">Yourdentalhealth.ca</a> provides general information on many dental topics.
            </p>
            <p>
                <a href="http://www.mouthhealthy.org/en/az-topics/e/eruption-charts">American Dental Association’s guide to tooth eruption sequence</a>
            </p>
            <p>
                <a href="https://mouthhealthy.org">American Dental Association’s website for the general public</a>
            </p>
            <p>
                <a href="http://www.ada.org/~/media/ADA/Publications/Files/patient_05.pdf?la=en">Root Canal Rationale</a>
            </p>
          </div>
        </section>

      </div>

    );
  }
}
