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
    goRegister(){
        this.props.history.push('/my/register/', { some: 'state' })
        console.log(888)
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
                    <Input placeholder="Basic usage" placeholder="手机号码/邮箱" maxLength="20"/>
                    <Input placeholder="Basic usage" maxLength="20" type="password" placeholder="请输入密码" maxLength="20" />

                    <Button type="primary" block style={{
                        height: "2.8125rem","fontSize": "0.9rem"

                    }}>登&nbsp;&nbsp;&nbsp;录</Button>
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