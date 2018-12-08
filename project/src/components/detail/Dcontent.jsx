import React from "react";
import {Icon} from "antd";
class Dcontent extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
           id:'',
           goodlist:[],
           isShow:false
        }
    }
    isShow(){
        this.setState({
            isShow:true
        })
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

    componentWillMount() {
        this.getGoods();
    }

    render() {

        return (
            
            <div className="Xcontainer goods-detail">
                <div id="mainContent">
                 {
                    (()=>{
                        return this.state.goodlist.map((item,index)=>{
                            return (
                                 <div key={index}>
                    <div id="focus" className="focus" style={{height:"100vw"}}>
                        <div className="hd">
                            <ul><li className="on"></li></ul>
                        </div>
                        <div className="bd">
                            <div className="tempWrap" style={{overflow:"hidden", position:"relative"}}>
                                <ul className="imgList" style={{width: "375px", position: "relative", overflow: "hidden", padding: "0px", margin: "0px", transitionDuration: "200ms", transform: "translate(0px, 0px) translateZ(0px)"}}>
                                    <li style={{display: "table-cell", verticalAlign: "top", width: "375px"}}>
                                        <img alt="" style={{width:"100%"}} src={'https://m.winex-hk.com'+item.ImgUrl}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="prop-box">             
                        <p className="title">
                            <span className="color-winered">【新品上市】</span>
                            {item.Name}<br />
                            <small className="color-666">{item.NameEng}</small>
                        </p>
                        <p id="skillDate" className="skill-date"></p>
                        <p className="price">
                            <span className="price-tip">售价：￥{item.RealPrice}</span>
                            <span className="stock">库存:{item.Stock} 件</span>
                        </p>  
                        <div className="years"></div>
                            <p className="service" ><span style={{color:"#8f8f94",fontSize:"14px"}}>配送</span>&ensp;&ensp;预计1-5个工作日从 上海 发货，<span>全场包邮，个别商品除外。</span>
                            </p>
                            <p className="tips">
                                <span className="mui-icon mui-icon-info"></span>
                                温馨提示 :
                                <span style={{fontSize:"12px"}}>
                                    本商品不支持7天无理由退货
                                </span>
                            </p>
                        </div>
                        </div> 
                        )

                    })
                })()
            }

                    </div>
                <a id="detailContent">
                    <div className="content-box">
                        <h2>商品详情</h2>
                        <table className="prop-table">
                            <tbody><tr>
                                <td colSpan="2">商品属性</td>
                            </tr>
                                <tr>
                                    <td>类型</td>
                                    <td>红葡萄酒</td>
                                </tr>
                                                <tr>
                                    <td>国家</td>
                                    <td>法国</td>
                                </tr>
                                <tr>
                                    <td>酒庄</td>
                                    <td>柏安特城堡</td>
                                </tr>
                                                <tr>
                                    <td>年份</td>
                                    <td>2009</td>
                                </tr>
                                                <tr>
                                    <td>规格</td>
                                    <td>750ml</td>
                                </tr>
                                        </tbody></table>
                        <div className="goods-content" style={{padding: "5px"}}>
                            <p style={{marginLeft:"0in"}}>
                                <span style={{fontSize:"16px"}}>酒 款 综 述</span> 
                            </p>
                            <p style={{marginLeft:"0in"}}>
                                <br />
                            </p>
                            <p style={{marginLeft:"0in"}}>
                                <span style={{fontSize:"14px"}}>【葡萄品种】：85% 梅洛，15% 品丽珠</span> 
                            </p>
                            <p style={{marginLeft:"0in"}}>
                                <span style={{fontSize:"14px"}}>【评分】：罗伯特-帕克 90分</span> 
                            </p>
                            <p style={{marginLeft:"0in"}}>
                                <span style={{fontSize:"14px"}}>【适饮期】：2012-2022</span> 
                            </p>
                            <p style={{marginLeft:"0in"}}>
                                <span style={{fontSize:"14px"}}>【品鉴记录】：2009年份可以说是柏安特酒庄最为细腻的酒品，我们应该感谢新庄主，深谋远虑，聘请前任金钟庄主任酒庄顾问。这款2009年的柏安特酒裙呈深紫色，浓郁的李子酱香气伴随着蓝莓、覆盆子、黑莓香气。酒体饱满，入口丰富、清新、性感 。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (帕克 2012年2月）</span> 
                            </p>
                            <p style={{marginLeft:"0in"}}>
                                <span style={{fontSize:"14px"}}>【餐酒搭配】：烤羔羊排、葡萄藤蔓和牛肝菌香煎牛排、香槟炖阉鸡、烤雉鸡、野兔排、羔羊腿、鹅肉、烤野鹿、香炒牛肝菌。</span> 
                            </p>
                            <p style={{marginLeft:"0in"}}>
                                <img className="lazy" alt="" src="./20181203150558_5898.jpg" style={{width: "100%", display: "block"}} /><img className="lazy" alt="" src="./20181203150558_7298.jpg" style={{width: "100%", display: "block"}} /><img className="lazy" alt="" src="./20181203150558_8984.jpg" style={{width: "100%", display: "block"}} /><img className="lazy" alt="" src="./20181203150558_9624.jpg" style={{width: "100%", display: "block"}} /> 
                            </p>
                                            <img className="lazy" src="./footer6.jpg" style={{width: "100%", display: "block"}} />
                        </div>
                        <div style={{marginTop: "30px",padding:"0 10px",lineHeight: "22px",fontSize:"16px",color:"#999"}}>
                            提示：本网站不向未成年人售酒。为了您和家人的健康，适度饮酒，请不要酒后驾车。
                        </div>
                    </div>
                </a>
               
                <div className="footer-placeholder">
                    <ul className="mui-row goods-detail-bottom">
                        <li className="mui-col-xs-2 btn-link">
                            <a href="/home">
                                <Icon type="home" />
                                <p>首页</p>
                            </a>
                        </li>
                        <li className="mui-col-xs-2 btn-link">
                            <a >
                                <Icon type="phone" />
                                <p>客服</p>
                            </a>
                        </li>
                        <li className="mui-col-xs-2 btn-link">
                            <a href="/cart">
                                <Icon type="shopping-cart" />
                                <p>购物车</p>
                            </a>
                        </li>
                            <li className="mui-col-xs-3 addtocart" onClick={this.isShow.bind(this)}>
                                加入购物车
                            </li>
                            <li className="mui-col-xs-3 buynow">
                                立即购买
                            </li>
                    </ul>
                </div>
                
            </div>
        );
    }
}

export default Dcontent;



                    