import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from "react-router";
import routes from "./routes.js";

window.onload = () => {
    ReactDOM.render(
        <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />,
        document.getElementById('app'));
};

console.log('My Minimal React Webpack Babel Setup');

// if ('serviceWorker' in navigator) {
//     // console.log('service worker exists');
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('./sw.js').
//             then((registration) => {
//                 // registration was successful
//                 // console.log('ServiceWorker registration successful with scope: ', registration.scope);
//             }, (err) => {
//                 // registration failed :(
//                 // console.log('ServiceWorker registration failed: ', err);
//             });
//     });
// }
