import React from "react";
import { Carousel } from 'antd';
class Sbanner extends React.Component {
    
    render() {
        return (
            // <div className="xxx">
            <Carousel autoplay>
                <div><h3><img className="banner" src="./20181127195117_6030.png" alt="" style={{"height":"187px"}}/></h3></div>
                <div><h3><img className="banner" src="./20181127195227_8885.png" alt="" style={{"height":"187px"}}/></h3></div>
                <div><h3><img className="banner" src="./20181202165539_3036.jpg" alt="" style={{"height":"187px"}}/></h3></div>
            </Carousel>
            // </div>
        );
    }
}

export default Sbanner;