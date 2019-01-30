import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Chat from './components/Chat';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFoundPage from './components/NotFoundPage';
import './css/App.css';

const App = () => {
    return (
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
};

export default App;
