import React from "react";
import axios from "axios";
import qs from "qs";
import {connect} from 'react-redux';
import Xieyi from './Xieyi';
import '../../sass/my.scss';

import Icon from 'antd/lib/icon';
import {Input} from 'antd';
import {Button, message} from 'antd';

var randomCode = "";
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            tipImgcode: false,
            isShow: true,
            imgCode: "http://localhost:4000/getCode/get-img-verify",
            userCode: "",
            msgCode: "",
            userName: "",
            userPass: "",
            confirmPass: ""
        }
    }

    goLogin() {
        // this.props.history.push('/my/login/', { some: 'state' })
        this.props.history.push('/my/login/')
        console.log(888)
    }

    hideTipMsg() {
        this.setState({
            tipImgcode: false
        })
    }

    getInputCodeValue(e) {
        console.log(e.target.value)
        console.log(e.target.name)
        switch (e.target.name) {
            case "userName"  :
                this.setState({
                    userName: e.target.value
                });
                break;
            case "userPass"  :
                this.setState({
                    userPass: e.target.value
                });
                break;
            case "confirmPass"  :
                this.setState({
                    confirmPass: e.target.value
                });
                break;
            case "userCode"  :
                this.setState({
                    userCode: e.target.value
                });
                break;
            case "msgCode"  :
                this.setState({
                    msgCode: e.target.value
                });
                break;
        }


    }


    pankongImgCode() {
        var self = this;
        randomCode = Math.ceil(Math.random()*90000+10000);
        console.log("短信验证码为"+randomCode)
        if (this.state.userCode == "") {
            message.error('请输入图形验证码');
        } else {
            axios({
                    method: "post",
                    headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
                    url:'http://127.0.0.1:3000/add',
                    data: qs.stringify({
                        param:randomCode,
                        mobile: self.state.userName
                    })
                })
                .then((response) => {
                    console.log(response)
                    console.log("666")
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }

    registerBtn(){
        if(this.state.msgCode == randomCode && this.state.userPass ==  this.state.confirmPass){
        //    验证码正确
            axios({
                method: "post",
                headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
                url:'http://127.0.0.1:4000/user/addUserInfo',
                data: qs.stringify({
                    userName:this.state.userName,
                    userPass: this.state.confirmPass,
                })
            })
                .then((response) => {
                    message.success('注册成功');
                    console.log(response)
                })
                .catch(function (error) {
                    message.error('注册失败');
        });

        }
    }


    getImgCode() {
        axios.get('http://localhost:4000/getCode/get-img-verify')
            .then((response) => {
                console.log(response.config.url);
                this.setState({
                    imgCode: response.config.url
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div style={{overflow: "hidden"}}>
                <div className="top-bar">
                    <a className="action-back" default-back-url="/">
                        <Icon type="left"/>
                    </a>
                    <span>用户注册</span>
                    <span></span>
                </div>

                <div className="user-passport">
                    <Input name="userName" onChange={this.getInputCodeValue.bind(this)} placeholder="Basic usage"
                           placeholder="设置手机号码" maxLength="20"/>
                    <Input name="userPass" onChange={this.getInputCodeValue.bind(this)} placeholder="Basic usage"
                           placeholder="设置密码" maxLength="20" type="password" maxLength="20"/>
                    <Input name="confirmPass" onChange={this.getInputCodeValue.bind(this)} placeholder="Basic usage"
                           placeholder="确认密码" maxLength="20" type="password" maxLength="20"/>

                    <div className="example-input">
                        <Input name="userCode" onFocus={this.hideTipMsg.bind(this)}
                               onChange={this.getInputCodeValue.bind(this)} size="small" placeholder="small size"
                               placeholder="请输入图形验证码" style={{
                            width: "50%",
                            float: "left"
                        }}/>
                        <img src={this.state.imgCode} alt="" className="smsCode" onClick={this.getImgCode.bind(this)}/>
                    </div>
                    <div className="example-input">
                        <Input name="msgCode" onChange={this.getInputCodeValue.bind(this)} size="small"
                               placeholder="small size" placeholder="请输入短信验证码" style={{
                            width: "50%",
                            float: "left"
                        }}/>


                        <Button className="smsCode" onClick={this.pankongImgCode.bind(this)} style={{
                            "lineHeight": "2.8125rem", backgroundColor: "#fff", color: "#999", margin: "0"
                        }}>获取验证码</Button>
                    </div>

                    <Button onClick={this.registerBtn.bind(this)} type="primary" block style={{

                        height: "2.8125rem",
                        "fontSize": "0.9rem"
                    }}>注&nbsp;&nbsp;&nbsp;册</Button>
                    <p className="text-bottom">
                        已有账户？
                        <span className="mui-pull-right" onClick={this.goLogin.bind(this)}
                              style={{color: "#1890ff"}}>立即登录</span>
                    </p>

                </div>
                <Xieyi/>
            </div>

        )
    }
}


export default Register;

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