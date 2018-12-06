import React from "react";
import axios from "axios";
import qs from "qs";
import {connect} from 'react-redux';
import '../../../sass/my.scss';

import Icon from 'antd/lib/icon';
import {message} from "antd/lib/index";

class Tuijian extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            tuijianArr: ""
        }
    }

    getDate(){
        axios({
            method: "post",
            headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
            url:'http://localhost:4000/qgood/Tuijian',
            data: qs.stringify({
            })
         })
            .then((response) => {
                this.setState({
                    tuijianArr:response.data.data
                })
                console.log(response.data.data)
            })
            .catch(function (error) {
                message.error('添加失败');
            });
    }

    componentWillMount(){
        this.getDate();
    }

    render() {
        return (
            <div>
                <div className="tuijian">
                    <h3>------为您推荐-----</h3>
                    <ul>
                        {
                        (()=>{
                            if(this.state.tuijianArr != ""){
                                return this.state.tuijianArr.map((item,index)=>{
                                    if(index == 8){return ;}
                                    return (
                                        <li key={index}>
                                            <img src={"https://m.winex-hk.com"+item.imgUrl} alt=""/>
                                            <p>{item.name}</p>
                                            <p>{item.nameEng}</p>
                                            <p>￥{item.realPrice}</p>
                                        </li>
                                    )
                                })
                            }

                        })()
                    }

                    </ul>

                </div>

            </div>

        )
    }
}


export default Tuijian;


