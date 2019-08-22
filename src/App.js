import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from "./components/layout/Header";
import Home from './components/pages/Home';
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import MainAppState from './context/mainApp/MainAppState';

import "./App.css";

const App = () => {
   return (
      <MainAppState>
        <Router>
          <div className='App'>
            <Header />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
    </MainAppState>
   );
}

export default App;
