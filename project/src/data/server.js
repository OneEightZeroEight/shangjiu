const express = require("express");
const app = express();
const path = require("path");
const cors=require('cors');
const $ = require("jquery");

const  db = require("./mongo/mongoose.js");


//跨域问题要加上
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    next()//是否执行继续
})

app.get("/user/login",(req,res)=>{
    //这里的res获取到的请求是很多数据的，res.query返回的是前端地址栏传过来的对象
});
console.log(__dirname);
//静态资源的引用
// app.use('/view',express.static(path.join(__dirname,'./view')));
// app.use('/public',express.static(path.join(__dirname,'./public')));

// 分发路由
const adminRouter = require('./mongo/router/userAdmin.js');
app.use("/user",adminRouter);


//生成验证码
const getCode = require('./mongo/router/setCode.js');
app.use("/getCode",getCode);
//验证前端传过来的验证码是否正确
// const VerificationCode = require('./mongo/router/setCode.js');
// app.use("/VerificationCode",VerificationCode);

app.listen(4000,()=>{
    console.log("server start in port " + 4000)
});

