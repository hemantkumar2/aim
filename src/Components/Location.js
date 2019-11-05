import React from 'react';
import './Location.css'

const Location = () => {
  return (
    <div className='row no-gutters'>
      <div className="col-12 mb-2">
        <div className="card">
          <div className="card-body">
            <img className='ml-5' src="assets/pic11.svg" alt="" width='200px' />
            <p>
              <i class="fas fa-map-marker-alt mt-3 fa-2x"></i>
            </p>
            <p className='contact-content text-muted mt-2'>
              Near ICICI bank, NH-7, Mangla Chowk,
                </p>
            <p className='contact-content text-muted'>
              Bilaspur, Chhattisgarh 495001
                </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
