// Styles
import '../scss/style.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.js';

ReactDOM.render(<App />, document.getElementById('app'));

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
