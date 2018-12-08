import React from "react";
import { connect } from 'react-redux';

import { Route } from "react-router-dom";

import Login from "./Login"
import Register from "./Register"
import PersonCenter from "./PersonalCenter"
import Shopcar from "./Shopcar"
import MyAddress from "./MyAddress"
import AddAddress from "./address/addAddr"
import EditAddress from "./address/editAddr"
import UserInfo from "./UserInfo"
import Jiesuan from "./jiesuan/Jiesuan"
import Zhifu from "./jiesuan/Zhifu"


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
                <Route path="/my/center/" component={PersonCenter} className="animated zoomIn"/>
                <Route path="/my/shopcar/" component={Shopcar} />
                <Route path="/my/address/" component={MyAddress} />
                <Route path="/my/addaddress/" component={AddAddress} />
                <Route path="/my/editaddress/" component={EditAddress} />
                <Route path="/my/userinfo/" component={UserInfo} />
                <Route path="/my/jiesuan/" history={this.props.history} component={Jiesuan} />
                <Route path="/my/zhifu/" history={this.props.history} component={Zhifu} />
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

