import React from "react";
import { Carousel } from 'antd';
import { Icon } from "antd";
import {message} from "antd/lib/index";

import { Link } from "react-router-dom";

import createHistory from 'history/createBrowserHistory'
const history = createHistory();
const location = history.location;


let storage = window.localStorage;
storage.setItem("navidx",1)
class Bottom extends React.Component {
     constructor(props){
        super(props)
        this.props = props;
        this.state = {
            navlist:[],
            selnav:storage.getItem("navidx")
    }}

    goPersonCenter(){
         console.log("wode")
         if(storage.getItem("user")){
             this.props.history.push("/my/center/")
         }else {
             message.warning('您还未登录');
             this.props.history.push("/my/login/");
         }
    }
    addStyle(index){
         this.setState({
             selnav:storage.setItem("navidx",index)
         })

    }
    render() {
        return (
            <div className="syBottom clearfix" style={{
                zIndex:"9999",
                borderTop:"1px solid rgb(206, 205, 205)"
            }}>
                <ul id="navcolor">
                    <li onClick={this.addStyle.bind(this,1)} className={this.state.selnav==1?"navcolor":""}>
                        <Link to='/home/'>
                            <Icon type="home" />
                            <span>首页</span>
                        </Link>
                    </li>
                    <li  onClick={this.addStyle.bind(this,2)} className={this.state.selnav==2?"navcolor":""}>
                        <Link to='/list/'>
                            <Icon type="appstore" />
                            <span>分类</span>
                        </Link>
                    </li>
                    <li>
                        <a>
                            <img src="./toolbar_ttsg.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="/#/my/shopcar">
                            <Icon type="shopping-cart" />
                            <span>购物车</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={this.goPersonCenter.bind(this)}>
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