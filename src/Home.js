import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import AboutContent from './Components/AboutContent'
import Typical from 'react-typical'
import './Home.css'
const Home = () => {
  return (
    <div>
      <div className='container carousel-margin d-none d-md-block'>
        <Carousel interval='4000'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/pic6.jpeg"
              alt="First slide"
              height="600"
            />
            <Carousel.Caption>
              <p className='typing-font'>
                <Typical
                  loop={Infinity}
                  wrapper='b'
                  steps={[
                    'Welcome to AIM Career Institute!', 1000,
                    'We Shape Your Career!', 1000,
                    'We are one of the Leading Coaching institutes in Bilaspur.', 1000,
                    'We provide Coaching for Government Exams.', 1000,
                    'School coaching is also available for class 6th to 12th.', 1000,
                  ]}
                />
              </p>
              <p>AIM Career Institute, 2019</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/pic2.jpeg"
              alt="First slide"
              height="600"
            />
            <Carousel.Caption>
              <p className='typing-font'>
                <Typical
                  loop={Infinity}
                  wrapper='b'
                  steps={[
                    'Welcome to AIM Career Institute!', 1000,
                    'We Shape Your Career!', 1000,
                    'We are one of the Leading Coaching institutes in Bilaspur.', 1000,
                    'We provide Coaching for Government Exams.', 1000,
                    'School coaching is also available for class 6th to 12th.', 1000,
                  ]}
                />
              </p>
              <p>AIM Career Institute, 2019</p>
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
              <p className='typing-font'>
                <Typical
                  loop={Infinity}
                  wrapper='b'
                  steps={[
                    'Welcome to AIM Career Institute', 1000,
                    'We Shape Your Career!', 1000,
                    'We are one of the Leading Coaching institutes in Bilaspur.', 1000,
                    'We provide Coaching for Government Exams.', 1000,
                    'School coaching is also available for class 6th to 12th.', 1000,
                  ]}
                />
              </p>
              <p>AIM Career Institute, 2019</p>
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
              <p className='typing-font'>
                <Typical
                  loop={Infinity}
                  wrapper='b'
                  steps={[
                    'Welcome to AIM Career Institute!', 1000,
                    'We Shape Your Career!', 1000,
                    'We are one of the Leading Coaching institutes in Bilaspur.', 1000,
                    'We provide Coaching for Government Exams.', 1000,
                    'School coaching is also available from class 6th to 12th.', 1000,
                  ]}
                />
              </p>
              <p>AIM Career institute, 2019</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <AboutContent />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card card-background">
              <div className="card-body">
                <div className="card-title">
                  <strong>Class VI to XII </strong>
                </div>
                <div className="card-body">
                  We provide tuition classes for all classes from 6th to 12th.
                  All subjects for class 6th to 10th and PCB, PCM, and commerce for class 11th and 12th.
                  We have experienced group of teachers, who has long experience of teaching in the specific field.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
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
          <div className="col-md-4">
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
