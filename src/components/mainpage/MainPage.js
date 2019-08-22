import React, { useContext, useEffect } from "react";
import logo from "../../jersey.jpg";
import MainAppContext from "../../context/mainApp/mainAppContext";

const MainPage = () => {
   const mainAppContext = useContext(MainAppContext);
   const { getTagline, tagline } = mainAppContext;

  useEffect(() => {
    getTagline();
    // eslint-disable-next-line
  }, []); 


   return (
      <header className="App-header">
         <img src={logo} className="App-logo" alt="Jersey Rental Logo" />
         <p>
            {tagline}
         </p>
         <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
         >
            Learn how Jersey Rental works
         </a>
      </header>
   );
};

export default MainPage;
