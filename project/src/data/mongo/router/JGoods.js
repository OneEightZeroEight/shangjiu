const express=require('express');
const Router=express.Router();
//数据模型引入
const Goods=require('../model/goods.js');



//增加商品
Router.post('/addGoods',(req,res)=>{
  let {_id,name,desc,price,imgpath,stock}=req.body
 Goods.insertMany({_id,name,desc,price,imgpath,stock})
 .then((data)=>{
    console.log(data)
    res.send({err:0,msg:'插入成功',data:null})
 })
 .catch((err)=>{

    console.log(err)
    res.send({err:-1,msg:'插入失败',data:null})
 })

})

//查询商品
Router.post('/getGoods',(req,res)=>{

  let {name} = req.body
  console.log(req.body)
 Goods.find()
 .then((data)=>{
      return Goods.find({name:{$regex:name}})
  })
 .then((data)=>{
    res.send({err:0,msg:'插入成功',data:data})
 })
 .catch((err)=>{

    console.log(err)
    res.send({err:-1,msg:'插入失败',data:null})
 })

})


//查询商品
Router.post('/allGoods',(req,res)=>{
 Goods.find()
 .then((data)=>{
      return Goods.find()
  })
 .then((data)=>{
  console.log(data)
    res.send({err:0,msg:'插入成功',data:data})
 })
 .catch((err)=>{

    console.log(err)
    res.send({err:-1,msg:'插入失败',data:null})
 })

})



//修改商品

Router.post('/updateGoods',(req,res)=>{
  let id=req.body.id;
  console.log(id)
  let {name,type,desc,price,imgpath,stock}=req.body
  console.log({name,type,desc,price,imgpath,stock})
  Goods.update({_id:id},{name,type,desc,price,imgpath,stock})
  .then((data)=>{
    res.send({err:0,msg:'修改成功',data:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'修改不成功',data:null})
  })

})

//删除商品
Router.post('/delGood',(req,res)=>{
  let id=req.body.id;
  console.log(id)
  Goods.deleteOne({_id:id})
  .then((data)=>{
    res.send({err:0,msg:'删除成功',data:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'删除不成功',data:null})
  })

})




//批量删除商品

Router.post('/delgoods',(req,res)=>{
  let {array}=req.body;
console.log(array) 
     
  Goods.deleteMany({_id:{$in:eval(array)}})
  .then((data)=>{ 
    res.send({err:0,msg:'删除成功',data:null});
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'删除不成功',data:null})
  })

})



module.exports=Router;