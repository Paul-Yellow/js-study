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