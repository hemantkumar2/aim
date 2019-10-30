import React from 'react';
import Jumbotron from './Components/Jumbotron'
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <Jumbotron />
      <h1>Contact Us</h1>
      <div className="container">
        <div className="row no-gutters">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <i class="fas fa-phone-alt fa-2x"></i>
                <p className='contact-content text-muted mt-2'>+91-97525-00860</p>
                <p className='contact-content text-muted'>+91-7000-94727</p>
              </div>
            </div>
          </div>
          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <p className='contact-content text-muted mt-2'>
                  Near ICICI bank, NH-7, Mangla Chowk,
                </p>
                <p className='contact-content text-muted'>
                  Beside Hotel Marriot, Bilaspur, Chhattisgarh 495001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
