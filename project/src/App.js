import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { Route} from "react-router-dom";
import Sheader from './components/Home/Sheader.jsx';
import Sbanner from './components/Home/Sbanner.jsx';
import Snav from './components/Home/Snav.jsx';
import Szhenxuan from './components/Home/Szhenxuan.jsx';


import Button from 'antd/lib/button';

import './styles/App.css';


import SMy from './components/My/SMy.jsx';

class App extends Component {
  render() {
    return (

      <div className="App">     
          <Route path="/qwe/" component={Sheader} />
          <Sbanner></Sbanner>
          <Snav></Snav>
          <Szhenxuan></Szhenxuan>
    </div>
    );
  }
}

export default App;


// npm install --save-dev babel-preset-react babel-preset-es2015