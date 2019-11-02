import React from 'react';
import Jumbotron from './Components/Jumbotron'
import './Faculty.css'


const Faculty = () => {
  return (
    <div>
      <Jumbotron />
      <h1>Faculty</h1>
      <img className='d-lg-none' src="assets/teacher.svg" alt="" width='250px' />
      <img className='d-none d-lg-block faculty-left-margin' src="assets/teacher.svg" alt="" width='450px' />
      <div className="container">
        <div className="row text-left">
          <div className="col-md-6 ">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <img className='rounded-circle circle-width m-5' src="assets/img1.png" alt="" />
                  </div>
                  <div className="col-6 text-left mt-5">
                    <p><strong>Name:</strong> JOHN DOE</p>
                    <p><strong>Subject: </strong>Maths</p>
                    <p><strong>Qualification:</strong> B Sc. (Physics)</p>
                    <p><strong>Experience:</strong> 5 Years</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <img className='rounded-circle circle-width m-5' src="assets/img1.png" alt="" />
                  </div>
                  <div className="col-6 text-left mt-5">
                    <p><strong>Name:</strong> JOHN DOE</p>
                    <p><strong>Subject: </strong>Maths</p>
                    <p><strong>Qualification:</strong> B Sc. (Physics)</p>
                    <p><strong>Experience:</strong> 5 Years</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <img className='rounded-circle circle-width m-5' src="assets/img1.png" alt="" />
                  </div>
                  <div className="col-6 text-left mt-5">
                    <p><strong>Name:</strong> JOHN DOE</p>
                    <p><strong>Subject: </strong>Maths</p>
                    <p><strong>Qualification:</strong> B Sc. (Physics)</p>
                    <p><strong>Experience:</strong> 5 Years</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <img className='rounded-circle circle-width m-5' src="assets/img1.png" alt="" />
                  </div>
                  <div className="col-6 text-left mt-5">
                    <p><strong>Name:</strong> JOHN DOE</p>
                    <p><strong>Subject: </strong>Maths</p>
                    <p><strong>Qualification:</strong> B Sc. (Physics)</p>
                    <p><strong>Experience:</strong> 5 Years</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
