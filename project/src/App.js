import React, { Component } from 'react';
import { Route} from "react-router-dom";
import Sheader from './components/Home/Sheader.jsx'
import Sbanner from './components/Home/Sbanner.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Sheader></Sheader>
          <Sbanner></Sbanner>
      </div>
    );
  }
}

export default App;
