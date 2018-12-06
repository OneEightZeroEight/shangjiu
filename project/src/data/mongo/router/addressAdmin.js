const express = require("express");
const Router = express.Router();
const querystring = require("querystring");
var bodyParser  = require("body-parser");
Router.use(bodyParser.urlencoded({ extended: false }));

const Addr = require("../model/address.js");


Router.post("/addAddressInfo",(req,res)=>{
    console.log(req.body)
    Addr.insertMany({
        user:req.body.user,
        userName:req.body.userName,
        userPhone:req.body.userPhone,
        userProvince:req.body.userProvince,
        userCity:req.body.userCity,
        userAddr:req.body.userAddr,
        userDetailsAddr:req.body.userDetailsAddr,
        addrDefauleBtn:req.body.addrDefauleBtn?req.body.addrDefauleBtn:false,
    })
        .then((data)=>{
            res.send({err:0,msg:'addAddressSuccess',data:null})
        })
        .catch((err)=>{
            console.log(err);
            res.send({err:-1,msg:'addAddressError',data:null})
        })
});

Router.post("/findUserAddrInfo",(req,res)=>{
    let user = req.body.user;
    Addr.find({"user":user })
        .then((data)=>{
            res.send({err:0,msg:'find Success',data:data})
        })
        .catch((err)=>{
            console.log(err);
            res.send({err:-1,msg:'find Error',data:null})
        })
});


Router.post('/delAddress',(req,res)=>{
    let id = req.body.id;
    console.log(id);
    Addr.deleteOne({_id:id})
        .then((data)=>{
            console.log(data);
            res.send({err:0,msg:"delete success",data:null})
        })
        .catch((err)=>{
            console.log(err);
            res.send({err:-1,msg:"delete error",data:null})
        })

});

module.exports=Router;