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