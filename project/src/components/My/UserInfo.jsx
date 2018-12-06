import React from "react";
import axios from "axios";
import qs from "qs";
import {connect} from 'react-redux';
import '../../sass/my.scss';

import Icon from 'antd/lib/icon';
import {Input} from 'antd';
import {Button, message} from 'antd';
const { TextArea } = Input;

let storange = window.localStorage;

class AddAddress extends React.Component {

    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            userName: "",
            userPhone:"",
            userIDcard:"",
            nickName:""
        }

    }
    getUserDate(){
        let obj = this.props.location.state;
        console.log(this.props.location.state)
        this.state = {
            userName: (obj.userName).replace(/^(\d{3})\d*(\d{4})$/,'$1****$2'),
        }
    }

    updateUserInfo() {
        axios({
            method: "post",
            headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
            url:'http://127.0.0.1:4000/user/updateUserInfo',
            data: qs.stringify({
                userName:storange.getItem("user"),
                nickName:this.state.nickName,
                userPhone:storange.getItem("user"),
                userIDcard:this.state.userIDcard,
            })
        })
            .then((res) => {
                message.success("保存成功")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    findUserInfo(){
        var self = this;
        axios({
            method: "post",
            headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
            url:'http://127.0.0.1:4000/user/findUserInfo',
            data: qs.stringify({
                userName:storange.getItem("user"),
            })
        })
            .then((res) => {
                self.setState({
                    userIDcard:(res.data.data)[0].userIDcard,
                    nickName:(res.data.data)[0].nickName
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    inputValue(e){
        console.log(e.target.value)
        console.log(e.target.name)
        switch (e.target.name) {
            case "nickName"  :
                this.setState({
                    nickName: e.target.value
                });
                break;
            case "userPhone"  :
                this.setState({
                    userPhone: e.target.value
                });
                break;
            case "userIDcard"  :
                this.setState({
                    userIDcard: e.target.value
                });
                break;

        }
    }


    componentWillMount() {
        this.getUserDate();
        this.findUserInfo();
    }


    render() {
        return (
            <div style={{overflow: "hidden",backgroundColor:"#fff"}} className="Shopcar">
                <div className="top-bar">
                    <a href="/#/my/address/" className="action-back" default-back-url="/">
                        <Icon type="left"/>
                    </a>
                    <b>个人信息</b>
                    <span></span>
                </div>
                <ul className="add-addr">
                    <li>
                        <label htmlFor="">手机号码</label>
                        <p>
                            {this.state.userName}
                        </p>
                    </li>
                    <li>
                        <label htmlFor="">客户姓名</label>
                        <Input name="nickName" onChange={this.inputValue.bind(this)} value={this.state.nickName}/>
                    </li>
                    <li>
                        <label htmlFor="">身份证号</label>
                        <Input onChange={this.inputValue.bind(this)} name="userIDcard"  value={this.state.userIDcard}/>
                    </li>
                </ul>
                <Button onClick={this.updateUserInfo.bind(this)} type="primary" block style={{
                    height: "2.8125rem","fontSize": "1.0rem",
                    width:"90%",margin:"5px auto",
                    backgroundColor: "#bb0511",
                    border:"0"
                }}>保&nbsp;&nbsp;&nbsp;存</Button>
            </div>
        )
    }
}


export default AddAddress;
