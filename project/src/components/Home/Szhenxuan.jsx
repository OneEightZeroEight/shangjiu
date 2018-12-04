import React from "react";
import { Carousel } from 'antd';
class Szhenxuan extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            zxlist:[]
        }
    }
        getIndexInfo(){
            React.axios.get('./jsons/zhenxuan.json')
            .then((response)=>{
                console.log(response.data);
                this.setState({
                    zxlist: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        }   
        
        componentDidMount() {
            this.getIndexInfo();
        }
    render() {
        return (
            <div className="publicBox" style={{paddingRight:"0"}}>
                <div className="publicTle clearfix" style={{paddingRight:"0.625rem"}}>
                    <p><i></i>跨境甄选</p>
                    <a href="/goods_o257" className="m_gd">
                        <span>更多</span>
                        <i></i>
                    </a>
                </div>
                
                <div className="swiper-container swiper-container2 list-content mui-clearfix swiper-container-horizontal swiper-container-ios">
                    <div className="swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                        <div className="swiper-slide swiper-slide-active" style={{width: "115px", marginRight: "10px"}}>
                            <a className="list-content-item" href="/item/203690.html" style={{width:"100%",border:"0"}}>
                                <img src="/upload/thumb_120x120/20180824/20180824211001_0844.jpg" alt="蓓姬城堡副牌干红葡萄酒2012" />
                                <p className="slide_text">蓓姬城堡副牌干红葡萄酒2012</p>
                                <p className="text-price">
                                    ￥166.00
                                </p>
                            </a>
                        </div>
                       
                    </div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
            );
    }
}

export default Szhenxuan;