import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { IndexPage } from "./components/IndexPage";
import { NotFoundPage } from "./components/notFoundPage";

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

console.log("Running");
