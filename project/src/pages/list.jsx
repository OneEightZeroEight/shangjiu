import React, { Component } from 'react';
import { Route } from "react-router-dom";
import ListHeader from '../components/list/ListHeader.jsx';
import GoodList from '../components/list/GoodList.jsx';


class List extends Component {
    render() {
        return (
            <div>
                <ListHeader></ListHeader>
                <GoodList></GoodList>
                  
            </div>
        );
    }
}

export default List;