import React from 'react';
import ReactDOM from 'react-dom';
// 路由
import { HashRouter as Router} from "react-router-dom";

import { createStore } from 'redux'
import { Provider } from 'react-redux';

import axios from 'axios';
import './styles/index.css';
import './styles/App.css';
import './styles/Sheader.css';
import './styles/Sbanner.css';
import './styles/nav.css';
import './styles/base.css';
import App from './App';
import * as serviceWorker from './libs/serviceWorker';

const store = createStore((state = {
    uname:"",
    isShowNav: false,
    isShowGallery: {
        bool: false,
        src: ""
    },

}, action) => {
    switch (action.type) {
        case 'toggleNav':
            return {
                ...state,
                isShowNav:action.isShowNav
            }
        case 'toggleGallery':
            return {
                ...state,
                isShowGallery:action.isShowGallery
            }
        default:
            return state
    }
})


React.axios = axios;

ReactDOM.render(
    <Provider>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
