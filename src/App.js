import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Contributor from "./components/contributors/Contributor";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Testimonials from "./components/pages/Testimonials";
import NotFound from "./components/pages/NotFound";
import Events from "./components/pages/Events";
import GithubState from "./context/github/GithubState";
import FakeapiState from "./context/fakeapi/FakeapiState";
import UserState from "./context/user/UserState";

// import "./App.css";

const App = () => {
   return (
      <GithubState>
         <FakeapiState>
            <UserState>
            <Router>
               <div className="text-center">
                  <Header />
                  <div style={containerStyle}>
                     <Switch>
                        <Route exact path="/" component={Home} />

                        <Route exact path="/about" component={About} />
                        <Route exact path="/events" component={Events} />
                        <Route exact path="/login" component={Login} />
                        <Route
                           exact
                           path="/contributor/:login"
                           component={Contributor}
                        />
                        <Route
                           exact
                           path="/testimonials"
                           component={Testimonials}
                        />
                        <Route component={NotFound} />
                     </Switch>
                  </div>
               </div>
            </Router>
            </UserState>
         </FakeapiState>
      </GithubState>
   );
};

const containerStyle = {
   maxWidth: "1100px",
   margin: "auto",
   overflow: "hidden",
   padding: "0 2rem"
};

export default App;
