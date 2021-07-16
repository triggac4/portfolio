import './App.css';
import React from "react";
import {BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Head from './layout/header';
import Sidebar from './layout/sidebar';
import About from './layout/about';
import Skill from "./layout/skill";
import Resume from "./layout/resume";
import Portfolio from './layout/portfolio';
import Contact from "./layout/contact";
function App() {
  return (
    <Router>
      <div className="body">
          <Sidebar/>
          <Switch>
            <Route exact path="/">
              <div className="grid-container">
                  <Head/>
                  <About background/>
                  <About/>
                  <Skill background/>
                  <Skill/>
                  <Resume background/>
                  <Resume/>
                  <Portfolio background/>
                  <Portfolio/>
                  <Contact background/>
                  <Contact/>           
              </div>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/portfolio-detail">
              <div className="grid-container">
                <p>check</p>
              </div>
            </Route>
          </Switch>
      </div>
    </Router>  
  );
}

export default App;
