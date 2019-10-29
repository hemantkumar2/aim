import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className='header-nav'>
        <Navbar.Brand href="#home"><Link className='header-nav-brand' to='/'>AIM Career Institute</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link className='header-links ml-5' to='/about'>About</Link></Nav.Link>
            <Nav.Link><Link className='header-links' to='/classroom'>Classroom</Link></Nav.Link>
            <Nav.Link><Link className='header-links' to='/contact'>Contact</Link></Nav.Link>
            <Nav.Link><Link className='header-links' to='/faculty'>Faculty</Link></Nav.Link>
            <Nav.Link><Link className='header-links' to='/goal'>Goal</Link></Nav.Link>
            <Nav.Link><Link className='header-links' to='/media'>Media</Link></Nav.Link>
            <Nav.Link><Link className='header-links' to='/notification'>Notification</Link></Nav.Link>
            <Nav.Link><Link className='header-links' to='/student-section'>Student-Section</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
