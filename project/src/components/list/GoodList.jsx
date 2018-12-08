import React from "react";
import {Icon} from "antd";
import { Spin, Alert } from 'antd';
import createHistory from 'history/createBrowserHistory'
const history = createHistory();
const location = history.location;

class GoodsList extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            goodslist:[],
            currentPage:0,

        }
    }



    //数组对象方法排序:
    //  sortByKey(array,key){
    //     return array.sort(function(a,b){
    //         var x=a[key];
    //         var y=b[key];
    //         return ((x<y)?-1:((x>y)?1:0));
    //     });
    // }
    sortByKey(array,key){
            return array.sort(function(a,b){
                var x=a[key];
                var y=b[key];
                return ((x<y)?-1:((x>y)?1:0));
            });
        }


    getGoods(){
        let page = this.state.currentPage+1
        React.axios.get("http://127.0.0.1:4000/getGoods?page="+page+"&direct="+"asc"+"&sort="+"quantity"+"&getProps="+ 1)
        .then((res)=>{
            console.log(res);
            let sortArr = this.sortByKey(res.data.data.Goods.List,res.data.data.Goods.List.RealPrice);
            console.log(sortArr)
            console.log(this.sortByKey(res.data.data.Goods.List,res.data.data.Goods.List.RealPrice))
            this.setState({
                goodslist:sortArr
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }  
    setGoods(id){
        var storage = window.localStorage;
        storage.setItem("goodId",id);
        this.props.history.push("/detail/");    
    } 
    
    componentWillMount() {
        this.getGoods();
        var storage = window.localStorage;
        var idx = storage.getItem("Index");
       console.log(idx)
    }

    render() {
        return (
            <div className="list-horizontal">
                
                <ul className="larger-view">
                    {
                        (()=>{
                            return this.state.goodslist.map((item,index)=>{
                                return  <li onClick={this.setGoods.bind(this,item.Id)}>
                                            <div className="list-item">
                                                <div className="p">
                                                    <a href="javascript:;" className="list-content-item">
                                                        <img src={"https://m.winex-hk.com"+item.ImgUrl} alt="" className="lazy" style={{width:"161px",height:"161px"}}/>
                                                    </a>
                                                </div> 
                                                <div className="d">
                                                    <a href="javascript:;" className="clearfix">
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