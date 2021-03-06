import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div d-flex >
      <div className="row footer wrap no-gutters mt-1 ">
        <div className="col-12 ">
          <div className='container mt-3'>
            <a href="https://www.instagram.com" target='blank'>
              <i className="text-white mr-3 fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://www.facebook.com target='blank'">
              <i className="text-white mr-3 fab fa-facebook fa-lg" ></i>
            </a>
            <a href="https://www.youtube.com" target='blank'>
              <i className="text-white fab mr-3 fa-youtube-square fa-lg"></i>
            </a>
            <a href="https://www.twitter.com" target='blank'>
              <i class="fab text-white mr-3 fa-twitter-square fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com target='blank'">
              <i className="text-white fab mr-3 fa-linkedin fa-lg"></i>
            </a>
          </div>
          <div>
            <div className="container mt-2">
              <Link to='/about' className='mr-3 footer-content'>About Us</Link>
              <Link to='/why-us' className='mr-3 footer-content'>Why Us</Link>
              {/* <Link to='/terms' className='mr-3 footer-content'>Terms and Conditions</Link> */}
              <Link to='/faculty' className='mr-3 footer-content'>Tutors</Link>
              {/* <Link to='/privacy' className='mr-3 footer-content'>Privacy Policy</Link> */}
              {/* <Link to='/faqs' className='mr-3 footer-content'>FAQ's</Link> */}
            </div>
            <div className="row bottom-band">
              <div className="col-12 ">
                <p className='footer-content my-2'>&copy; 2019 Aim Career Institute</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Footer;
