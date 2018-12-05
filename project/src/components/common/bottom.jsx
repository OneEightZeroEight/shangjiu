import React from "react";
import { Carousel } from 'antd';
import { Icon } from "antd";
class Bottom extends React.Component {
     constructor(props){
        super(props)
        this.props = props;
        this.state = {
            navlist:[]
    }}
   

    render() {
        return (
            <div className="syBottom clearfix">
                <ul>
                    <li>
                        <a>
                            <Icon type="home" />
                            <span>首页</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <Icon type="appstore" />
                            <span>分类</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="./toolbar_ttsg.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <Icon type="shopping-cart" />
                            <span>购物车</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <Icon type="user" />
                            <span>我的</span>
                        </a>
                    </li>
                </ul>
            </div>
            );
    }
}

export default Bottom;