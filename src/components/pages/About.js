import React from "react";
import Contributors from '../contributors/Contributors';

const About = () => {
   return (
      <React.Fragment>
         <h1>About</h1>
         <p>This is the Jersey Rental app v1.0.0.</p>
         <p>Sports Fans Unite !!. </p>
         <p>Never go to a sporting event without your favorite jersey...</p>

         <Contributors />
      </React.Fragment>
   );
}

export default About;
