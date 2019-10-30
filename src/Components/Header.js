import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className='header-nav fixed-top '>
        <Navbar.Brand href="#home"><Link className='header-nav-brand' to='/'>AIM Career Institute</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link className='header-links mr-3  ml-5' to='/about'>About</Link></Nav.Link>
            <div className="vertical"></div>
            <Nav.Link><Link className='header-links mr-2 ml-2' to='/classroom'>Classroom</Link></Nav.Link>
            <div className="vertical"></div>
            <Nav.Link><Link className='header-links mr-2 ml-2' to='/contact'>Contact</Link></Nav.Link>
            <div className="vertical"></div>
            <Nav.Link><Link className='header-links mr-2 ml-2' to='/faculty'>Faculty</Link></Nav.Link>
            <div className="vertical"></div>
            <Nav.Link><Link className='header-links mr-2 ml-2' to='/goal'>Goal</Link></Nav.Link>
            <div className="vertical"></div>
            <Nav.Link><Link className='header-links mr-2 ml-2' to='/media'>Media</Link></Nav.Link>
            <div className="vertical"></div>
            <Nav.Link><Link className='header-links mr-2 ml-2' to='/notification'>Notification</Link></Nav.Link>
            <div className="vertical"></div>
            <Nav.Link><Link className='header-links mr-2 ml-2' to='/student-section'>Student-Section</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  );
}

export default Header;
