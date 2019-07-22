// 数组修饰器
var db = connect('company')
// db.workmate.update({},{$set:{interest:[]}},{multi:true})
// db.workmate.update({"name":"xiaoWang"},{$push:{interest:'draw'}})
// db.workmate.update({"name":"MinJie"},{$set:{"skill.Four":[]}})
// db.workmate.update({"name":"MinJie"},{$push:{"skill.Four":'eat'}})
// var temArr = [ 'draw', 'sing']
// db.workmate.update({"name":"xiaoWang"},{$push:{interest:'draw'}})
// db.workmate.update({"name":"xiaoWang"},{$addToSet:{interest:'read'}})
// db.workmate.update({"name":"xiaoWang"},{$addToSet:{interest:'read'}})
// db.workmate.update({"name":"xiaoWang"},{$addToSet:{interest:{$each:temArr}}})
db.workmate.update({"name":'MinJie'},{$push:{"skill.Four":'code'}})



print('success')
