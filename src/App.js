import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Header from "./components/layout/Header";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import Contributor from "./components/contributors/Contributor";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Events from "./components/pages/Events";
import Testimonials from "./components/pages/Testimonials";
import NotFound from "./components/pages/NotFound";

import GithubState from "./context/github/GithubState";
import FakeapiState from "./context/fakeapi/FakeapiState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

import setAuthToken from "./utils/setAuthToken";

// import "./App.css";

if (localStorage.token) {
   setAuthToken(localStorage.token);
}

const App = () => {
   return (
      <MuiThemeProvider>
         <AuthState>
            <GithubState>
               <FakeapiState>
                  <AlertState>
                     <Router>
                        <div className="text-center">
                           <Header />
                           <div style={containerStyle}>
                              <Alerts />
                              <Switch>
                                 <Route exact path="/" component={Home} />

                                 <Route exact path="/about" component={About} />
                                 <PrivateRoute
                                    exact
                                    path="/events"
                                    component={Events}
                                 />
                                 <Route
                                    exact
                                    path="/register"
                                    component={Register}
                                 />
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
                  </AlertState>
               </FakeapiState>
            </GithubState>
         </AuthState>
      </MuiThemeProvider>
   );
};

const containerStyle = {
   maxWidth: "1100px",
   margin: "auto",
   overflow: "hidden",
   padding: "0 2rem"
};

export default App;
