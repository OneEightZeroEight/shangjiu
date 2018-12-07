import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Sheader from '../components/Home/Sheader.jsx';
import Sbanner from '../components/Home/Sbanner.jsx';
import Snav from '../components/Home/Snav.jsx';
import Szhenxuan from '../components/Home/Szhenxuan.jsx';
import Bottom from '../components/common/bottom.jsx';
import { BackTop } from 'antd';

import createHistory from 'history/createBrowserHistory'
const history = createHistory();
const location = history.location;


class Index extends Component {

    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            name:""
        }}

    render() {
        return (
            <div>
                <Sheader></Sheader>
                <Sbanner></Sbanner>
                <Snav></Snav>
                <Szhenxuan history={this.props.history}></Szhenxuan>
                <Bottom history={this.props.history}></Bottom>
                <div>
                    <BackTop />
                    Scroll down to see the bottom-right
                    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
                    button.
                </div>
            </div>
        );
    }
}

export default Index;