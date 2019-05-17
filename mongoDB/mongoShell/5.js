// var json =[
//     {"_id":1},
//     {"_id":2},
//     {"_id":3},
// ]
// var db = connect('log')
// db.login.insert(json)

// print('insert success
var startTime = (new Date()).getTime()
var db = connect('log')
// for(let i=0;i<1000;i++){
//  db.test.insert({num:1})
// }

var tempArr = []
for(var i=0;i<1000;i++){
    tempArr.push({num:i})
}

db.test.insert(tempArr)

var runTime  = (new Date()).getTime() - startTime

print(`runTime is ${runTime} ms` )
