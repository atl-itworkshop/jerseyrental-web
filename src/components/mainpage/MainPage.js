import React from "react";
import logo from "../../jersey.jpg";

const MainPage = () => {

   return (
      <header>
         <img src={logo} className="App-logo" alt="Jersey Rental Logo" />
         <p>Sports Fans Unite !! Never go to a sporting event without your favorite jersey...</p>
         <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
         >
            Learn how Jersey Rental works !!
         </a>
      </header>
   );
};

export default MainPage;
