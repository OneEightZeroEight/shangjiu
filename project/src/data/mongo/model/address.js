
// 创建数据模型
const mongoose = require("mongoose");
let addrSchema = mongoose.Schema({
    user:{type:String,required:true},
    userName:{type:String,required:true},
    userPhone:{type:String,required:true},
    userProvince:{type:String,required:true},
    userCity:{type:String,required:true},
    userAddr:{type:String,required:true},
    userDetailsAddr:{type:String,required:true},
    addrDefauleBtn:{type:String}
});

//注意：数据库的集合名，在这里会被自动转化为复数，所以建立集合的时候尽量为复数
let address = mongoose.model("address",addrSchema);
module.exports = address;