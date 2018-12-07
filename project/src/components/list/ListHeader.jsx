import React from "react";
import {Icon} from "antd";
class ListHeader extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            nav:0,
            navlist:[{
                title:'综合'
            },{
                title:'销量'
            },{
                title:'价格'
            },{
                title:'新品'
            },{
                title:'筛选'
            },]
        }
    }
    navigateTo(index, e) {
        this.setState({
            nav: index
        })
        var storage = window.localStorage;
        storage.setItem("Index",index);
        console.log(index)
    }


    render() {
        return (
            <div className="head-box" style={{position: "fixed",top: "0px", left: "0px", width: "100%", zIndex: "99"}}>
                <div className="header clearfix">
                    <a href="/" className="home-box">
                        <Icon type="home" />
                    </a> 
                    <div className="search-box">
                        <form id="search-form" action="/goods" method="get" style={{border: "none"}}>
                            <input type="text" id="keyword" name="keyword" placeholder="拉图嘉利城堡副牌干红葡萄酒2014" /> 
                            <a href="javascript:" >
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
                    {
                        (()=>{
                            return this.state.navlist.map((item,index)=>{
                                return <li onClick={this.navigateTo.bind(this,index)}
                                           key={index}
                                           className={index === this.state.nav ? "current" : ""}
                                        >{item.title}</li>  
                            })
                        })()
                    }
                        
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListHeader;