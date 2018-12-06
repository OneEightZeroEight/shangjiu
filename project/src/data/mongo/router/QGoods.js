const express = require("express");
const Router = express.Router();
var request = require("request");
const querystring = require("querystring");
var bodyParser  = require("body-parser");
Router.use(bodyParser.urlencoded({ extended: false }));

//购物车数据
Router.post("/Tuijian",(req,res)=>{
        res.append("Access-Control-Allow-Origin","*");
        request.post("https://m.winex-hk.com/goods/apiGetRecList",(err,response,body)=>{
            res.header("Access-Control-Allow-Origin","*");
            console.log(body);
            res.send(body);
        })

});


Router.post("/addUserInfo",(req,res)=>{
    User.insertMany({userName:req.body.userName,userPass:req.body.userPass})
        .then((data)=>{
            console.log(data);
            res.send({err:0,msg:'addSuccess',data:null})
        })
        .catch((err)=>{
            console.log(err);
            res.send({err:-1,msg:'addError',data:null})
        })
});







Router.post("/findUserInfo",(req,res)=>{
    let userName = req.body.userName;
    User.find({"userName":userName })
        .then((data)=>{
            console.log(data);
            res.send({err:0,msg:'find Success',data:data})
        })
        .catch((err)=>{
            console.log(err);
            res.send("fail")
        })
});


//邮箱验证码的处理
const email=require('./sendMail.js');
//获取post请求的时候要加上下面两句代码才能获取请求的参数
Router.use(bodyParser.urlencoded({ extended: false }));
let check={};
//获取验证码


Router.post("/updateUserInfo",(req,res)=>{
    let {userName,userPhone,userIDcard,nickName} = req.body;
    console.log({userName,userPhone,userIDcard,nickName})
    User.updateOne({userName:userName},{$set:{userPhone,userIDcard,nickName}})
        .then((data)=>{
            console.log(data);
            res.send({err:0,msg:'update success',data:null})
        })
        .catch((err)=>{
            console.log(err)
            res.send({err:-1,msg:'update error',data:null})
        })
})

Router.post("/getCode",(req,res)=>{
    console.log(req.body);
    let mail=req.body.mail;
    if (!mail) {return res.send('参数错误')}
    let code=parseInt(Math.random(1000,9999)*10000);
    check[mail]=code;
    //发送邮件是异步操作
    email.sendMail(mail,code,(state)=>{
        if (state) {
            res.send('验证码发送nook')
        }else{
            res.send({err:0,msg:'getCodeSuccess',data:code})
            // res.sendStatus(code)
        }
    })
});

module.exports=Router;