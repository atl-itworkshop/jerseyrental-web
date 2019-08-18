import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
   return (
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
               <Link to="/">Events</Link>
            </li>
            <li>
               <Link to="/">Help</Link>
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
                  <button className="btn-med">Sign in / up</button>
               </Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
         </ul>
      </nav>
   );
};

Header.defaultProps = {
   title: "Jersey Rental"
};

Header.propTypes = {
   title: PropTypes.string.isRequired
};

export default Header;
