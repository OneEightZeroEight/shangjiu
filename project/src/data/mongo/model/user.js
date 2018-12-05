// 创建数据模型
const mongoose = require("mongoose");
let userSchema = mongoose.Schema({
    userName:{type:String,required:true},
    userPass:{type:String,required:true},
});

//注意：数据库的集合名，在这里会被自动转化为复数，所以建立集合的时候尽量为复数
let user = mongoose.model("user",userSchema);
module.exports = user;