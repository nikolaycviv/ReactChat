import React from 'react';
import { Route, IndexRoute, Route, browserHistory } from 'react-router';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import About from './components/AboutPage';
import Contact from './components/ContactPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);

export default routes;
