import React from "react";
import qs from "qs";
import { connect } from 'react-redux';
import Icon from 'antd/lib/icon';
import { Input } from 'antd';
import { Button } from 'antd';


import '../../css/my.css';
import {message} from "antd/lib/index";
import axios from "axios/index";


class SMy extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            userName:"",
            userPass:""
        }
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
        }
    }

    goRegister(){
        this.props.history.push('/my/register/', { some: 'state' })

    }
    loginBtn(){
        axios({
            method: "post",
            headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
            url:'http://127.0.0.1:4000/user/userLogin',
            data: qs.stringify({
                userName:this.state.userName,
                userPass: this.state.userPass,
            })
        })
            .then((response) => {
                if(response.data.err == 0){
                    message.success('登录成功');
                    this.props.history.push('/my/center/');
                }

                console.log(response)
            })
            .catch(function (error) {
                message.error('用户名和密码错误！');
            });
    }
    render() {
        return (
            <div>
                <div className="top-bar">
                    <a className="action-back" default-back-url="/">
                        <Icon type="left" />
                    </a>
                    <span>用户登录</span>
                    <span></span>
                </div>

                <div className="user-passport">
                    <Input name="userName" onChange={this.getInputCodeValue.bind(this)} placeholder="Basic usage" placeholder="手机号码/邮箱" maxLength="20"/>
                    <Input name="userPass" onChange={this.getInputCodeValue.bind(this)} placeholder="Basic usage" maxLength="20" type="password" placeholder="请输入密码" maxLength="20" />

                    <Button type="primary" block style={{
                        height: "2.8125rem","fontSize": "0.9rem"

                    }} onClick={this.loginBtn.bind(this)}>登&nbsp;&nbsp;&nbsp;录</Button>
                    <p className="text-bottom">
                        没有账户？
                        <span className="mui-pull-right" onClick={this.goRegister.bind(this)} style={{color:"#1890ff"}}>立即注册</span>|
                        <span className="mui-pull-right" onClick={this.goRegister.bind(this)} style={{color:"#1890ff"}}>忘记密码？</span>|
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