import React from "react";
import axios from "axios";
import qs from "qs";
import {connect} from 'react-redux';
import '../../sass/my.scss';

import Icon from 'antd/lib/icon';
import {Input} from 'antd';
import {Button, message} from 'antd';




let storage = window.localStorage;
let newAddress = storage.getItem("newAddress") ? storage.getItem("newAddress") : "";

class MyAddress extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            addressArr: newAddress ? [JSON.parse(newAddress)] : []
        }
    }

    componentWillMount(){
        this.getUserAddr();
    }
    delAddr(id){
        console.log(id)
        axios({
            method: "post",
            headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
            url:'http://127.0.0.1:4000/addr/delAddress',
            data: qs.stringify({
                id:id
            })
        })
            .then((response) => {
                message.success('删除成功');
                console.log(response.data.data);
                this.getUserAddr();
            })
            .catch(function (error) {
                message.error('删除失败');
            });
    }

    getUserAddr(){
        axios({
            method: "post",
            headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
            url:'http://127.0.0.1:4000/addr/findUserAddrInfo',
            data: qs.stringify({
                user:storage.getItem("user")
            })
        })
            .then((response) => {
                this.setState({
                    addressArr:response.data.data
                })
                console.log(response.data.data)
            })
            .catch(function (error) {
                message.error('加载失败');
            });
    }

    changeAddrBtn(addrDefauleBtn){
        console.log(addrDefauleBtn)
        return !addrDefauleBtn
    }
    editAddr(item){
        this.props.history.push({ pathname: "/my/editaddress", state: item});
    }


    render() {
        return (
            <div style={{overflow: "hidden"}} className="Shopcar">
                <div className="top-bar">
                    <a  href="/#/my/center/" className="action-back" default-back-url="/">
                        <Icon type="left"/>
                    </a>
                    <b>收货地址管理</b>
                    <span></span>
                </div>

                <ul className="addr-list">
                    {
                            (()=>{
                                    if(this.state.addressArr != ""){
                                        return this.state.addressArr.map((item,index)=>{
                                            return ( <li key={index}>
                                                <p className="addr-name">{item.userName}&ensp;&ensp;{item.userPhone}</p>
                                                <p className="addr-detail">
                                                    {item.userProvince}{item.userCity}{item.userAddr}{item.userDetailsAddr} </p>
                                                <p className="addr-edit">
                                                    <Icon onClick={this.changeAddrBtn.bind(this,item.addrDefauleBtn)} className={item.addrDefauleBtn ? "setColor" : ""} type="check-circle" theme="filled"/>
                                                    <span className="text-default selected">默认地址</span>
                                                    <a className="mui-pull-right" onClick={this.delAddr.bind(this,item._id)}>
                                                        <Icon type="delete" theme="filled" />删除</a>
                                                    <a className="mui-pull-right" onClick={this.editAddr.bind(this,item)}>
                                                        <Icon type="edit" theme="filled" />编辑</a>
                                                </p>
                                            </li>)

                                        })
                                    }

                        })()

                    }
                </ul>
                <div className="newAddrBtn">
                    <a href="/#/my/addaddress/">
                        新增地址
                    </a>
                </div>
            </div>

        )
    }
}

export default MyAddress;
