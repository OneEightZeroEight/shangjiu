import React from "react";
import { connect } from 'react-redux';
import Icon from 'antd/lib/icon';
import { Input } from 'antd';
import { Button } from 'antd';

import '../../css/my.css';


class SMy extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
    }
    render() {
        return (
            <div>
                <div className="top-bar">
                    <a className="action-back" default-back-url="/">
                        <Icon type="left" />
                    </a>
                    <span>用户注册</span>
                    <span></span>
                </div>

                <div className="user-passport">
                    <Input placeholder="Basic usage" placeholder="设置手机号码" maxLength="20"/>
                    <Input placeholder="Basic usage" placeholder="设置密码" maxLength="20" type="password"  maxLength="20" />
                    <Input placeholder="Basic usage" placeholder="确认密码" maxLength="20" type="password"  maxLength="20" />

                    <div className="example-input">
                        <Input size="small" placeholder="small size" placeholder="请输入图形验证码" style={{
                           width:"50%",
                            float:"left"
                        }}/>
                        <span className="smsCode"></span>
                    </div>
                    <div className="example-input">
                        <Input size="small" placeholder="small size" placeholder="请输入短信验证码" style={{
                            width:"50%",
                            float:"left"
                        }}/>
                        <span className="smsCode">获取验证码</span>
                    </div>
                    <Button type="primary" block style={{
                        height: "2.8125rem",
                        "fontSize": "0.9rem"
                    }}>注&nbsp;&nbsp;&nbsp;册</Button>
                    <p className="text-bottom">
                        已有账户？
                        <a className="mui-pull-right" href="/my/register">立即登录</a>
                    </p>
                </div>
                <div className="bg-cover" style={{display:"block"}}>
                    <div className="qContent">
                        <div className="protocol-box-title">
                            酒石网用户注册协议
                        </div>
                        <div className="protocol-box-content">
                            <b>【审慎阅读】</b>请您务必仔细阅读、充分理解协议中的条款内容后再点击同意，特别是其中涉及的免除或者限制酒石网站责任的条款。除非您已阅读并接受本协议所有条款，否则您无权使用酒石网站提供的服务。如您对协议有任何疑问，可向本网站客服咨询。
                            <br /><b>【特别提示】</b>当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。
                            <br /><br /><b><u>阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</u></b>
                            <br /><br /><a href="/Content/RegisterProtocol.htm" target="_blank"><u className="userRegister">用户注册协议&gt;&gt;</u></a>
                        </div>
                        <div className="protocol-box-btns">
                            <Button>同意</Button>&nbsp;&nbsp;&nbsp;
                            <Button type="danger">不同意</Button>
                        </div>
                    </div>

                </div>


            </div>

        )
    }
}


export default SMy;

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