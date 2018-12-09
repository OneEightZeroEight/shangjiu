import React from "react";
import {Icon} from "antd";
import "animate.css";
import createHistory from 'history/createBrowserHistory';
import axios from "axios";
import qs from "qs";
const history = createHistory();
const location = history.location;
class Varirty extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            goodlist:[],
            isShow:true,
        }
    }
    back(){
        history.goBack();
    }
    getGoods(){
        var storage = window.localStorage;
        storage.getItem("goodId")
        console.log(storage.getItem("goodId"))
        React.axios.get("http://127.0.0.1:4000/getGoods")
        .then((res)=>{
            var arr = res.data.data.Goods.List;
            console.log(arr)
            let goodsArr = ""
            arr.map((item,index)=>{
                    if(item.Id == storage.getItem("goodId")){
                        console.log(item.Id)
                        
                            goodsArr = item;                                                           
                        return item;
                    }

            this.setState({
                goodlist:[goodsArr]
                })
            })

            console.log(this.state.goodlist)

        })
        .catch(function (error) {
            console.log(error);
        });
        
    } 
    addGoods(Id,Name,ImgUrl,Stock,NameEng,RealPrice){
        console.log(Id,Name,Stock)
        axios({
            method:"post",
            url:"http://127.0.0.1:4000/jgood/addGoods",
            header:{ "content-type": "application/x-www-form-urlencoded" },
            data: qs.stringify({
                _id:Id,
                name:Name,
                imgpath:ImgUrl,
                desc:NameEng,
                price:RealPrice,
                stock:Stock
            })
        })
        .then((res)=>{
            console.log(res)
        })
        .catch(function(err){
            console.log(err);
        })
    }

    componentWillMount() {
        this.getGoods();
    }
    render() {
        return (
            <div style={{display:this.state.isShow?'block':'none'}}>
            {
                    (()=>{
                        return this.state.goodlist.map((item,index)=>{
                            return (
                                <div key={index}>
            
                <div className="tocart-box" style={{bottom: "46px"}}>
                
                                    <div className="info-box mui-clearfix">
                                        <img src={'https://m.winex-hk.com'+item.ImgUrl} alt="" />
                                        <p className="info-text">
                                                <span className="text-price">￥{item.RealPrice}</span>
                                            <span>&ensp;(库存 {item.Stock})</span>
                                            <br />
                                            <span>请选择品种、数量</span>
                                        </p>
                                    </div>
                                    <div className="version-box">
                                        <p className="version-title">选择品种</p>
                                        <ul className="mui-clearfix version-list">
                                            <a>
                                                <li className="version-item selected">
                                                    <span>马赛多干红葡萄酒2014</span>
                                                </li>
                                            </a>
                                        </ul>
                                    </div>
                    
                    <div className="num-box clearfix">
                        <span>
                            购买数量:
                        </span>
                        <div className="mui-numbox clearfix" data-numbox-min="1" data-numbox-max="1">
                            <button className="mui-btn mui-btn-numbox-minus" type="button" disabled="">-</button>
                            <input id="qty" className="mui-input-numbox" type="number" />
                            <button className="mui-btn mui-btn-numbox-plus" type="button" disabled="">+</button>
                        </div>
                        <span>库存(1)</span>
                    </div>
                    <div className="btn-confirm" style={{bottom: "0px"}} onClick={this.addGoods.bind(this,item.Id,item.Name,item.ImgUrl,item.Stock,item.RealPrice)}>
                        确定
                    </div>
                </div>
                <div className="mask">
                </div>
                 </div>
                            )
                        })
                    })()
                }
            </div>
        );
    }
}

export default Varirty;