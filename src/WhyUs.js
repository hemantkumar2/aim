

import React from 'react';
import Jumbotron from './Components/Jumbotron';
import './WhyUs.css'

const WhyUs = () => {
  return (
    <div>
      <Jumbotron />
      <h1 className='mb-3'>WhyUs</h1>
      <div className="row  container-fluid no-gutters mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className='my-3'>Trust</h4>
              <img src="assets/trust.svg" alt="" width='250px' />
              <p className='text-muted mt-3'>
                AIM Career Institute is one of the most trusted Government jobs coaching centers in Bilaspur.
                 Known for offering high quality career guidance to the aspirants.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className='my-3'>Experienced Faculty</h4>
              <img src="assets/experienced.svg" alt="" width='250px' />
              <p className='text-muted mt-3'>
                We have a team of Bilaspurs’s Experienced and Highly Qualified faculties who are ready to train and
                help aspirants to achieve goals like clearing in minimum possible time.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className='my-3'>Personal Attention</h4>
              <img src="assets/personal.svg" alt="" width='250px' />
              <p className='text-muted mt-3'>
                Liberal hours of personal attention ensure that learners do not lag behind and stay on track.
                 To justify this we keep an optimum number students per batch so that personal attention can be given to students.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className='my-3'>Best Study Materials</h4>
              <img src="assets/study-material.svg" alt="" width='250px' />
              <p className='text-muted mt-3'>
                Always Carefully chosen best study material provided to learners saves their time and keeps them focused.
                  We provide best study materials, so that aspirants can crack the exam with in minimal time duration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
