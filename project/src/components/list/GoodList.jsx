import React from "react";
import {Icon} from "antd";
import {connect} from 'react-redux';
import {Spin, Alert} from 'antd';
import Tuijian from "../My/common/Tuijian"
import createHistory from 'history/createBrowserHistory'
import '../../sass/my.scss';
import Demo from "../common/Demo";


const history = createHistory();
const location = history.location;

var storage = window.localStorage;
let sortArr=[]
let page = 0;
let pageSize = 10;

class GoodsList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            goodslist: [],
            currentPage: 0,
            pageSize:10,
            showRedBag:true
        };
    }

    sortByKey(array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }


    getGoods(sortType) {
        this.setState({
            showRedBag:true
        })
        page = page + 1;
        pageSize = pageSize + 5;
        console.log(pageSize);
        console.log(page)
        React.axios.get("http://127.0.0.1:4000/getGoods?page=" + page + "&pageSize=" + pageSize + "&sort=" + "quantity" + "&getProps=" + 1)
            .then((res) => {
                console.log(res);
                if(page == 1){
                    sortArr = this.sortByKey(res.data.data.Goods.List, sortType);
                }else{
                    let sortArr1 = this.sortByKey(res.data.data.Goods.List, sortType);
                    sortArr = sortArr.concat(sortArr1)
                }
                console.log(sortArr)
                console.log(this.sortByKey(res.data.data.Goods.List, sortType))
                if(sortArr.length>0){
                    this.setState({
                        goodslist: sortArr,
                        showRedBag:false
                    });
                }else {
                    this.setState({
                        showRedBag:false
                    });
                    return ;
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    setGoods(id) {
        var storage = window.localStorage;
        storage.setItem("goodId", id);
        this.props.history.push("/detail/");
    }

    componentWillMount() {
        let sortType = storage.getItem("sortType");

        // this.getGoods(sortType);

        var idx = storage.getItem("Index");
        console.log(idx)
        window.addEventListener('scroll',() =>{
                if(window.scrollY >= this.refs.myHeight.clientHeight - 1000){
                    // console.log("2222")
                    this.getGoods("date");
                }else{
                    
                }
                // console.log(this.refs.myHeight.clientHeight)
        }

        )
    }

    componentWillReceiveProps(nextProps) {
        let sortType = storage.getItem("sortType");
        if (sortType) {
            this.getGoods(sortType);
        }

    }
    componentWillUnmount() {
        window.onscroll = () => {
            return
        }
    }
    render() {
        return (
            <div className="list-horizontal" ref="myHeight">

                <div className="redbag bounceOutDown" style={{
                    display:this.state.showRedBag?"block":"none"
                }}>
                    <img src="/imgs/loading.gif" alt="" className="animated tada" />
                </div>

                <ul className="larger-view">
                    {
                        (() => {
                            return this.state.goodslist.map((item, index) => {
                                return <li onClick={this.setGoods.bind(this, item.Id)} key={index}>
                                    <div className="list-item">
                                        <div className="p">
                                            <a href="javascript:;" className="list-content-item">
                                                <img src={"https://m.winex-hk.com" + item.ImgUrl} alt=""
                                                     className="lazy" style={{width: "161px", height: "161px"}}/>
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
                    </div>
                </ul>
                <Tuijian></Tuijian>

                {/*<Demo getGoods={this.getGoods}/>*/}
            </div>
        );
    }
}

export default connect((state) => {
    console.log(state)
    return state
}, (dispatch) => {
    return {
        changePage(goodlistPage) {
            dispatch({
                type:"changePage",
                goodlistPage:goodlistPage
            })
        }
    }
})(GoodsList);