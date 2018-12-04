import React from 'react';
import ReactDOM from 'react-dom';
// import { Router } from "react-router-dom";
import { HashRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';


import './styles/Sheader.css';
import './styles/Sbanner.css';
import './styles/base.css';


// 路由
// 状态管理 配置store的
// import { createStore } from 'redux'
// 把上面配置好的store和react进行关联

import axios from 'axios';

import App from './App';
import * as serviceWorker from './libs/serviceWorker';

ReactDOM.render(
    <Provider>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
    );
React.axios = axios;

serviceWorker.unregister();
