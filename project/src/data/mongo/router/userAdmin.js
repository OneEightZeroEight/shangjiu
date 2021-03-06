const express = require("express");
const Router = express.Router();
const querystring = require("querystring");
var bodyParser  = require("body-parser");
Router.use(bodyParser.urlencoded({ extended: false }));

const User = require("../model/user.js");

/**
 * @api {post} /user/userLogin userLogin
 * @apiName userLogin
 * @apiGroup user
 *
 * @apiParam {String} uname 前端传过来的可以是用户名和邮箱
 * @apiParam {String} pwd 登录密码
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post("/userLogin",(req,res)=>{
        console.log(req.body);
        var dataObj = req.body;

        User.find({$and:[{"userName":dataObj["userName"] },{"userPass":dataObj["userPass"] }]})
            .then((data)=>{
                console.log(data);
                if((data[0]["userName"] == dataObj["userName"] && data[0]["userPass"] == dataObj["userPass"])){
                    res.send({err:0,msg:'loginSuccess',data:null});
                }
            })
            .catch((err)=>{
                console.log(err);
                res.send("loginErr");
            })

});

//超级管理员添加新的普通管理员
/**
 * @api {post} /user/addUserInfo addUserInfo
 * @apiName addUserInfo
 * @apiGroup user
 *
 * @apiParam {String} uname 用户名
 * @apiParam {String} email 邮箱
 * @apiParam {String} pwd 登录密码
 * @apiParam {String} status 权限
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
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



/**
 * @api {post} /user/findUserInfo findUserInfo
 * @apiName findUserInfo
 * @apiGroup user
 *
 * @apiParam {String} uname 前端传过来的用户名或者邮箱
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
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