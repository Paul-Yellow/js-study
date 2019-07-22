
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
    interest:['看电影','看书','吃美食','钓鱼','旅游']
}
 
var workmate2={
    name:'ShengLei',
    age:31,
    sex:1,
    job:'JAVA后端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'J2EE',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:['篮球','看电影','做饭']
}
 
var workmate3={
    name:'MinJie',
    age:18,
    sex:0,
    job:'UI',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'UI',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:['做饭','画画','看电影']
}
var workmate4={
    name:'XiaoWang',
    age:25,
    sex:1,
    job:'UI',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'UI',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:['写代码','篮球','画画']
}
var workmate5={
    name:'LiangPeng',
    age:28,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
    },
    regeditTime:new Date(),
    interest:['玩游戏','写代码','做饭']
}
 
var workmate6={
    name:'HouFei',
    age:25,
    sex:0,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
    },
    regeditTime:new Date(),
    interest:['化妆','读书','做饭']
}
 
var workmate7={
    name:'LiuYan',
    age:35,
    sex:0,
    job:'美工',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'CAD',
    },
    regeditTime:new Date(),
    interest:['画画','聚会','看电影']
}
 
 
var workmate8={
    name:'DingLu',
    age:20,
    sex:0,
    job:'美工',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'CAD',
    },
    regeditTime:new Date(),
    interest:['美食','看电影','做饭']
}
 
var workmate9={
    name:'JiaPeng',
    age:29,
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
 
var workmate10={
    name:'LiJia',
    age:26,
    sex:0,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:['玩游戏','美食','篮球']
}
var db=connect('company');
// db.workmate.drop()
// var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
// db.workmate.insert(workmateArray);
// db.workmate.find({"skill.skillOne":"HTML+CSS"})
// db.workmate.find({age:{$in:[25,33]}},
//     {name:1,"skill.skillOne":1,age:1,_id:0}
// )
// db.workmate.find({$or:[
//     {age:{$gte:30}},
//     {"skill.skillThree":'PHP'}
// ]},
//     {name:1,"skill.skillThree":1,age:1,_id:0}
// )
// db.workmate.find({},{name:true,age:true,_id:false}).limit(0).skip(2).sort({age:1});
var result = db.workmate.find({},{name:true,_id:false}) //声明变量result，并把查询结果赋值给result
//利用游标的hasNext()进行循环输出结果。
// while(result.hasNext()){
//     printjson(result.next())  //用json格式打印结果
// }
result.forEach(function(result){
    printjson(result)
})
// printjson(result)
print('[SUCCESS]：The data was inserted successfully');
