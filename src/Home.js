import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


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
      <div className="container">
        <div className="row mt-5">
          <div className="col-3">
            <div className="card">
              <div className="card-body">
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-body">
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-body">
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-body">
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
