import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Button from 'antd/lib/button';

import './styles/App.css';


import SMy from './components/My/SMy.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/my/" component={SMy} />
      </div>
    );
  }
}

export default App;
