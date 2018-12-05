import React from "react";
import { connect } from 'react-redux';

import { Route } from "react-router-dom";

import Login from "./Login"
import Register from "./Register"
import PersonCenter from "./PersonalCenter"
import Shopcar from "./Shopcar"
import MyAddress from "./MyAddress"
import AddAddress from "./address/addAddr"


import '../../sass/my.scss';

import createHistory from 'history/createBrowserHistory'
const history = createHistory();
const location = history.location;

class SMy extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
    }
    render() {
        return (
            <div>
                <Route path="/my/login/" component={Login} />
                <Route path="/my/register/" component={Register} />
                <Route path="/my/center/" component={PersonCenter} />
                <Route path="/my/shopcar/" component={Shopcar} />
                <Route path="/my/address/" component={MyAddress} />
                <Route path="/my/addaddress/" component={AddAddress} />
            </div>

        )
    }
}


export default SMy;

// export default connect((state)=>{
//     return state
// },(dispatch=>{
//     return {
//         toggleGallery(){
//             dispatch({
//                 type:"toggleGallery",
//                 isShowGallery:{
//                     bool: !this.props.isShowGallery.bool,
//                     src:""
//                 }
//             })
//         }
//     }
// }))(Wgallery);



        //     <a className="text-go" href="javascript:location.href='/user/register'+getUrlParams()">立即注册</a>