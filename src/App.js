import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import {Route, Switch, Redirect} from "react-router-dom";

import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";


class App extends Component {
  render() {
    return (
          <div className="wrap-app">
            <NavBar/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/portfolio" exact component={Portfolio}/>
              <Route path="/about" exact component={About}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/login" exact component={Login}/>

              <Route path="/not-found" component={NotFound}/>
              <Redirect to="/not-found"/>
            </Switch>
          </div>
    );
  }
}

export default App;
