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

    14.1  query : update的查询条件，类似sql update查询内where后面的。

    14.2 update : update的对象和一些更新的操作符（如$set,$inc...）等，也可以理解为sql update查询内set后面的

      **操作对象：**
    > $set 用来修改一个指定的键值(key)。有两种情况一种是内嵌的形式，一种是非内嵌的形式
    ```
    假如数据库有条数据：
    {
        name:'MinJie',
        age:20,
        sex:0,
        job:'UI设计',
        skill:{
            skillOne:'PhotoShop',
            SkillTwo:'UI',
            SkillThree:'Word+Excel+PPT'
        },
        interest:[],
        regeditTime:new Date()
    }

    非内嵌
    db.workmate.update({"name":"MinJie"},{"$set":{sex:2,age:21}})

    内嵌形式
    db.workmate.update({"name":"MinJie"},{"$set":{"skill.skillThree":'word'}})


    ```
    > $unset用于将key删除
    ```
    db.workmate.update({"name":"MinJie"},{$unset:{"age":''}})
    ```
    > $inc对数字进行计算
    ```
    db.workmate.update({"name":"MinJie"},{$inc:{"age":-2}})

    ```
    **操作数组：**
    > $push追加数组/内嵌文档值
    ```
    db.workmate.update({name:'MinJie'},{$push:{interest:'draw'}})

    db.workmate.update({name:'MinJie'},{$push:{"skill.skillFour":'draw'}})


    ```
    >$ne查找是否存在。   (没有则修改，有则不修改)
    ```
    db.workmate.update({name:'xiaoWang',"interest":{$ne:'playGame'}},{$push:{interest:'Game'}})

    ```
    > $addToSet 升级版的$ne (查找是否存在，不存在就push上去)
    ```
     b.workmate.update({name:"xiaoWang"},{$addToSet:{interest:"readBook"}})
    ```
    >$each 批量追加
    ```
    var newInterset=["Sing","Dance","Code"];
    db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:{$each:newInterset}}})

    ```
    >$pop 删除数组值
    $pop只删除一次，并不是删除所有数组中的值。而且它有两个选项，一个是1 从数组末端进行删除和-1 从数组开端进行删除。

        db.workmate.update({name:'xiaoWang'},{$pop:{interest:1}})
    
    >数组定位修改

        db.workmate.update({name:'xiaoWang'},{$set:{"interest.2":"Code"}})

    14.3 upsert : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。

    14.4  multi : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。

