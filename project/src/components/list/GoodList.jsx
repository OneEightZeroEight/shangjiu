import React from "react";
import {Icon} from "antd";
import { Spin, Alert } from 'antd';

class GoodsList extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            goodslist:[]
        }
    }
    getGoods(){
        React.axios.get("http://127.0.0.1:4000/getGoods")
        .then((res)=>{
            console.log(res.data);
            this.setState({
                goodslist:res.data.data.Goods.List
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }   
    
    componentDidMount() {
        this.getGoods();
        window.onscroll=(e)=>{

        }
    }

    render() {
        return (
            <div className="list-horizontal">
                
                <ul className="larger-view">
                    {
                        (()=>{
                            return this.state.goodslist.map((item,index)=>{
                                return  <li>
                                            <div className="list-item">
                                                <div className="p">
                                                    <a href="" className="list-content-item">
                                                        <img src={"https://m.winex-hk.com"+item.ImgUrl} alt="" className="lazy" style={{width:"161px",height:"161px"}}/>
                                                    </a>
                                                </div> 
                                                <div className="d">
                                                    <a href="" className="clearfix">
                                                        <p className="d-item-name">{item.Name}</p> 
                                                        <p className="d-item-name2">{item.NameEng}</p> 
                                                        <span className="d-price">¥ {item.RealPrice}</span> 
                                                        <span className="d-stock">库存:{item.Stock}</span> 
                                                        <p className="d-num">
                                                             <span className="font-num">0人付款</span>
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                            })
                        })()
                    }
                   <div className="example">
                    <Spin />
                </div>
                </ul>
            </div>
        );
    }
}

export default GoodsList;