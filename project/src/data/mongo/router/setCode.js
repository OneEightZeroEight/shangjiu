var svgCaptcha = require('svg-captcha');
var router = require('express').Router();
// var session = require('express-session');

var CodeArr = [];

router.get('/get-img-verify', function (req, res) {
    console.log(req.query);
    var option = req.query;
    // 验证码，有两个属性，text是字符，data是svg代码
    var code = svgCaptcha.create(option);
    // var code = svgCaptcha.create({ fontSize: 50, width: 100, height: 40 });

    //保存到session,忽略大小写
    // req.session["randomcode"] = code.text.toLowerCase();
    CodeArr.push(code.text.toLowerCase());
    console.log(CodeArr);
    ///返回数据直接放入页面元素展示即可
    res.type('svg');
    //res.status(200).send(code.data);
    res.send(code.data);

    // const captcha = svgCaptcha.create({ fontSize: 50, width: 100, height: 40 });
    // res.setHeader('Content-Type', 'image/svg+xml');
    // res.write(String(captcha.data));
    // res.end();

});


//验证
router.get('/VerificationCode', function (req, res, next) {
    console.log(req.query.imageCode);
    setTimeout(function () {
        CodeArr = [];
    },60000);
    var imageCode = req.query.imageCode;
    console.log(imageCode);
    console.log(CodeArr);

    if (imageCode !== CodeArr[CodeArr.length-1]) {
        res.send({err:-1,msg:"验证码错误",data:null});
    }else {
        res.send({err:0,msg:"验证码正确",data:null});
    }
});

//发送短信验证码
// router.post('/sendMsgCode', function (req, res, next) {
//     console.log(req.body.mobile);
//     let mobile = req.body.mobile;
//     let randomNum = Math.ceil(Math.random()*90000)+10000;
//     router.post("127.0.0.1:3000/add",{
//         param:randomNum,
//         mobile:mobile
//     })
//
// });


module.exports = router;