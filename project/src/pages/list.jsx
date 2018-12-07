import React, { Component } from 'react';
import { Route } from "react-router-dom";
import ListHeader from '../components/list/ListHeader.jsx';
import GoodList from '../components/list/GoodList.jsx';
import Bottom from '../components/common/bottom.jsx';
import { BackTop } from 'antd';

class List extends Component {
    render() {
        return (
            <div>
                <ListHeader></ListHeader>
                <GoodList history={this.props.history}></GoodList>
                <Bottom></Bottom>
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

export default List;