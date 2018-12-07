import React from "react";
import { Carousel } from 'antd';
import { Icon } from "antd";
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
        <div>
            <div className="publicBox" style={{paddingRight:"0"}}>
                <div className="publicTle clearfix" style={{paddingRight:"0.625rem"}}>
                    <p>跨境甄选</p>
                    <a href="/goods_o257" className="m_gd">
                        <span>更多</span>
                        <Icon type="right" />
                    </a>
                </div>
                {
                    (()=>{
                        return this.state.zxlist.map((item,index)=>{
                            return  (<div className="swiper-container " key={index}>
                                    <div className="swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px)"}} style={{
                                        width:"33%",
                                        float:"left"
                                    }}>
                                        <div className="zhenX swiper-slide swiper-slide-active" style={{width: "115px", marginRight: "10px"}}>
                                            <a className="list-content-item" href={item.href} style={{width:"100%",border:"0"}}>
                                                <img src={item.url} alt="蓓姬城堡副牌干红葡萄酒2012" />
                                                <p className="slide_text">{item.name}</p>
                                                <p className="text-price">
                                                    ￥{item.price}
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                </div>
                            )
                        })
                    })()     
                }  
            </div>

            <div className="xiaotu">
                <img src="./20180930112726_9743.jpg" alt="tp" />
            </div>

            <div className="publicBox clearfix">
                <div className="publicTle clearfix">
                    <p>新品钜惠</p>
                    <a href="/goods?sort=date&amp;direct=desc" className="m_gd">
                        <span>更多</span>
                       <Icon type="right" />
                    </a>
                </div>
                <a>
                    <img src="./20181205153113_9984.png" alt="" style={{width:"249px",height:"178px",float:"left",marginRight:'5px'}}/>
                </a>
                <a>
                    <img src="./20181205162738_8192.png" alt="" style={{width:"90px",height:"90px",float:"left"}}/>
                </a>
                <a>
                    <img src="./20181205162738_8192.png" alt="" style={{width:"90px",height:"90px",float:"left"}}/>
                </a> 
            </div>

            <div className="publicBox">
                <div className="publicTle clearfix">
                    <p>精选口粮</p>
                    <a href="/goods_o268" className="m_gd">
                        <span>更多</span>
                        <Icon type="right" />
                    </a>
                </div>
                <div className="list-content clearfix">
                    {
                        (()=>{
                            return this.state.zxlist.map((item,index)=>{
                                return  (<a className="list-content-item" href="javascript:;"  key={index}>
                                        <img className="lazy"  alt="" src={item.url} />
                                        <p className="msg" style={{color:"#565656"}}>{item.name}</p>
                                        <p className="msg" style={{fontSize:"12px"}}>CLOS RENE 2014</p>
                                        <p className="msg" style={{fontSize:"12px"}}>{item.address}</p>
                                        <p className="text-price" style={{color:"red",fontSize:"16px"}}>
                                            ￥{item.price}
                                        </p>
                                    </a> )    
                            });
                        })()
                    }
                </div>

            </div>

                <div className="dibu">
                   <span>E N D</span>
                </div>
        </div>
            );
    }
}

export default Szhenxuan;