import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Navbar, Nav, Button } from "react-bootstrap";

const Styles = styled.div`
   .navbar {
      background-color: #dc3545;
   }

   a,
   .navbar-brand,
   .navbar-nav .nav-link {
      color: #bbb;

      &:hover {
         color: white;
      }
   }
`;

const Header = ({ title }) => {
   return (
      <Styles>
         <Navbar className="collapseOnSelect mb-3" expand="lg">
            <Navbar.Brand href="/">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto">
                  <Nav.Item>
                     <Nav.Link>
                        <Link to="/">Home</Link>
                     </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link>
                        <Link to="/rent">Rent</Link>
                     </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link>
                        <Link to="/events">Events</Link>
                     </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link>
                        <Link to="/howitworks">How it works</Link>
                     </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link>
                        <Link to="/testimonials">Testimonials</Link>
                     </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link>
                        <Link to="/about">About</Link>
                     </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link>
                        <Link to="/login">
                           <Button className="btn btn-sm">Sign in / up</Button>
                        </Link>
                     </Nav.Link>
                  </Nav.Item>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </Styles>
   );
};

Header.defaultProps = {
   title: "Jersey Rental"
};

Header.propTypes = {
   title: PropTypes.string.isRequired
};

export default Header;
