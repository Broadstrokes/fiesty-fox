import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var Alert = require('react-bootstrap').Alert;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Dentists />
        <Services />
        <Patient />
        <Contact />
        <Footer />
      </div>
    );
  }
}

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

class Dentists extends Component {
  render () {
    return (

      <div className="container-fluid container-dentists">
  
        <div className="dentists-intro-top">
          <h1>Meet Our Dentists</h1>
        </div>
        
        <div className="dentists-intro-bottom">
          This dynamic father-son duo will make your smile whiter than the US congress
        </div>
        
        <div className="container-fluid container-dentists-info">

          <section className="row dentists-section-left">
            <div className="col-md-4">
              <img src="http://placehold.it/300x400" />

            </div>
            <div className="col-md-8">
              <h3>Jui-Feng Yu</h3>
              <h4>D.D.S, General Dentist</h4>
              <hr className="dentist-hr-left"></hr>
              <p>
                  Dr. Jui-Feng (Ray) Yu was born and raised in Taiwan. He attended the prestigious Jianguo High School in Taipei, 
                and proceeded to study dentistry at Kaohsiung Medical University and graduated in 1987. While working in Taipei, 
                he received an offer to attend Northwestern University in Chicago to complete a 3-year Doctor of Dental Surgery 
                program. Graduating in 1994 from NUDS and successfully completing the American NERB and the American NBDE, he 
                then moved to beautiful Vancouver and completed the Canadian NDEB requirements. Since 1998, he’s been practicing 
                general dentistry in Vancouver while holding an active dental license in Illinois. He is passionate about learning 
                and using the newest techniques and biomaterials used in dentistry by attending study clubs of different disciplines. 
              </p>
              <p>
                  He is extremely proud to provide quality dentistry with a smile and a light-hearted attitude. In his spare time, 
                he enjoys watching movies, day hikes, and his wife’s fantastic cooking. He has previously been invited onto 
                Fairchild Radio and Talentvision across multiple years to give Q&As regarding dentistry. Dr. Yu is an active member 
                of the CDA, BCDA, and the CDSBC. 
              </p>
            </div>
          </section>

          <hr></hr>

          <section className="row dentists-section-right">
            <div className="col-md-8">
              <h3>Chi-Cheng Yu</h3>
              <h4>B.Sc, D.M.D, General Dentist</h4>
              <hr className="dentist-hr-right"></hr>
              <p>
                  Dr. Chi-Cheng (Joey) Yu was born in Taiwan and moved to Chicago at the age of 3 when his dad attended NUDS. He then 
                moved to Vancouver and graduated from Lord Byng Secondary in 2006, then studied Chemistry at UBC and received a B.Sc 
                in 2010. He then moved to the east coast to attend Boston University’s Henry M. Goldman School of Dental Medicine for 
                four years and graduated magna cum laude (high honours) and received his DMD degree. In his final year of dental school, 
                he successfully completed the American WREB, granting him licensure access to 16 American states, the American NBDE, 
                and also the Canadian NDEB. 
              </p>
              <p>
                  He enjoys providing welcome care to patients through a friendly and inviting manner. Dr. Joey is an active member of 
                  the CDA, BCDA, CDSBC, and the ADA. On his days off, he enjoys watching Korean dramas, staying “relatively” fit, and 
                  sharing funny moments with family and friends. 
              </p>
            </div>
            <div className="col-md-4">
              <img src="http://placehold.it/300x400" />

            </div>
          </section>

        </div>
      </div>

    );
  }
}

