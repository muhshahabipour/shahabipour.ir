import React from "react";
import ReactDOM from "react-dom";
import history from "./js/helper/history";
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from "./js/containers/App/App";
import { configureStore } from './js/store';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './scss/style.scss';
// import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
// import '../node_modules/jquery/dist/jquery.min.js';




const store = configureStore();

ReactDOM.render(
    (<Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>),
    document.getElementById('root')
);
