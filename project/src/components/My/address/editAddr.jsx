import React from "react";
import axios from "axios";
import qs from "qs";
import {connect} from 'react-redux';
import '../../../sass/my.scss';

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
            addrObj:"",
            userName: "",
            userPhone:"",
            userProvince:"",
            userCity:"",
            userAddr:"",
            userDetailsAddr:"",
            showAddrMsgVal:false,
            addrDefauleBtn:true,
            currentCity: "",
            currentPos:"",
        }

    }


    getAddrDate(){
        let obj = this.props.location.state;
        console.log(this.props.location.state)
        this.state = {
            userName: obj.userName,
            userPhone:obj.userPhone,
            userProvince:obj.userProvince,
            userCity:obj.userCity,
            userAddr:obj.userAddr,
            userDetailsAddr:obj.userDetailsAddr,
            showAddrMsgVal:false,
            addrDefauleBtn:true,
        }

    }

    setDefaultAddr(){
        this.setState({
            addrDefauleBtn:!this.state.addrDefauleBtn
        })
    }
    showAddrMsg(){
        this.setState({
            showAddrMsgVal:!this.state.showAddrMsgVal
        })
    }

    getCity() {
        axios.get("http://127.0.0.1:4000/currentPos")
            .then((response) => {
                let city = JSON.parse(response.data.split("(")[1].split(")")[0]).data.city;
                console.log(JSON.parse(response.data.split("(")[1].split(")")[0]).data)
                this.setState({
                    currentCity: city,
                    currentPos:JSON.parse(response.data.split("(")[1].split(")")[0]).data
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
            case "userName"  :
                this.setState({
                    userName: e.target.value
                });
                break;
            case "userPhone"  :
                this.setState({
                    userPhone: e.target.value
                });
                break;
            case "userProvince"  :
                this.setState({
                    userProvince: e.target.value
                });
                break;
            case "userCity"  :
                this.setState({
                    userCity: e.target.value
                });
                break;
            case "userAddr"  :
                this.setState({
                    userAddr: e.target.value
                });
                break;
            case "userDetailsAddr"  :
                this.setState({
                    userDetailsAddr: e.target.value
                });
                break;
            case "showAddrMsgVal"  :
                this.setState({
                    showAddrMsgVal: e.target.value
                });
                break;
            case "addrDefauleBtn"  :
                this.setState({
                    addrDefauleBtn: e.target.value
                });
                break;

        }
    }

    addAddressBtn(){
        // let addrObj = {
        //
        //     userName: this.state.userName,
        //     userPhone:this.state.userPhone,
        //     userProvince:this.state.userProvince,
        //     userCity:this.state.userCity,
        //     userAddr:this.state.userAddr,
        //     userDetailsAddr:this.state.userDetailsAddr,
        //     addrDefauleBtn:this.state.addrDefauleBtn
        // }
        if(storange.getItem("user")){

            axios({
                method: "post",
                headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
                url:'http://127.0.0.1:4000/addr/addAddressInfo',
                data: qs.stringify({
                    user:storange.getItem("user"),
                    userName: this.state.userName,
                    userPhone:this.state.userPhone,
                    userProvince:this.state.userProvince,
                    userCity:this.state.userCity,
                    userAddr:this.state.userAddr,
                    userDetailsAddr:this.state.userDetailsAddr,
                    addrDefauleBtn:this.state.addrDefauleBtn
                })
            })
                .then((response) => {
                    message.success('添加成功');
                    this.props.history.push('/my/address/');
                })
                .catch(function (error) {
                    message.error('添加失败');
                });

        }
        else {
            message.error('您还未登录！');
        }
    }



    componentWillMount() {
        this.getCity();
        this.getAddrDate();

    }


    render() {
        return (

            <div style={{overflow: "hidden",backgroundColor:"#fff"}} className="Shopcar">
                <div className="top-bar">
                    <a href="/#/my/address/" className="action-back" default-back-url="/">
                        <Icon type="left"/>
                    </a>
                    <b>收货地址管理</b>
                    <span></span>
                </div>
                <div onClick={this.showAddrMsg.bind(this)} style={{
                    paddingLeft:"30px",
                    textAlign:"left"
                }}>您当前的定位   <Icon type="environment" theme="filled" />{this.state.currentCity}</div>

                <ul className="add-addr">
                    <li>
                        <label htmlFor="">收货人</label>
                        <Input onChange={this.inputValue.bind(this)} name="userName" placeholder="请输入收件人姓名"  value={this.state.userName}/>
                    </li>
                    <li>
                        <label htmlFor="">联系电话</label>
                        <Input onChange={this.inputValue.bind(this)} name="userPhone" placeholder="请输入联系电话"  value={this.state.userPhone}/>
                    </li>
                    <li>
                        <label htmlFor="">所在省份</label>
                        <Input onChange={this.inputValue.bind(this)} name="userProvince" placeholder="请输入所在省份" value={this.state.userProvince}/>
                    </li>
                    <li>
                        <label htmlFor="" >所在城市</label>
                        <Input onChange={this.inputValue.bind(this)} name="userCity" placeholder="请输入所在城市" value={this.state.userCity}/>
                    </li>
                    <li>
                        <label htmlFor="">所在地区</label>
                        <Input onChange={this.inputValue.bind(this)} name="userAddr" placeholder="请输入所在地区"  value={this.state.userAddr}/>
                    </li>
                    <li>
                        <label htmlFor="">详细地址</label>
                        <TextArea onChange={this.inputValue.bind(this)}  name="userDetailsAddr" rows={4} value={this.state.userDetailsAddr} placeholder="请输入详细地址"/>
                    </li>

                </ul>
                <p className="defaultArr">
                    <span className="fl">设为默认地址</span>
                    <Icon className={this.state.addrDefauleBtn?"setColor":""} type="check-circle" theme="filled" onClick={this.setDefaultAddr.bind(this)}/>
                </p>

                <Button onClick={this.addAddressBtn.bind(this)} type="primary" block style={{
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
