import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import Sheader from "./components/Home/Sheader.jsx";


import './styles/Sheader.css';
import './styles/Sbanner.css';
import './styles/base.css';



// 路由
import { HashRouter as Router} from "react-router-dom";
// 状态管理 配置store的
import { createStore } from 'redux'
// 把上面配置好的store和react进行关联
import { Provider } from 'react-redux';

import axios from 'axios';

import App from './App';
import * as serviceWorker from './libs/serviceWorker';

ReactDOM.render(
    // <Router>
        <App />,
    // </Router>,
    document.getElementById('root')
    );
React.axios = axios;

serviceWorker.unregister();
