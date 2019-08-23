import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Contributor from './components/contributors/Contributor';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import GithubState from "./context/github/GithubState";
import MainAppState from "./context/mainApp/MainAppState";

import "./App.css";

const App = () => {
   return (
      <GithubState>
         <MainAppState>
            <Router>
               <div className="App">
                  <Header />
                  <div className="container">
                     <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path='/contributor/:login' component={Contributor} />
                        <Route component={NotFound} />
                     </Switch>
                  </div>
               </div>
            </Router>
         </MainAppState>
      </GithubState>
   );
};

export default App;
