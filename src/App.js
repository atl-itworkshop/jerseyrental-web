import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Contributor from "./components/contributors/Contributor";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Testimonials from "./components/pages/Testimonials";
import NotFound from "./components/pages/NotFound";
import Events from "./components/pages/Events";
import GithubState from "./context/github/GithubState";
import FakeapiState from "./context/fakeapi/FakeapiState";

import "./App.css";

const App = () => {
   return (
      <GithubState>
         <FakeapiState>
            <Router>
               <div className="App">
                  <Header />
                  <div className="container">
                     <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                           exact
                           path="/testimonials"
                           component={Testimonials}
                        />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/events" component={Events} />
                        <Route
                           exact
                           path="/contributor/:login"
                           component={Contributor}
                        />
                        <Route component={NotFound} />
                     </Switch>
                  </div>
               </div>
            </Router>
         </FakeapiState>
      </GithubState>
   );
};

export default App;
