 //创建数据模型
 const mongoose = require('mongoose');
 let Schema = mongoose.Schema;
 let goodsSchema=new Schema({
    _id:{type:String,required:true},
    name:{type:String,required:true},
    desc:{type:String,required:true},
    price:{type:Number,required:true},
    imgpath:{type:String,required:true},
    stock:{type:Number,required:true},
    grounding:{type:Boolean,default:false}

 })
 
 let goods=mongoose.model('goods',goodsSchema);

module.exports=goods
//抛出数据模型