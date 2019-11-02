import React from 'react';
import Jumbotron from './Components/Jumbotron'
import Location from './Components/Location'

const Classroom = () => {
  return (
    <div>
      <Jumbotron />
      <h1 className='my-5'>CLASSROOM COURSES</h1>
      <div className="container my-2">
        <div className="row">
          <div className="col-lg-4 mt-2 mt">
            <div className="card">
              <div className="bard-body">
                <img src="assets/img5.svg" alt="" width='150px' />
                <h4 className='mt-5 mb-3'>School Tuition</h4>
                <p>We provide tuition classes for all classes from 6th to 12th.
                  All subjects for class 6th to 10th and PCB, PCM, and commerce for class 11th and 12th.
                  We have experienced group of teachers, who has long experience of teaching in the specific field.
                  </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2 mt">
            <div className="card">
              <div className="bard-body">
                <img src="assets/img8.svg" alt="" width='250px' />
                <h4 className='mt-5 mb-3'>SSC/Railway/Vyapam/Bank</h4>
                <p>
                  We provide coaching classes for all government job aspirants like SSC,Railway,Bank, and CG Vyapam exams.
                    We have best faculty for Aptitude, Reasoning, English and General Studies.
                </p>

              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2 mt">
            <div className="card">
              <div className="bard-body">
                <img className='ml-5' src="assets/img1.svg" alt="" width='250px' />
                <h4 className='mb-3'>College</h4>
                <p>
                  We provide tuition classes for college student also.
                  All subjects for commerce and Arts stream. We have best faculty for the same who has broad knowledge of
                  subjects and veteran skills for teaching.
</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Location />
    </div>
  );
}

export default Classroom;
