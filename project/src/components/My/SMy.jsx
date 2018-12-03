import React from "react";
import { connect } from 'react-redux';

class Wgallery extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
    }
    render() {
        return (
            <div>

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