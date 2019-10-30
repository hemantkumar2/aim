import React from 'react';
import Jumbotron from './Components/Jumbotron'
import AboutContent from './Components/AboutContent'

const About = () => {
  return (
    <div>
      <Jumbotron />
      <h1 className='mt-2'>About</h1>
      <AboutContent />
    </div>
  );
}

export default About;
