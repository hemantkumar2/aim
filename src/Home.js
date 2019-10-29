import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import AboutContent from './Components/AboutContent'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className='container-fluid mt-5'>
        <Carousel interval='2000'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/pic2.jpeg"
              alt="First slide"
              height="600"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/pic1.jpeg"
              alt="Third slide"
              height='600'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/pic3.jpeg"
              alt="Third slide"
              height='600'
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <AboutContent />
      <div className="container">
        <div className="row mt-5">
          <div className="col-4">
            <div className="card card-background">
              <div className="card-body">
                <div className="card-title">
                  <strong>Class VI to XII </strong>
                </div>
                <div className="card-body">
                  We provide tuition classes for all classes from 6th to 12th.
                  All subjects for class 6th to 10th and PCB, PCM, and commerce for class 11th and 12th.
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card card-background">
              <div className="card-body">
                <div className="card-title">
                  <strong>Government jobs </strong>
                </div>
                <div className="card-body">
                  We provide coaching classes for all government job aspirants like SSC,Railway,Bank, and CG Vyapam exams.
                  We have best faculty for Aptitude, Reasoning, English and General Studies.
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card card-background">
              <div className="card-body">
                <div className="card-title">
                  <strong>College Tuition </strong>
                </div>
                <div className="card-body">
                  We provide tuition classes for college student also.
                  All subjects for commerce and Arts stream. We have best faculty for the same who has broad knowledge of
                  subjects and veteran skills for teaching.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
