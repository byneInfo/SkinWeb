// import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React from 'react'
import "./header.css";
import Logo from "../Images/skin-square.svg";

const Header = () => {
  return (
    <>
      <div className="wrapper">
        <nav style={{ }}>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label for="show-menu" class="menu-icon"><i className="fas fa-bars"></i></label>
          <div className="content">
            <Navbar.Brand to="/home">
              <img
              className="Logos"
                src={Logo}
                alt="Logo"
                width="165"
                height="108"
                style={{ width: '130px', height: 'auto', }} />
            </Navbar.Brand>
            <ul className="links">
              <Nav className="w-100  " /*justify*/>
                <li> <NavLink to="/home" className="nav-link" activeClassName="active">
                  Home
                </NavLink></li>
                <li> <NavLink to="/about" className="nav-link" activeClassName="active">
                  About
                </NavLink></li>
                <li> <NavLink
                  to="/services"
                  className="nav-link"
                  activeClassName="active"
                >
                  Services
                </NavLink></li>
                <li><NavLink
                  to="/testimonials"
                  className="nav-link"
                  activeClassName="active"
                >
                  Testimonials
                </NavLink></li>
                <li> <NavLink
                  to="/gallery"
                  className="nav-link"
                  activeClassName="active"
                >
                  Gallery
                </NavLink> </li>
                <li>  <NavLink to="/blogs" className="nav-link" activeClassName="active">Blog</NavLink></li>
                <li>  <NavLink
                  to="/contact"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact Us
                </NavLink></li>
                <li><NavLink to="/appointment">
                  <Button className="appointBtn">Book Appointment</Button>
                </NavLink></li>
              </Nav>

            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
