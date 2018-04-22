import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";

const NotFoundPage = () => (
  <Router>
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <p>
        <Link to="/">Go back to the main page</Link>
      </p>
    </div>
  </Router>
);

export default NotFoundPage;
