const express = require("express");
var request = require("request");
const app = express();
var bodyParser  = require("body-parser");
const path = require("path");
const cors=require('cors');
const $ = require("jquery");

const  db = require("./mongo/mongoose.js");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




//跨域问题要加上
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    next();
})


app.get("/getGoods",(req,res)=>{
    // cors
    res.append("Access-Control-Allow-Origin","*");
    request.post("https://m.winex-hk.com/api/goods/index",(err,response,body)=>{
        res.header("Access-Control-Allow-Origin","*");
        console.log(response);

        res.send(body);
    })
})


app.get("/currentPos",(req,res)=>{
    // cors
    res.append("Access-Control-Allow-Origin","*");
    request.get("https://sh-trail.ntalker.com/trail/trail/userinfo.php?action=getregion&siteid=kf_10372&userid=kf_10372_ISME9754_guest5B3912A9-8188-7A&callback=trail_getregion_E0D80A48",(err,response,body)=>{
        res.header("Access-Control-Allow-Origin","*");
        console.log(body);
        res.send(body);
    })
})



// console.log(__dirname);
//静态资源的引用
// app.use('/view',express.static(path.join(__dirname,'./view')));
// app.use('/public',express.static(path.join(__dirname,'./public')));

// 分发路由
const adminRouter = require('./mongo/router/userAdmin.js');
app.use("/user",adminRouter);
const addressRouter = require('./mongo/router/addressAdmin.js');
app.use("/addr",addressRouter);
const qgoodRouter = require('./mongo/router/QGoods.js');
app.use("/qgood",qgoodRouter);






//生成验证码
const getCode = require('./mongo/router/setCode.js');
app.use("/getCode",getCode);
//验证前端传过来的验证码是否正确



//
// app.post('/sendMsgCode',(req, res, next)=>{
//     res.append("Access-Control-Allow-Origin","*");
//     let mobile = req.body.mobile;
//     console.log(mobile)
//     let randomNum = Math.ceil(Math.random()*90000)+10000;
//     // request.post("127.0.0.1:3000/add",{param:randomNum,mobile:mobile},(err,response,body)=>{
//     //     console.log(body);
//     //     console.log(response);
//     //     res.send(body);
//     // })
//     request({
//         url: "http://127.0.0.1:3000/add",
//         method: "POST",
//         json: true,
//         headers: {
//             "content-type": "application/json",
//         },
//         body: {param:randomNum,mobile:mobile}
//     }, function(error, response, body) {
//         console.log(response)
//         if (!error && response.statusCode == 200) {
//             console.log(body) // 请求成功的处理逻辑
//         }else {
//             console.log(error)
//         }
//     });
// })


app.listen(4000,()=>{
    console.log("server start in port " + 4000)
});

