import React from 'react';
import ReactDOM from 'react-dom';
// 路由
import { HashRouter as Router} from "react-router-dom";
// 状态管理 配置store的
import { createStore } from 'redux'
// 把上面配置好的store和react进行关联
import { Provider } from 'react-redux';

import axios from 'axios';

import App from './App';
import * as serviceWorker from './libs/serviceWorker';

React.axios = axios;


ReactDOM.render(
    <Provider>
            <Router>
                <App />
            </Router>
    </Provider>,
     document.getElementById('root')
);


serviceWorker.unregister();
