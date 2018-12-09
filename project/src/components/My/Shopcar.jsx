import React from "react";
import axios from "axios";
import qs from "qs";
import {connect} from 'react-redux';
import '../../sass/my.scss';

import Icon from 'antd/lib/icon';
import {Input} from 'antd';
import {Button, message} from 'antd';

import Tuijian from './common/Tuijian'

class Shopcar extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            qxBtn: false
        }
    }
    goBack(){
        this.props.history.goBack();
    }
    goJiesuan(){
        this.props.history.push("/my/jiesuan/");
    }

    quanxuanBtn(){
        this.setState({
            qxBtn:!this.state.qxBtn
        })
        console.log(this.state.qxBtn)
    }
    getlist(){
        
    }

    render() {
        return (
            <div style={{overflow: "hidden"}} className="Shopcar">
                <div className="top-bar">
                    <a onClick={this.goBack.bind(this)} className="action-back" default-back-url="/">
                        <Icon type="left"/>
                    </a>
                    <b>我的购物车（<span>0</span>）</b>
                    <span></span>
                </div>
                <div className="container">
                    <div className="cart">
                        <ul className="mui-clearfix cart-item">
                            <li>
                                <div className="left"><Icon type="check-circle" /></div>
                                <div className="middle">
                                    <a href="/item/203912.html" className="item-imgbox">
                                        <img src="/imgs/demoGood.jpg" alt="奥纳亚沃特干红葡萄酒2016" />
                                    </a>
                                </div>
                                <div className="right">
                                    <div>
                                        <p className="name">奥纳亚沃特干红葡萄酒2016</p>
                                        <p className="name-en">LE VOLTE DELL’ORNELLAIA 2016</p>
                                        <p className="text-price">￥ 221</p>
                                    </div>

                                    <div className="mui-clearfix edit-box">
                                        <div>
                                            <a className="edit-reduce">-</a>
                                            <input type="number" readOnly="readonly" className="item-quantity" />
                                            <a className="edit-add">+</a>
                                            <Icon type="delete" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*为你推荐*/}
                <Tuijian />

                <div className="carBottom">
                    <div onClick={this.quanxuanBtn.bind(this)}>
                        <span>
                            <Icon type="check-circle"  theme={this.state.qxBtn?"filled":""} className={this.state.qxBtn?"setColor":""}/>
                        </span>
                        <p>全选</p>
                    </div>
                    <p>
                        <span>总计：<b>￥0.00</b></span>
                        <span>共0件商品</span>
                    </p>
                    <button onClick={this.goJiesuan.bind(this)}>结&nbsp;&nbsp;算</button>
                </div>

            </div>

    )
    }
    }


    export default Shopcar;

    // export default connect((state)=>{
//     return state
// },(dispatch=>{
//     return {
//         toggleGallery(){
//             dispatch({
//                 type:"toggleGallery",
//                 isShowGallery:{
//                     bool: !this.props.isShowGallery.bool,
//                     src:""
//                 }
//             })
//         }
//     }
// }))(Wgallery);


//     <a className="text-go" href="javascript:location.href='/user/register'+getUrlParams()">立即注册</a>