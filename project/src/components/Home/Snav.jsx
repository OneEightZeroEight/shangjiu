import React from "react";
import {Carousel} from 'antd';
import Slider from "react-slick";

class Snav extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            navlist: []
        }
    }

    getIndexInfo() {
        React.axios.get('./jsons/index.json')
            .then((response) => {
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
        this.getIndexInfo();
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 100,
            autoplay:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true
        };
        return (
            <div id="app">
                <div className="circle-columns">
                    <ul className="navlist clearfix">
                        {
                            (() => {
                                return this.state.navlist.map((item, index) => {
                                    return <li key={index}>
                                        <a href={item.mHref}>
                                            <img src={item.mImgUrl} alt="" style={{width: "52px", height: "52px"}}/>
                                            <p style={{}}>{item.title}</p>
                                        </a>
                                    </li>
                                })
                            })()
                        }
                    </ul>
                </div>

                <div className="newsBox clearfix">
                    <a href="/article" className="news">
                        <div className="news-tle">上酒资讯</div>
                        <Carousel  {...settings}>
                                <div className="zixun" >
                                    <h3>
                                        <p>
                                            <span>公告</span>
                                            进搏会期间部分地区快递暂停发货
                                        </p>
                                        <p>
                                            <span>公告</span>
                                            物流配送说明
                                        </p>
                                    </h3>
                                </div>
                            <div className="zixun">
                                <h3>
                                    <p>
                                        <span>公告</span>
                                        售后说明
                                    </p>
                                    <p>
                                        <span>公告</span>
                                        物流配送说明
                                    </p>
                                </h3>
                            </div>
                            <div className="zixun">
                                <h3>
                                    <p>
                                        <span>公告</span>
                                        进搏会期间部分地区快递暂停发货
                                    </p>
                                    <p>
                                        <span>公告</span>
                                        物流配送说明
                                    </p>
                                </h3>
                            </div>
                            <div className="zixun">
                                <h3>
                                    <p>
                                        <span>公告</span>
                                        隐私保护规则
                                    </p>
                                    <p>
                                        <span>公告</span>
                                        物流配送说明
                                    </p>
                                </h3>
                            </div>
                            <div className="zixun">
                                <h3>
                                    <p>
                                        <span>公告</span>
                                        进搏会期间部分地区快递暂停发货
                                    </p>
                                    <p>
                                        <span>公告</span>
                                        跨境电商说明
                                    </p>
                                </h3>
                            </div>
                            <div className="zixun">
                                <h3>
                                    <p>
                                        <span>公告</span>
                                        进搏会期间部分地区快递暂停发货
                                    </p>
                                    <p>
                                        <span>公告</span>
                                        跨境电商说明
                                    </p>
                                </h3>
                            </div>
                            <div className="zixun">
                                <h3>
                                    <p>
                                        <span>公告</span>
                                        进搏会期间部分地区快递暂停发货
                                    </p>
                                    <p>
                                        <span>公告</span>
                                        跨境电商说明
                                    </p>
                                </h3>
                            </div>
                            <div className="zixun">
                                <h3>
                                    <p>
                                        <span>公告</span>
                                        进搏会期间部分地区快递暂停发货
                                    </p>
                                    <p>
                                        <span>公告</span>
                                        跨境电商说明
                                    </p>
                                </h3>
                            </div>
                        </Carousel >
                    </a>
                </div>
            </div>
        );
    }
}

export default Snav;