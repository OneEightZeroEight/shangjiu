import React from "react";
import axios from "axios";
import qs from "qs";
import {connect} from 'react-redux';
import '../../sass/my.scss';

import Icon from 'antd/lib/icon';
import {Input} from 'antd';
import {Button, message} from 'antd';


let storage = window.localStorage;
let newAddress = storage.getItem("newAddress")?storage.getItem("newAddress"):"";

class MyAddress extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
           addressArr:newAddress?[newAddress]:[]
        }
    }

    render() {
        return (
            <div style={{overflow: "hidden"}} className="Shopcar">
                <div className="top-bar">
                    <a className="action-back" default-back-url="/">
                        <Icon type="left"/>
                    </a>
                    <b>收货地址管理</b>
                    <span></span>
                </div>

                <ul className="addr-list">
                    {
                        (()=>{
                            return this.state.addressArr.map((item,index)=>{
                                return ( <li key={index} >{JSON.parse(item)}
                                    <p className="addr-name">{item.userName}&ensp;&ensp;{item.userPhone}</p>
                                    <p className="addr-detail">
                                        {item.userProvince}{item.userCity}{item.userAddr}{item.userDetailsAddr} </p>
                                    <p className="addr-edit">
                                        <Icon className={item.addrDefauleBtn?"setColor":""} type="check-circle" theme="filled"/>
                                        <span className="text-default selected">默认地址</span>
                                        <a className="mui-pull-right">
                                            <Icon type="delete" theme="filled" />删除</a>
                                        <a className="mui-pull-right" >
                                            <Icon type="edit" theme="filled" />编辑</a>
                                    </p>
                                </li>)
                            })
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
