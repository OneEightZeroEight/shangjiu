import React from "react";
import {Icon} from "antd";
class Dheader extends React.Component {
    render() {
        return (
            <div className="Xtop-bar" >
                <a className="action-back" default-back-url="/">
                    <Icon type="left" />
                </a>
                <a className="tab-title selected" id="main">商品</a>
                <a className="tab-title" id="detail">详情</a>
            </div>
        );
    }
}

export default Dheader;