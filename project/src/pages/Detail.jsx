import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Dheader from '../components/detail/Dheader.jsx';
import Dcontent from '../components/detail/Dcontent.jsx';
import Bottom from '../components/common/bottom.jsx';
import Variety from '../components/detail/Variety.jsx';
import createHistory from 'history/createBrowserHistory'
const history = createHistory();
const location = history.location;


class Detail extends Component {
    render() {
        return (
            <div>
                <Dheader history={this.props.history}></Dheader>
                <Dcontent history={this.props.history}></Dcontent>
                <Variety history={this.props.history}></Variety>    
            </div>
        );
    }
}

export default Detail;