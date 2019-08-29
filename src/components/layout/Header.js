import React from "react";
import PropTypes from "prop-types";
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";

const Header = ({ title }) => {
   return (
<<<<<<< HEAD
      <nav className="navbar bg-primary">
         <h1>{title}</h1>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/">Rent</Link>
            </li>
            <li>
               <Link to="/events">Events</Link>
            </li>
            <li>
               <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
               <Link to="/">How it works</Link>
            </li>
            <li>
               <Link to="/">
                  <i className="fas fa-search" />
               </Link>
            </li>
            <li>
               <Link to="/">
                  <button className="btn btn-sm">Sign in / up</button>
               </Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
         </ul>
      </nav>
=======
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Navbar.Brand to="/">{title}</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link to="/">Home</Nav.Link>
               <Nav.Link to="/events">Events</Nav.Link>
               <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                     Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                     Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                     Separated link
                  </NavDropdown.Item>
               </NavDropdown>
            </Nav>
            <Nav>
               
            </Nav>
         </Navbar.Collapse>
      </Navbar>
>>>>>>> 7195dad... adding react-bootstrap... Step 1
   );
};

Header.defaultProps = {
   title: "Jersey Rental"
};

Header.propTypes = {
   title: PropTypes.string.isRequired
};

export default Header;
