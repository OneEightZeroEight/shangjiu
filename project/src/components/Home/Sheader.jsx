import React from "react";
class Sheader extends React.Component {
    render() {
        return (
            <div className="logo-box clearfix" style={{"display":"block"}}>
                <h1 className="logo_h1">
                    <a href="/">
                        <img className="logo" alt="上酒中心-保真价优 国际流通" title="上酒中心-保真 价优 国际流通" src="./logo_icon2.png" />
                    </a>
                </h1>
                <a href="javascript:;" className="search_index">
                    <form action="" method="post">
                        <input type="text" placeholder="干红葡萄酒" />
                    </form>
                </a>
                <div className="messages_icon">
                    <a href="index.html"><img src="./messages_icon.png" alt="" /></a>
                </div>
            </div>
        );
    }
}

export default Sheader;