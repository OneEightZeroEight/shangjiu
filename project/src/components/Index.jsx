import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Sheader from '../components/Home/Sheader.jsx'
import Sheader from '../components/Home/Sbanner.jsx'
class Index extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div>
                <Sheader></Sheader>
                // <Sbanner></Sbanner>
            </div>
        );
    }
}

export default Index;