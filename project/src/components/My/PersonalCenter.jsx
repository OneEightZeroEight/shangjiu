import React from "react";
import axios from "axios";
import qs from "qs";
import {connect} from 'react-redux';
import '../../sass/my.scss';

import Icon from 'antd/lib/icon';
import {Input} from 'antd';
import {Button, message} from 'antd';
import Avatar from "./UploadImg";

var storange = window.localStorage;
class PersonalCenter extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            showRedBag:storange.getItem("showRedBag")
        }
    }
    goLogout(){
        this.props.history.push('/my/login/');
    }
    goUserInfo(){
        let obj={
            userName:storange.getItem("user")
        }
        this.props.history.push({pathname:"/my/userinfo/",state: obj})
    }
    hideRedBag(){
        this.setState({
            showRedBag:false
        })
        console.log(this.state.showRedBag)
        storange.setItem("showRedBag","")
    }

    render() {
        return (
            <div style={{overflow: "hidden"}}>
                {/*红包*/}
                <div className="redbag bounceOutDown" style={{
                    display:this.state.showRedBag?"block":"none"
                }}>
                    <img src="/imgs/xyhfl.png" alt="" className="animated tada" />
                    <Icon type="close-circle" onClick={this.hideRedBag.bind(this)} />
                </div>
                
                <div className="top-bar">
                    {/*<a className="action-back" default-back-url="/">*/}
                    <a className="action-back">
                        <Avatar />
                        <Icon type="left"/>
                    </a>
                    <b>会员中心</b>
                    <span></span>
                </div>
                <div className="container user-index">
                    <a className="mui-row user-header">
                        <div className="mui-col-xs-1"></div>
                        <div className="mui-col-xs-3 mui-text-center user-header-img">
                            <img src="/imgs/user.png" />
                        </div>
                        <div className="mui-col-xs-4 user-firmid">
                            <Icon type="right" onClick={this.goUserInfo.bind(this)}/>
                        </div>
                        <div className="mui-col-xs-3"></div>
                        <div className="mui-col-xs-1">
                            <span className="mui-icon mui-icon-arrowright"></span>
                        </div>
                    </a>
                    <div className="my-orders">
                        <a href="/order">
                            我的订单
                            <span className="mui-pull-right">
                            查看全部订单<Icon type="right" />
                            </span>
                        </a>
                        <div className="mui-row my-orders-btns">
                            <a className="mui-col-xs-3" href="/order?status=1">
                                <Icon type="wallet" />
                                <p>待付款</p>
                            </a>
                            <a className="mui-col-xs-3" href="/order?status=2">
                                <Icon type="profile" />
                                <p>审核中</p>
                            </a>
                            <a className="mui-col-xs-3" href="/order?status=3">
                                <Icon type="car" />
                                <p>送货中</p>
                            </a>
                            <a className="mui-col-xs-3" href="/order?status=4">
                                <Icon type="file-done" />
                                <p>已完成</p>
                            </a>
                        </div>
                    </div>
                    <div className="user-menus">
                        <a href="/activity/beans">
                            <Icon type="sound" />
                            红酒豆来袭~
                            <span className="mui-icon mui-icon-arrowright mui-pull-right"></span>
                        </a>
                        <a href="/user/info">
                            <Icon type="user" />
                            个人信息
                            <span className="mui-icon mui-icon-arrowright mui-pull-right"></span>
                        </a>
                        <a href="/#/my/address/">
                            <Icon type="environment" />
                            收货地址管理
                            <span className="mui-icon mui-icon-arrowright mui-pull-right"></span>
                        </a>
                        <a href="/coupon">
                            <Icon type="pay-circle" />
                            我的优惠券
                            <span className="mui-icon mui-icon-arrowright mui-pull-right"></span>
                        </a>
                        <a href="/gift">
                            <Icon type="gift" />
                            我的礼品
                            <span className="mui-icon mui-icon-arrowright mui-pull-right"></span>
                        </a>
                        <a className="mui-table-view-cell" href="/user/myInvite?inUid=104979">
                            <Icon type="branches" />
                            邀请注册有礼
                            <span className="mui-icon mui-icon-arrowright mui-pull-right"></span>
                        </a>
                        <a className="mui-table-view-cell">
                            <Icon type="customer-service" />
                            联系我们
                            <span className="mui-icon mui-icon-arrowright mui-pull-right"></span>
                        </a>
                    </div>
                    <div className="signOutBtn">
                        <Button block style={{
                            width:"90%",
                            margin:"5px auto",
                            height: "2.8125rem",
                            background: "#b91c23",
                            fontSize:"1rem",
                            color:"#fff",
                            "fontSize": "0.9rem"
                        }}
                                onClick={this.goLogout.bind(this)}
                        >退出登录</Button>
                    </div>

                    <div className="ceng" style={{display: "block",height:"60px"}}></div>
                    <div className="qdbox" style={{display: "none"}}>
                        <div className="qdbox_close">
                            <img src="/Images/activity/beans/delete_icon_share.png" />
                        </div>
                        <img className="surprise" src="/Images/activity/beans/xyhfl.png" />
                    </div>
                </div>
           </div>

        )
    }
}


export default PersonalCenter;

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