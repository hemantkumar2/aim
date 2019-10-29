import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div d-flex >
      <div className="row footer wrap no-gutters ">
        <div className="col-12 ">
          <div className="container mt-5">
            <Link to='/about' className='mr-3 footer-content'>About Us</Link>
            <Link to='/why_us' className='mr-3 footer-content'>Why Us</Link>
            <Link to='/terms' className='mr-3 footer-content'>Terms and Conditions</Link>
            <Link to='/tutors' className='mr-3 footer-content'>Tutors</Link>
            <Link to='/privacy' className='mr-3 footer-content'>Privacy Policy</Link>
            <Link to='/faqs' className='mr-3 footer-content'>FAQ's</Link>
          </div>
          <div>
            <p className='footer-content my-3'>&copy; 2019 Aim Career Institute</p>
          </div>
          <div>
            <a href="https://www.instagram.com" target='blank'>
              <i className="text-white mr-3 fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.facebook.com">
              <i className="text-white mr-3 fab fa-facebook fa-2x" ></i>
            </a>
            <a href="https://www.youtube.com">
              <i className="text-white fab mr-3 fa-youtube-square fa-2x"></i>
            </a>
            <a href="https://www.twitter.com">
              <i class="fab text-white mr-3 fa-twitter-square fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com">
              <i className="text-white fab mr-3 fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Footer;
