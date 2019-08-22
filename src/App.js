import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./jersey.jpg";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import "./App.css";

function App() {
   return (
      <Router>
         <div className="App">
            <Header title="Jersey Rental" />
            <Route
               exact
               path="/"
               render={props => (
                  <React.Fragment>
                     <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                           Sports Fans Unite !! Never go to a sporting event
                           without your favorite jersey...
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
                  </React.Fragment>
               )}
            />
            <Route path="/about" component={About} />
         </div>
      </Router>
   );
}

export default App;
