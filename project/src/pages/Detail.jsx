import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Dheader from '../components/detail/Dheader.jsx';
import Dcontent from '../components/detail/Dcontent.jsx';
import Bottom from '../components/common/bottom.jsx';


class Detail extends Component {
    render() {
        return (
            <div>
                <Dheader history={this.props.history}></Dheader>
                <Dcontent></Dcontent>    
            </div>
        );
    }
}

export default Detail;