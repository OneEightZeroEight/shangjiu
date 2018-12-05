import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Sheader from '../components/Home/Sheader.jsx';
import Sbanner from '../components/Home/Sbanner.jsx';
import Snav from '../components/Home/Snav.jsx';
import Szhenxuan from '../components/Home/Szhenxuan.jsx';
import Bottom from '../components/common/bottom.jsx';

class Index extends Component {
    render() {
        return (
            <div>
                <Sheader></Sheader>
                <Sbanner></Sbanner>
                <Snav></Snav>
                <Szhenxuan></Szhenxuan>
                <Bottom></Bottom>   
            </div>
        );
    }
}

export default Index;