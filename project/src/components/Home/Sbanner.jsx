import React from "react";
import { Carousel } from 'antd';
class Sbanner extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(props);
    }
    render() {
        return (
            <Carousel autoplay>
                <div><h3><img src="./20181127195117_6030.png" alt="" /></h3></div>
                <div><h3><img src="./20181127195227_8885.png" alt="" /></h3></div>
                <div><h3><img src="./20181202165539_3036.jpg" alt="" /></h3></div>
            </Carousel>
        );
    }
}

export default Sbanner;