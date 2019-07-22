//生成随机数
 
function GetRandomNum(min,max){
    let range = max-min;   //得到随机数区间
    let rand = Math.random(); //得到随机值
    return (min + Math.round(rand *range)); //最小值+随机数取整
}
 
//console.log(GetRandomNum(10000,99999));
 
//生成随机用户名
function GetRadomUserName(min,max){
    let tempStringArray= "123456789qwertyuiopasdfghjklzxcvbnm".split("");//构造生成时的字母库数组
    let outPuttext = ""; //最后输出的变量
    //进行循环，随机生产用户名的长度，这里需要生成随机数方法的配合
    for(let i=1 ;i<GetRandomNum(min,max);i++){
        //随机抽取字母，拼装成需要的用户名
        outPuttext=outPuttext+tempStringArray[GetRandomNum(0,tempStringArray.length)]
    }
    return outPuttext;
}
var db = connect('company');
// db.randomInfo.drop();
var  tempInfo = [];
var startTime = (new Date()).getTime()
// for (let i=0;i<2000000;i++){
//     tempInfo.push({
//         username:GetRadomUserName(7,16),
//         regeditTime:new Date(),
//         randNum0:GetRandomNum(100000,999999),
//         randNum1:GetRandomNum(100000,999999),
//         randNum2:GetRandomNum(100000,999999),
//         randNum3:GetRandomNum(100000,999999),
//         randNum4:GetRandomNum(100000,999999),
//         randNum5:GetRandomNum(100000,999999),
//         randNum6:GetRandomNum(100000,999999),
//         randNum7:GetRandomNum(100000,999999),
//         randNum8:GetRandomNum(100000,999999),
//         randNum8:GetRandomNum(100000,999999),
//     })
// }
 
// db.randomInfo.insert(tempInfo);
// db.randomInfo.ensureIndex({username:1})
// var result = db.randomInfo.find({username:'bo3vbhundefined8',randNum0:702206}).hint({randNum0:1})
// result.forEach(res => {
//     printjson(res)
    
// });
// var runTime = (new Date()).getTime()-startTime




// db.info.insert({contextInfo:"I am a love PlayGame, I love life, love family. Every day after work, I write a diary."})
// db.info.insert({contextInfo:"I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink."})


var result = db.info.find({$text:{$search:"\"love PlayGame\""}})
result.forEach(res=>{
    printjson(res)
})

// print('runTime is ' + runTime)