import React from "react";
// import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
// import logo from "./logo.svg";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Chat from "./components/Chat";
import NotFoundPage from "./components/NotFoundPage";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/chat" component={Chat} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
