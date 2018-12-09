import React from "react";
import {Icon} from "antd";
import {connect} from 'react-redux';
import {Spin, Alert} from 'antd';
import Tuijian from "../My/common/Tuijian"
import createHistory from 'history/createBrowserHistory'
import '../../sass/my.scss';


const history = createHistory();
const location = history.location;

var storage = window.localStorage;

window.onscroll = ()=>{
    if(window.scrollY>200){
        console.log(44)
    }
}

class GoodsList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            goodslist: [],
            currentPage: 0,
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
        let page = this.state.currentPage + 1;
        console.log(page)
        React.axios.get("http://127.0.0.1:4000/getGoods?page=" + page + "&direct=" + "asc" + "&sort=" + "quantity" + "&getProps=" + 1)
            .then((res) => {
                console.log(res);
                let sortArr = this.sortByKey(res.data.data.Goods.List, sortType);
                console.log(sortArr)
                console.log(this.sortByKey(res.data.data.Goods.List, sortType))
                this.setState({
                    goodslist: sortArr,
                });
                setTimeout(()=>{
                    this.setState({
                        showRedBag:false
                    });
                },500)
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

        this.getGoods(sortType);

        var idx = storage.getItem("Index");
        console.log(idx)
        // window.addEventListener('scroll', () =>
        //     console.log(document.body.scrollTop || document.documentElement.scrollTop)
        // )
    }

    componentWillReceiveProps(nextProps) {
        let sortType = storage.getItem("sortType");
        if (sortType) {
            this.getGoods(sortType);
        }

    }

    render() {
        return (
            <div className="list-horizontal">

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