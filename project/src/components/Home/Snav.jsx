import React from "react";
import { Carousel } from 'antd';
class Snav extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            navlist:[]
        }
    }
        getIndexInfo(){
            React.axios.get('./jsons/index.json')
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
            this.getIndexInfo();
        }
    render() {
        return (
            <div id="app">
                <div className="circle-columns">
                    <ul className="navlist clearfix">
                    {
                        (()=>{
                            return this.state.navlist.map((item,index)=>{
                                return  <li key={index}>
                                            <a href={item.mHref}>
                                                <img src={item.mImgUrl} alt="" style={{width:"52px",height:"52px"}}/>
                                                <p style={{}}>{item.title}</p>
                                            </a>
                                        </li>
                            })
                        })()
                    }
                       
                    </ul>
                </div>

                <div className="newsBox">
                    <a href="/article" className="news">
                        <div className="news-tle">上酒资讯</div> 


                    </a>
                </div>
            </div>


            );
    }
}

export default Snav;