class Services extends Component {
  render() {
    return (

      <div className="container-fluid container-services">

        <section className="row services-menu">

          <div className="col-md-1">
            <a href="#exams-xrays">Exams and Digital X-Rays</a>
          </div>
          <div className="col-md-1">
            <a href="#periodontal-therapy">Periodontal Therapy</a>
          </div>
          <div className="col-md-1">
            <a href="#composite-restorations">Composite Restorations</a>
          </div>
          <div className="col-md-1">
            <a href="#dental-implants">Dental Implants</a>
          </div>
          <div className="col-md-1">
            <a href="#crowns">Crowns</a>
          </div>
          <div className="col-md-1">
            <a href="#dental-bridges">Dental Bridges</a>
          </div>
          <div className="col-md-1">
            <a href="#porcelain-veneers">Porcelain Veneers</a>
          </div>
          <div className="col-md-1">
            <a href="#endodontics">Endodontics (Root Canals)</a>
          </div>
          <div className="col-md-1">
            <a href="#complete-dentures">Complete Dentures</a>
          </div>
          <div className="col-md-1">
            <a href="#partial-dentures">Partial Dentures</a>
          </div>
          <div className="col-md-1">
            <a href="#flippers">Flippers</a>
          </div>
          <div className="col-md-1">
            <a href="#extractions">Extractions</a>
          </div>
        </section>

        <section className="row services-section" id="exams-xrays">
          <div className="col-md-6">
            <h3>Exams and Digital X-Rays</h3>
            <p>
                As a new patient, our dentists will evaluate your oral system to comprehensively 
              determine what treatment options are recommended. This involves evaluating each tooth, 
              checking for any signs of gum disease, biting problems, and also an oral cancer screening 
              exam. Our office also provides digital x-rays instead of the traditional film system. 
              Advantages of this include an almost instantaneous image of the area captured displayed 
              on a monitor. This allows chairside explanation with the patient to determine what’s going on.
              Digital x-rays also provide a more detailed resolution than films, making earlier detection 
              and treatment of problems a reality. Most importantly, digital x-rays decreases radiation 
              exposure to you.
            </p>
            <a href="#">Back to top</a>
          </div>
          <div className="col-md-6">
            <img src="http://placehold.it/600x300" className="img-right" />
          </div>
        </section>

        <hr></hr>

        <section className="row services-section" id="periodontal-therapy">
          <div className="col-md-6">
            <img src="http://placehold.it/600x300" className="img-left" />
          </div>
          <div className="col-md-6">
          <h3>Periodontal Therapy</h3>
            <p>
                The foundation and surrounding structures of our teeth is known as the periodontium.
              Many factors can cause the periodontium to become diseased and inflamed. If left untreated, 
              this could cause receding gums, tooth loss, and subsequent drifting of other teeth which 
              can change the appearance of your smile. We provide individualized specific treatment options 
              for each of our patients to help maintain a healthy periodontium.
            </p>
            <a href="#">Back to top</a>
          </div>
        </section>

        <hr></hr>

        <section className="row services-section" id="composite-restorations">
          <div className="col-md-6">
            <h3>Composite Restorations</h3>
            <p>
                Composite Restorations – These are also known as white fillings. At our office, we are 
              proud to provide bonded composite resin restorations as opposed to the traditional silver 
              amalgams. These can be used to repair decayed and chipped teeth to help you restore your 
              smile and bite. In today's day and age, the colours now match very well with the vast 
              majority of people's teeth, such that even you may not notice that there's a filling there 
              after we finish!
            </p>
            <p>
                <strong>Procedure:</strong> As with all fillings, any decay or compromised tooth structure must first be 
              removed by a dentist to ensure that the filling material lies on sound tooth structure. 
              Then, the tooth is dried and prepared for the bonding agent to do its job to ready the tooth 
              for the filling material. A bright blue light is then used to activate the bonding agent 
              before the filling is placed. Then, our dentists will shape the filling to its correct 
              anatomical form and then polish it so that it's hard for people to discern that you've had 
              dental work done!
            </p>
            <a href="#">Back to top</a>
          </div>
          <div className="col-md-6">
            <img src="http://placehold.it/600x300" className="img-right" />
          </div>
        </section>

        <hr></hr>

        <section className="row services-section" id="dental-implants">
          <div className="col-md-6">
            <img src="http://placehold.it/600x300" className="img-left" />
          </div>
          <div className="col-md-6">
            <h3>Dental Implants</h3>
            <p>
                An excellent option for many patients to replace a missing or soon-to-be-missing tooth. 
              These are made of a biocompatible titanium alloy in the shape of a little screw that is 
              placed into the bone to replace the roots of a tooth. After a period of healing time, the 
              implant is then exposed, and an impression is taken of the structures around it. 
              A laboratory then fabricates an implant-supported crown based on the shape of your teeth 
              to restore esthetics and function.
            </p>
            <a href="#">Back to top</a>
          </div>
        </section>

        <hr></hr>

        <section className="row services-section" id="crowns">
          <div className="col-md-6">
            <h3>Crowns</h3>
            <p>
                When a tooth is compromised such that a filling may not be the best option for the 
              longevity of the tooth, a crown is a full coverage restoration that’ll protect the 
              tooth more completely. These can be made from a variety of materials, such as all-ceramic, 
              porcelain-fused-to-metal, or a gold alloy. This procedure requires 2 or more appointments 
              spread out over a week or two, as a dental laboratory technician is needed to fabricate 
              a crown custom made for your teeth. In the meantime, we will provide you with a temporary 
              crown to help you protect the remaining tooth structure and to provide a “test-run” for 
              what the final shape and bite of the tooth feels like.
            </p>
            <a href="#">Back to top</a>
          </div>
          <div className="col-md-6">
            <img src="http://placehold.it/600x300" className="img-right" />
          </div>
        </section>

        <hr></hr>

        <section className="row services-section" id="dental-bridges">
          <div className="col-md-6">
            <img src="http://placehold.it/600x300" className="img-left" />
          </div>
          <div className="col-md-6">
            <h3>Dental Bridges</h3>
            <p>
                A fixed, as opposed to removable (such as dentures), option to replace a missing tooth 
              or teeth. This consists of 3 or more fused crowns extending from one anchor tooth to 
              the other, with artificial teeth attached in the middle. Similar to crowns, these will 
              usually require 2 appointments to complete.
            </p>
            <a href="#">Back to top</a>
          </div>
        </section>

        <hr></hr>

        <section className="row services-section" id="porcelain-veneers">
          <div className="col-md-6">
            <h3>Porcelain Veneers</h3>
            <p>
                These are fixed prosthetics used primarily to enhance the appearance of one’s front teeth. 
              Candidate teeth include those that are slightly chipped, show superficial crack lines, 
              or are discolored internally for a variety of reasons. Made of an all-ceramic material, 
              these are bonded to your teeth similar to white fillings to ensure longevity. Similar to 
              crowns, these usually require 2 appointments. In the transition waiting time while a dental 
              laboratory makes the porcelain veneer, a temporary veneer will be fabricated for you to 
              protect the tooth and your smile.
            </p>
            <a href="#">Back to top</a>
          </div>
          <div className="col-md-6">
            <img src="http://placehold.it/600x300" className="img-right" />
          </div>
        </section>

        <hr></hr>

        <section className="row services-section" id="endodontics">
          <div className="col-md-6">
            <img src="http://placehold.it/600x300" className="img-left" />
          </div>
          <div className="col-md-6">
            <h3>Endodontics (Root Canals)</h3>
            <p>
                Trauma to a tooth, either through blunt force or dental decay, can irritate the nerve of a tooth. 
              If this irritation leads to bacteria entering the nerve, or pulp, of a tooth, the pulp often can’t 
              heal itself and becomes infected. This infected pulp can cause pain and swelling that does not go 
              away by itself. If this is the situation, a root canal therapy is indicated to remove the infected 
              pulp to get rid of the symptom. Contrary to popular belief, root canals help relieve one from pain, 
              not cause additional pain. 
            </p>
            <p> 
                <strong>Procedure:</strong> To keep you comfortable, we first anesthesize the area. Then, we need to access the 
              pulp chamber through the tooth in order to clean and shape the canals of the pulp, which is where 
              the bacteria lie. After that, sometimes it’s best to leave some medication in the canal space to help 
              disinfect the tooth even more, and at the next appointment, to fill the now clean canals with a 
              natural inert tree rubber called gutta percha. Then, we have to restore the tooth, usually with a 
              full coverage restoration such as a crown, or in some cases, a direct bonded composite restoration. 
            </p>
            <a href="#">Back to top</a>
          </div>
        </section>

        <hr></hr>

        <section className="row services-section" id="complete-dentures">
          <div className="col-md-6">
            <h3>Complete Dentures</h3>
            <p>
                When all teeth are missing on either the upper or lower jaw, a complete denture can be fabricated 
              to restore esthetics, form, and function. For additional stability and retention, implants can be 
              used to secure a denture more firmly in place. These are custom made for each individual of course!
            </p>
            <a href="#">Back to top</a>
          </div>
          <div className="col-md-6">
            <img src="http://placehold.it/600x300" className="img-right" />
          </div>
        </section>

        <hr></hr>

        <section className="row services-section" id="partial-dentures">
          <div className="col-md-6">
            <img src="http://placehold.it/600x300" className="img-left" />
          </div>
          <div className="col-md-6">
            <h3>Partial Dentures</h3>
            <p>
                When a few teeth are missing in one jaw, a removable partial denture can be a good option to restore 
              these teeth. They can either have a metal backbone or can be all acrylic, depending on the situation. 
              These are helpful in not only providing good biting power, but to prevent the drifting of nearby teeth 
              which can result in a change in the alignment of your teeth and smile.
            </p>
            <a href="#">Back to top</a>
          </div>
        </section>

        <hr></hr>

        <section className="row services-section" id="flippers">
          <div className="col-md-6">
            <h3>Flippers</h3>
            <p>
                A subsection of partial dentures. These are often made as a temporary solution for people who are 
              missing a front tooth due to trauma. Usually all acrylic, these depend on grabbing onto nearby 
              teeth to replace a missing front tooth for esthetic reasons.
            </p>
            <a href="#">Back to top</a>
          </div>
          <div className="col-md-6">
            <img src="http://placehold.it/600x300" className="img-right" />
          </div>
        </section>

        <hr></hr>

        <section className="row services-section" id="extractions">
          <div className="col-md-6">
            <img src="http://placehold.it/600x300" className="img-left" />
          </div>
          <div className="col-md-6">
            <h3>Extractions</h3>
            <p>
                Sometimes, despite our best efforts, a tooth cannot or should not be kept in the mouth. 
              Our team will determine the diagnosis and prognosis of a tooth and whether or not a specialist 
              is needed to remove the tooth. If so, we will communicate with the specialist and forward all 
              x-rays and instructions to them. If a specialist is not required, one of our team members can 
              take out the tooth for you. Then, if recommended, treatment options will be presented to you 
              to determine the options to replace the missing tooth.
            </p>
            <a href="#">Back to top</a>
          </div>
        </section>

      </div>

    );
  }
}

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

class Contact extends Component {
  render() {
    return (

    <section className="container-contact">
      <div className="container-fluid container-contact-top">
        <div className="row">

          <div className="col-md-5">

            <h3>We'd love to hear from you!</h3>

            <hr></hr>

            <h3>Call us: (123) 456-7890</h3>
            <p>We offer morning, evening and weekend appointments.</p>
            <p>We're better than Surrey dentists!</p>
            <br></br>
            <h4><strong>Yu Dental Clinic</strong></h4>
            <p>#115-809 West 41st Ave.</p>
            <p>Vancouver, B.C.</p>
            <p>v5z 2n6</p>

          </div>

          <div className="col-md-7">

            <h3>Send us a message!</h3>

            <hr></hr>

            <form id="contact-form" method="post" action="contact.php" role="form">

              <div className="messages"></div>

              <div className="controls">

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_name">First name *</label>
                      <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your first name" required="required" data-error="First name is required."></input>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_lastname">Last name *</label>
                      <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your last name" required="required" data-error="Last name is required."></input>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_email">Email *</label>
                      <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email" required="required" data-error="Valid email is required."></input>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_phone">Phone</label>
                      <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone number"></input>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="form_message">Message *</label>
                      <textarea id="form_message" name="message" className="form-control" placeholder="Please enter a message" rows="4" required="required" data-error="Please leave us a message."></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <input type="submit" className="btn btn-send" value="Send message"></input>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-md-12">
                    <p className="text-muted"><strong>*</strong> These fields are required.</p>
                  </div>
                </div>
              </div>

            </form>

          </div>

        </div>
      </div>


      <div className="map-overlay" onClick="style.pointerEvents='none'"></div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.230407141898!2d-123.12650304848933!3d49.23412067922456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674784b15bc01%3A0xae34069b5daad2f9!2sYu+Jui-Feng+Dr!5e0!3m2!1sen!2sus!4v1472004274023" 
      width="100%" height="500" frameBorder="0" styles="border:0" allowFullScreen></iframe>

    </section>

    );
  }
}

export default App;
