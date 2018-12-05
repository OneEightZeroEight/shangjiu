import React from "react";
import axios from "axios";
import qs from "qs";
import {connect} from 'react-redux';
import '../../sass/my.scss';

import Icon from 'antd/lib/icon';
import {Input} from 'antd';
import {Button, message} from 'antd';

var randomCode = "";

class Shopcar extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            name: ""
        }
    }

    render() {
        return (
            <div style={{overflow: "hidden"}} className="Shopcar">
                <div className="top-bar">
                    <a className="action-back" default-back-url="/">
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
                <div className="tuijian">
                    <h3>------为您推荐-----</h3>
                    <ul>
                        <li>
                            <img src="/imgs/demoGood.jpg" alt=""/>
                            <p>321432</p>
                            <p>3214323243</p>
                            <p>￥2234</p>
                        </li>


                    </ul>

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