import React from "react";
import logo from "../../jersey.jpg";

const MainPage = () => {
   return (
      <header className="bg-dark pb-4">
         <img src={logo} className="mt-4" alt="Jersey Rental Logo" />
         <p className="lead text-light">
            Sports Fans Unite !! Never go to a sporting event without your
            favorite jersey...
         </p>
         <a
            className="text-primary lead"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
         >
            Learn how Jersey Rental works...
         </a>
      </header>
   );
};

export default MainPage;
