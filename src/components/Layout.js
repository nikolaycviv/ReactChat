import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <h1>Basic Layout</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className="app-content">{this.props.children}</div>
            </div>
        );
    }
}
