import React, { Component } from 'react';
import { Route} from "react-router-dom";
import { HashRouter as  Redirect} from "react-router-dom";
import Shouye from './pages/shouye.jsx';
import List from './pages/list.jsx';
import SMy from './components/My/SMy.jsx';
import Detail from './pages/Detail.jsx';

import './styles/App.css';

class App extends Component {
    getDefaultRoute(){
        // this.props.history.push("/home/")
    }
  render() {
    return (
      <div className="App">
          {/*重定向*/}
          <Route exact path="/" component={Shouye} />
          <Route path="/home/" component={Shouye} />
          <Route path="/list/" component={List} />
          <Route path="/detail/" component={Detail} />  
          <Route path="/my/" component={SMy} />
    </div>

    );
  }
}

export default App;

// npm install --save-dev babel-preset-react babel-preset-es2015