import React from "react";
import axios from "axios";
import qs from "qs";
import {connect} from 'react-redux';
import '../../../sass/my.scss';

import {Input} from 'antd';
import Icon from 'antd/lib/icon';
import {Button, message} from 'antd';
const { TextArea } = Input;

var storange = window.localStorage;
class Jiesuan extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {

        }
    }
    goBack(){
        this.props.history.goBack()
    }
    goAddr(){
        this.props.history.push("/my/address/")
    }

    goZhifuPage(){
        this.props.history.push("/my/zhifu/")
    }
    render() {
        return (
            <div style={{overflow: "hidden"}} className="Jiesuan">
                <div className="top-bar" style={{position:"fixed"}}>
                    {/*<a className="action-back" default-back-url="/">*/}
                    <a className="action-back" onClick={this.goBack.bind(this)}>
                        <Icon type="left"/>
                    </a>
                    <b>填写订单信息</b>
                    <span></span>
                </div>

                <div className="addr">
                    <p>
                        <span>姓名</span>
                        <span>电话</span>
                    </p>
                    <div>
                        <span>地址gsfdgdfasdafr2eqrewDSA</span>
                        <Icon type="right" onClick={this.goAddr.bind(this)}/>
                    </div>
                </div>

                <ul className="jsGoods">
                    <li>
                        <img src="/imgs/demoGood.jpg" alt=""/>
                        <div>
                            <p>mfjdsaldmingzi名字</p>
                            <p>￥11*1</p>
                            <span>￥zongjia</span>
                        </div>
                    </li>
                </ul>

                <ul className="yhj">
                    <li>
                        <span>使用优惠卷 <s>(0)张可用</s></span>
                        <Icon type="right" />
                    </li>
                    <li>
                        <span>输入优惠码</span>
                        <Icon type="right" />
                    </li>
                </ul>

                <ul className="yhj hjd">
                    <li>
                        <p>
                            <span>
                            <s>
                                <Icon type="exclamation-circle" />
                                红酒豆抵扣金额不得超过每笔订单应付金额的10%
                            </s>
                        </span>
                            <Icon type="right" />
                        </p>

                    </li>
                    <li>
                        <p>
                            <span style={{fontSize:"16px"}}>红酒豆</span>
                            <span className="fr">
                            共100个，可使用100个，已使用0个<Icon type="right" />
                            </span>

                        </p>

                    </li>
                </ul>

                <div className="beizhu">
                    <p>
                        <Icon type="exclamation-circle" />
                        客户个人身份信息仅用于海关清关查验，本商城郑重承诺绝不会对外泄露您的个人信息或者用作他途！
                    </p>
                    <div>
                        <p><s>*</s>身份证姓名</p>
                        <Input />
                    </div>
                    <div>
                        <p><s>*</s>身份证号码</p>
                        <Input />
                    </div>
                    <div>
                        <p>订单备注</p>
                        <TextArea   />
                    </div>
                    <p>
                        <Icon type="exclamation-circle" />
                        温馨提示：跨境电商进口商品的购买人身份信息应与付款人一致，即购买人如果选购跨境商品，使用支付宝或者微信付款，则支付宝或微信应由购买人绑定。
                    </p>
                </div>

                <div className="price-count">
                    <p>商品金额<span id="goodsAmount">￥ 166.00</span></p>
                    <p>限时优惠<span id="secKillDiscountAmount">- ￥ 0.00</span></p>
                    <p>优惠金额 <span id="discountAmount">- ￥ 0.00</span></p>
                    <p>优惠券抵扣<span id="couponDiscountAmount">- ￥ 0.00</span></p>
                    <p>红酒豆抵扣<span id="beansDiscountAmount">- ￥ 0.00</span></p>
                    <p>运输费用<span id="expressPrice">￥ 0.00</span></p>
                    <p>应付金额<span id="totalAmount">￥ 166.00</span></p>
                    <button onClick={this.goZhifuPage.bind(this)}>提 交 订 单</button>
                </div>
            </div>

        )
    }
}


export default Jiesuan;
