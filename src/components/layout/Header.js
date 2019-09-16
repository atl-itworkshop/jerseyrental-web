import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Navbar, Nav, Button } from "react-bootstrap";

import AuthContext from "../../context/auth/authContext";

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
   const authContext = useContext(AuthContext);

   const { isAuthenticated, logout, user } = authContext;

   const onLogout = () => {
      logout();
   };

   const authLinks = (
      <Fragment>
         <Nav.Item>
            <Nav.Link>
               <Link to="/">Welcome Home, {user && user.firstName}</Link>
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
               <Link to="#!" onClick={onLogout}>
                  <Button className="btn btn-sm">Logout</Button>
               </Link>
            </Nav.Link>
         </Nav.Item>
      </Fragment>
   );

   const guestLinks = (
      <Fragment>
         <Nav.Item>
            <Nav.Link>
               <Link to="/">Home</Link>
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
               <Link to="/register">
                  <Button className="btn btn-sm">Register</Button>
               </Link>
            </Nav.Link>
         </Nav.Item>

         <Nav.Item>
            <Nav.Link>
               <Link to="/login">
                  <Button className="btn btn-sm">Sign in</Button>
               </Link>
            </Nav.Link>
         </Nav.Item>
      </Fragment>
   );

   return (
      <Styles>
         <Navbar className="collapseOnSelect mb-3" expand="lg">
            <Navbar.Brand href="/">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto">
                  {isAuthenticated ? authLinks : guestLinks}
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
