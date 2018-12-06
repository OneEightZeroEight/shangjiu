import React from "react";
import {Icon} from "antd";
class GoodsList extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            goodslist:[]
        }
    }
    getGoods(){
        React.axios.get('https://m.winex-hk.com/api/goods/index')
        .then((response)=>{
            console.log(response.data);
            this.setState({
                navlist: response.data
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }   
    
    componentDidMount() {
        this.getGoods();
    }

    render() {
        return (
            <div className="list-horizontal">
                <ul className="larger-view">
                    <li>
                        <div className="list-item">
                            <div className="p">
                                <a href="/item/203948.html" className="list-content-item">
                                    <img src="/upload/20181203/20181203150442_2236.jpg" alt="柏安特城堡干红葡萄酒2009" className="lazy" />
                                </a>
                            </div> 
                            <div className="d">
                                <a href="/item/203948.html" className="clearfix">
                                    <p className="d-item-name">柏安特城堡干红葡萄酒2009</p> 
                                    <p className="d-item-name2">CHATEAU LA POINTE 2009</p> 
                                    <p className="d-price">¥ 519</p> 
                                    <p className="d-stock">库存:6</p> 
                                    <p className="d-num">
                                         <span className="font-num">0人付款</span>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default GoodsList;