import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className='header-nav-color'>
        <Navbar.Brand href="#home"><Link className='header-font-color' to='/'>Aim Career Institute</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link className='header-font-color' to='/classroom'>Classroom</Link></Nav.Link>
            <Nav.Link><Link className='header-font-color' to='/contact'>Contact</Link></Nav.Link>
            <Nav.Link><Link className='header-font-color' to='/faculty'>Faculty</Link></Nav.Link>
            <Nav.Link><Link className='header-font-color' to='/goal'>Goal</Link></Nav.Link>
            <Nav.Link><Link className='header-font-color' to='/media'>Media</Link></Nav.Link>
            <Nav.Link><Link className='header-font-color' to='/notification'>Notification</Link></Nav.Link>
            <Nav.Link><Link className='header-font-color' to='/student-section'>Student-Section</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
