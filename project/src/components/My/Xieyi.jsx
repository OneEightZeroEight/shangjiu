import React from "react";
import { connect } from 'react-redux';
import Icon from 'antd/lib/icon';
import { Input } from 'antd';
import { Button } from 'antd';

import '../../css/my.css';


class Xieyi extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            isShow:true,
        }
    }


    isHide() {
        this.setState({
            isShow:false,
        })
        console.log(777)
        console.log(this.state.isShow)
    }



    render() {
        return (
            <div>
                <div className="bg-cover" style={{display:this.state.isShow?"block":"none"}}>
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
                            <Button>不同意</Button>&nbsp;&nbsp;&nbsp;
                            <Button type="danger" onClick={
                                this.isHide.bind(this)
                            }>同意并继续</Button>
                        </div>
                    </div>

                </div>


            </div>

        )
    }
}


export default Xieyi;




//     <a className="text-go" href="javascript:location.href='/user/register'+getUrlParams()">立即注册</a>