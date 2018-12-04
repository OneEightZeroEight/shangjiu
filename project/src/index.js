import React from 'react';
import ReactDOM from 'react-dom';
// 路由
import { HashRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
// 状态管理 配置store的


// 路由
// 状态管理 配置store的
// import { createStore } from 'redux'
// 把上面配置好的store和react进行关

import axios from 'axios';
import './styles/index.css';
import './styles/App.css';
import './styles/Sheader.css';
import './styles/Sbanner.css';
// import './styles/list.css';
import './styles/nav.css';
import './styles/base.css';
import './css/my.css';
import App from './App';
import * as serviceWorker from './libs/serviceWorker';


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
