

import React from 'react';
import Jumbotron from './Components/Jumbotron';
import './WhyUs.css'

const WhyUs = () => {
  return (
    <div>
      <Jumbotron />
      <h1>WhyUs</h1>
      <div className="row no-gutters offset-2 mt-4">
        <div className="col-md-3 mr-5">
          <div className="card">
            <div className="card-body">
              <h4>Trust</h4>
              <p className='text-muted'>
                AIM Career Institute is one of the most trusted Government jobs coaching centers in Bilaspur.
                 Known for offering high quality career guidance to the aspirants.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mr-5">
          <div className="card">
            <div className="card-body">
              <h4>Experienced Faculty</h4>
              <p className='text-muted'>
                We have a team of Bilaspurs’s Experienced and Highly Qualified faculties who are ready to train and
                help aspirants to achieve goals like clearing in minimum possible time.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mr-5">
          <div className="card">
            <div className="card-body">
              <h4>Personal Attention</h4>
              <p className='text-muted'>
                Liberal hours of personal attention ensure that learners do not lag behind and stay on track.
                 To justify this we keep an optimum number students per batch so that personal attention can be given to students.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row no-gutters offset-2 mt-4">
        <div className="col-md-3 mr-5">
          <div className="card">
            <div className="card-body">
              <h4>Best Study Materials</h4>
              <p className='text-muted'>
                Always Carefully chosen best study material provided to learners saves their time and keeps them focused.
                  We provide best study materials, so that aspirants can crack the exam with in minimal time duration.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mr-5">
          <div className="card">
            <div className="card-body">
              <h4>Experienced Faculty</h4>
              <p className='text-muted'>
                We have a team of Bilaspur’s Experienced and Highly Qualified faculties who are ready to train and
                help aspirants to achieve goals like clearing in minimum possible time.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mr-5">
          <div className="card">
            <div className="card-body">
              <h4>Personal Attention</h4>
              <p className='text-muted'>
                Liberal hours of personal attention ensure that learners do not lag behind and stay on track.
                 To justify this we keep an optimum number students per batch so that personal attention can be given to students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
