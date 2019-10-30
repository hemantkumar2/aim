import React from 'react';
import Jumbotron from './Components/Jumbotron'

const Classroom = () => {
  return (
    <div>
      <Jumbotron />

      <h1 className='my-3'>CLASSROOM COURSES</h1>
      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="bard-body">
                <h4>School Tuition</h4>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="bard-body">
                <h4>SSC/Railway/Vyapam</h4>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="bard-body">
                <h4>BANK</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classroom;
