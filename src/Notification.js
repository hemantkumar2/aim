import React from 'react';
import Jumbotron from './Components/Jumbotron'


const Notification = () => {
  return (
    <div>
      <Jumbotron />
      <h1 className='mb-4'>Notification</h1>
      <img src="assets/updates.svg" alt="" width='400px' />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body text-left">
                <p>
                  1. New class for SSC starting from 12-11-2019.
                </p>
                <p>
                  2. New class for IBPS Clerk starting from 09-11-2019.
                </p>
                <p>
                  3. Batch of 23 AUG will be merged with 16 july batch.
                </p>
                <p>
                  4. Aspirants are invited to join online test series.
                </p>
                <p>
                  3. Registration for star performer contest started.
                </p>
                <p>
                  4. Winners of last star performer contest are requested to collect their prize.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
