import React from "react";
import axios from "axios";
import qs from "qs";
import {connect} from 'react-redux';
import '../../../sass/my.scss';
import {Radio} from 'antd';
import {Input} from 'antd';
import Icon from 'antd/lib/icon';
import {Button, message} from 'antd';

const {TextArea} = Input;
const RadioGroup = Radio.Group;

var storange = window.localStorage;

class Zhifu extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {}
    }
    goAliPay(){
        this.props.history.push("https://auth.alipay.com/login/index.htm?goto=https%3A%2F%2Fwww.alipay.com%2F")
    }
    render() {
        return (
            <div style={{overflow: "hidden"}} className="Jiesuan">
                <div className="top-bar" style={{position: "fixed"}}>
                    {/*<a className="action-back" default-back-url="/">*/}
                    <a className="action-back">
                        <Icon type="left"/>
                    </a>
                    <b>订单支付</b>
                    <span></span>
                </div>

                <div className="addr">
                    支付剩余时间：
                </div>


                <div className="price-count">
                    <p>订单编号<span id="goodsAmount">￥ 166.00</span></p>
                    <p>收货人<span id="goodsAmount">￥ 166.00</span></p>
                    <p>收货地址<span id="goodsAmount">￥ 166.00</span></p>
                    <p>联系电话<span id="goodsAmount">￥ 166.00</span></p>
                    <p>商品金额<span id="goodsAmount">￥ 166.00</span></p>
                    <p>限时优惠<span id="secKillDiscountAmount">- ￥ 0.00</span></p>
                    <p>优惠金额 <span id="discountAmount">- ￥ 0.00</span></p>
                    <p>优惠券抵扣<span id="couponDiscountAmount">- ￥ 0.00</span></p>
                    <p>红酒豆抵扣<span id="beansDiscountAmount">- ￥ 0.00</span></p>
                    <p>运输费用<span id="expressPrice">￥ 0.00</span></p>
                    <p>应付金额<span id="totalAmount">￥ 166.00</span></p>
                </div>

                <div style={{
                    backgroundColor:"#fff"
                }}>
                    <ul className="jsGoods">
                        <li>
                            <img src="/imgs/demoGood.jpg" alt=""/>
                            <div>
                                <p>mfjdsaldmingzi名字</p>
                                <p>数量1</p>
                                <span>￥zongjia</span>
                            </div>
                        </li>
                    </ul>

                    <div className="payWay">
                        <h4>请选择支付方式</h4>
                        <RadioGroup name="radiogroup" defaultValue={1}>
                            <p>
                                <Radio value={1}>
                                    <Icon style={{color:"#08b7ff"}} type="alipay-circle" theme="filled"/>
                                    <span>支付宝支付</span>
                                </Radio>
                            </p>
                            <p>
                                <Radio value={2}>
                                    <Icon style={{color:"#58bc58"}} type="wechat" theme="filled"/>
                                    <span>微信支付</span>
                                </Radio>
                            </p>
                        </RadioGroup>
                    </div>
                    <div className="payWay shouHuo">
                        <h4>请选择收货方式</h4>
                        <RadioGroup name="radiogroup" defaultValue={1}>
                            <p>
                                <Radio value={1}>快递</Radio>
                            </p>
                            <p>
                                <Radio value={2}>延迟发货，暂存仓库</Radio>
                            </p>
                        </RadioGroup>

                    </div>

                    <div className="goPay">
                        <Button type="primary" onClick={this.props.goAliPay.bind(this)}>去支付</Button>
                    </div>

                </div>


            </div>

        )
    }
}


export default Zhifu;
