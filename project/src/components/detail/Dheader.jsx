import React from "react";
import {Icon} from "antd";
import createHistory from 'history/createBrowserHistory'
const history = createHistory();
const location = history.location;
class Dheader extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    back(){
        history.goBack();
    }
    render() {
        return (
            <div className="Xtop-bar" >
                <a className="action-back" default-back-url="/">
                    <Icon type="left" onClick={this.back.bind(this)}/>
                </a>
                <a className="tab-title selected" id="main">商品</a>
                <a className="tab-title" id="detail">详情</a>
            </div>
        );
    }
}

export default Dheader;