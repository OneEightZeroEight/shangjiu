import React from "react";
import { connect } from 'react-redux';
import Icon from 'antd/lib/icon';
import { Input } from 'antd';
import { Button } from 'antd';


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
                    用户登录
                </div>

                <div className="user-passport">
                    <Input placeholder="Basic usage" placeholder="手机号码/邮箱" maxLength="20"/>
                    <Input placeholder="Basic usage" placeholder="手机号码/邮箱" maxLength="20" type="password" placeholder="请输入密码" maxLength="20" />

                    <Button type="primary" block>登&nbsp;&nbsp;&nbsp;录</Button>
                    <p className="text-bottom">
                        没有账户？
                        <a className="text-go" href="javascript:location.href='/user/register'+getUrlParams()">立即注册</a>
                        <a className="mui-pull-right" href="/user/resetpwd">忘记密码？</a>
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