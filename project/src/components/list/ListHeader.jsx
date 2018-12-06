import React from "react";
import {Icon} from "antd";
class ListHeader extends React.Component {
    render() {
        return (
            <div className="head-box" style={{ width: "100%", zIndex: "99"}}>
                <div className="header clearfix">
                    <a href="/" className="home-box">
                        <Icon type="home" />
                    </a> 
                    <div className="search-box">
                        <form id="search-form" action="/goods" method="get" style={{border: "none"}}>
                            <input type="text" id="keyword" name="keyword" placeholder="拉图嘉利城堡副牌干红葡萄酒2014" /> 
                            <a href="javascript:" onclick="$('#search-form').submit();">
                                <Icon type="search" />
                            </a>
                        </form>
                    </div> 
                    <div className="menu-box">
                        <Icon type="bars" />
                    </div>
                </div> 
                <div className="filterbar-container">
                    <ul className="sort-tab clearfix">
                        <li className="current">
                            综合
                        </li> 
                        <li className="">
                            <span>销量</span>
                        </li> 
                        <li className="">
                            <span>价格</span>
                        </li>
                        <li className="">
                            新品
                        </li> 
                        <li>筛选</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListHeader;