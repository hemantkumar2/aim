import React from 'react';
import Jumbotron from './Components/Jumbotron'
import Location from './Components/Location'
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
                <img src="assets/contact.svg" alt="" width='350px' />
                <p>
                  <i class="fas fa-phone-alt fa-2x"></i>
                </p>
                <p className='contact-content text-muted mt-2'>+91-97525-00860</p>
                <p className='contact-content text-muted'>+91-7000-94727</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Location />
    </div>
  );
}

export default Contact;
