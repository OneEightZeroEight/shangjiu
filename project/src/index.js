import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import Sheader from "./components/Home/Sheader.jsx";


import './styles/Sheader.css';
import './styles/Sbanner.css';
import './styles/base.css';

import App from './App';
import * as serviceWorker from './libs/serviceWorker';


ReactDOM.render(
    // <Router>
        <App />,
    // </Router>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
