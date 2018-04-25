import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import IndexPage from "./components/IndexPage.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

ReactDOM.render(
  <div>
    <Navbar />
  </div>,
  document.getElementById("react-nav")
);

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/indexPage" component={IndexPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("app")
);
