## MongoDB简介
MongoDB是一个基于分布式文件存储的数据库，由C++语言编写。目的是为WEB应用提供扩展的高性能的数据存储解决方案。数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型。Mongo最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。
## 相关命令
1. show dbs  *显示所有的数据库*
2. db  *当前所在数据库*
3. use <databaseName>  *使用该数据库/建立数据库*
4. db.dropDatabase( )  *删除数据库*
5. db.version() *数据库版本*
6. show collections  *显示当前数据所有的集合*
7. db.集合.insert( )  *插入数据*
8. db.集合.find( ) *查询所有数据*
9. db.集合.findOne( ) *查询第一个文件数据*
10. db.集合.update({查询},{修改}) * 修改文件数据*
11. db.集合.remove({条件}) *删除数据*
12. db.集合.drop( ) *删除整个集合*
13. db.集合.insert([数组])  *插入数据*
14. db.集合.update(query,update,upsert,multi)
```
query : update的查询条件，类似sql update查询内where后面的。
update : update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的
upsert : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
multi : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
```

## 一万条数据批量插入和循环插入

1. 循环插入
```
var startTime = (new Date()).getTime()
var db = connect('log')

for(var i = 0;i<10000;i++){
    db.test.insert({num:i})
}
var runTime = (new Date()).getTime()-startTime
print('insert time is '+ runTime) 
// 第一次 2699ms
// 第二次 2743ms
// 第三次 2699ms



```
2. 批量插入

```
var startTime = (new Date()).getTime()
var db = connect('log')
var tempArr = []
for(var i = 0;i<10000;i++){
    tempArr.push({num:i})
}
db.test.insert(tempArr)
var runTime = (new Date()).getTime()-startTime
print('insert time is '+ runTime)
// 第一次 114ms
// 第二次 108ms
// 第三次 112ms

```

> **总结:** 大批量数据插入数据库的时候，批量插入速度是循环插入20倍还有多