15. db.collection.find(query, projection)

   * query:可选，使用查询操作符指定查询条件
   * projection: 可选，使用投影操作符指定返回的键。查询时返回文档中所有键值， 只需省略该参数即可（默认省略）

     **造数据:**
        
            var workmate1={
                    name:'JSPang',
                    age:33,
                    sex:1,
                    job:'前端',
                    skill:{
                        skillOne:'HTML+CSS',
                        skillTwo:'JavaScript',
                        skillThree:'PHP'
                    },
                    regeditTime:new Date(),
                    interest:['写代码','篮球','游泳']
            }
        
        

     >简单查找

            db.workmate.find({"skill.skillOne":"HTML+CSS"})

     >筛选字段

            db.workmate.find(
                {"skill.skillOne":"HTML+CSS"},
                {name:true,"skill.skillOne":true}
            )
     >不等修饰符

            小于($lt):英文全称less-than
            小于等于($lte)：英文全称less-than-equal
            大于($gt):英文全称greater-than
            大于等于($gte):英文全称greater-than-equal
            不等于($ne):英文全称not-equal 

            db.workmate.find(
                {age:{$lte:30,$gte:25}},
                {name:true,age:true,"skill.skillOne":true,_id:false}
            )

     >日期查找

            //查找注册日期大于2018年1月10日的数据
            var startDate= new Date('01/01/2018');
            db.workmate.find(
                {regeditTime:{$gt:startDate}},
                {name:true,age:true,"skill.skillOne":true,_id:false}
            )

            
        **多条件查询**
        >$in修饰符

            // 查找年龄是25岁和33岁的信息
            db.workmate.find({age:{$in:[25,33]}},
                {name:1,"skill.skillOne":1,age:1,_id:0}
            )

        >$or修饰符

            //如查询同事中大于30岁或者会做PHP的信息
            db.workmate.find({$or:[
                {age:{$gte:30}},
                {"skill.skillThree":'PHP'}
            ]},
                {name:1,"skill.skillThree":1,age:1,_id:0}
            )

       > $and修饰符

            //$and用来查找几个key值都满足的情况.大于30岁并且会做PHP的信息
            db.workmate.find({$and:[
                {age:{$gte:30}},
                {"skill.skillThree":'PHP'}
            ]},
                {name:1,"skill.skillThree":1,age:1,_id:0}
            )
        >$not修饰符
            
            //它用来查询除条件之外的值，比如我们现在要查找除年龄大于20岁，小于30岁的人员信息。
            db.workmate.find({
                age:{
                    $not:{
                        $lte:30,
                        $gte:20
                    }
                }
            },
            {name:1,"skill.skillOne":1,age:1,_id:0}
            )
     **find的数组查询**

     >基本数组查询
     
            //一个中括号([]),因为加上中括号就相当于完全匹配了
            db.workmate.find({interest:['画画','聚会','看电影']},
                {name:1,interest:1,age:1,_id:0} 
            )
     > $all-数组多项查询

            //查询出喜欢看电影和看书的人员信息
            db.workmate.find(
                {interest:{$all:["看电影","看书"]}},
                {name:1,interest:1,age:1,_id:0} 
            )

     >$in-数组的或者查询

            //$in主要满足数组中的一项就可以被查出来.查询爱好中有看电影的或者看书的员工信息
            db.workmate.find(
                {interest:{$in:["看电影","看书"]}},
                {name:1,interest:1,age:1,_id:0} 
            )
     >$size-数组个数查询

            //$size修饰符可以根据数组的数量查询出结果.要查找兴趣的数量是5个人员信息
            db.workmate.find(
                {interest:{$size:5}},
                {name:1,interest:1,age:1,_id:0} 
            )
     >$slice-显示选项

            //有时候我并不需要显示出数组中的所有值，而是只显示前两项，比如我们现在想显示每个人兴趣的前两项，而不是把每个人所有的兴趣都显示出来。slice:-1，就是最后一项
            db.workmate.find(
                {},
                {name:1,interest:{$slice:2},age:1,_id:0} 
            )
        **find的参数使用方法**

        - query：这个就是查询条件，MongoDB默认的第一个参数。
        - fields：（返回内容）查询出来后显示的结果样式，可以用true和- - false控制是否显示。
        - limit：返回的数量，后边跟数字，控制每次查询返回的结果数量。
        - skip:跳过多少个显示，和limit结合可以实现分页。
        - sort：排序方式，从小到大排序使用1，从大到小排序使用-1。

        >$where修饰符

         //它是一个非常强大的修饰符，但强大的背后也意味着有风险存在。它可以让我们在条件里使用javascript的方法来进行复杂查询.

         db.workmate.find(
            {$where:"this.age>30"},
            {name:true,age:true,_id:false}
         )

         //这里的this指向的是（查询集合）本身

## find如何在js文本中使用
  1. hasNext循环结果
    
            var db = connect("company")  //进行链接对应的集合collections
            var result = db.workmate.find() //声明变量result，并把查询结果赋值给result
            //利用游标的hasNext()进行循环输出结果。
            while(result.hasNext()){
                printjson(result.next())  //用json格式打印结果
            }

 2. forEach循环

    利用hasNext循环结果，需要借助while的帮助，MongoDB也为我们提供了forEach循环，现在修改上边的代码，使用forEach循环来输出结果。

            var db = connect("company")  //进行链接对应的集合collections
            var result = db.workmate.find() //声明变量result，并把查询结果赋值给result
            //利用游标的hasNext()进行循环输出结果。
            result.forEach(function(result){
                printjson(result)
            })

## 建立索引
  1. db.集合.stats() 查看数据中的数据条数

  2. db.集合.ensureIndex({username:1}) 建立索引

  3. db.集合.getIndexes() 查看现有索引

  4. db.集合.dropIndex('索引ID')

  5. 指定索引查询（hint）
          
          //MongoDB的复合查询是按照我们的索引顺序进行查询的。就是我们用db.randomInfo.getIndexes()查询出的数组

          //数字的索引要比字符串的索引快，这就需要一个方法来打破索引表的查询顺序，用我们自己指定的索引优先查询，这个方法就是hint().

         var  rs= db.randomInfo.find({username:'7xwb8y3',randNum0:565509}).hint({randNum0:1});
    
### 全文索引

1. 建立全文索引
  
        // contextInfo 集合中字段名称
        db.info.ensureIndex({contextInfo:'text'}) 

2. 全文索引查找的两个关键修饰符

    * $text:表示要在全文索引中查东西。

   * $search:后边跟查找的内容。
            
            // 查找一个
            db.info.find({$text:{$search:"programmer"}})

            //查找多个
            db.info.find({$text:{$search:"programmer family diary drink"}})
        




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
