// var json =[
//     {"_id":1},
//     {"_id":2},
//     {"_id":3},
// ]
// var db = connect('log')
// db.login.insert(json)

// print('insert success
// var startTime = (new Date()).getTime()
// var db = connect('log')
// for(let i=0;i<1000;i++){
//  db.test.insert({num:1})
// }

// var tempArr = []
// for(var i=0;i<1000;i++){
//     tempArr.push({num:i})
// }

// db.test.insert(tempArr)

// var runTime  = (new Date()).getTime() - startTime

// print(`runTime is ${runTime} ms` )

// 循环插入
// var startTime = (new Date()).getTime()
// var db = connect('log')

// for(var i = 0;i<10000;i++){
//     db.test.insert({num:i})
// }
// var runTime = (new Date()).getTime()-startTime
// print('insert time is '+ runTime)

// 批量插入
var startTime = (new Date()).getTime()
var db = connect('log')
var tempArr = []
for(var i = 0;i<10000;i++){
    tempArr.push({num:i})
}
db.test.insert(tempArr)
var runTime = (new Date()).getTime()-startTime
print('insert time is '+ runTime)

// 一万条数据 批量插入时间为 107-137 (ms)  循环插入时间为： 2600-2800(ms) 两者是20倍性能差别