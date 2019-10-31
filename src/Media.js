import React from 'react';
import Jumbotron from './Components/Jumbotron'
import Typical from 'react-typical'
import './Media.css'


const Media = () => {
  return (
    <div>
      <Jumbotron />
      <h1>hemant</h1>
      <p>I am a
        <Typical
          loop={Infinity}
          wrapper='b'
          steps={[
            'Developer', 1000,
            'Designer', 1000,
          ]}
        />
      </p>
    </div >
  );
}

export default Media
