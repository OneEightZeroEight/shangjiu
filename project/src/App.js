import React, { Component } from 'react';
import { Route} from "react-router-dom";
import Shouye from './pages/shouye.jsx';
import List from './pages/list.jsx';
import SMy from './components/My/SMy.jsx';
import Detail from './pages/Detail.jsx';

import Button from 'antd/lib/button';

import './styles/App.css';

class App extends Component {
  render() {
    return (


      <div className="App">              
          <Route path="/home/" component={Shouye} />  
          <Route path="/list/" component={List} />  
          <Route path="/detail/" component={Detail} />  
    </div>

    );
  }
}

export default App;


// npm install --save-dev babel-preset-react babel-preset-es2015