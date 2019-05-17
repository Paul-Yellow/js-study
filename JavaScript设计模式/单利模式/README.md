## 单例模式
定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。一般使用在 线程池、全局缓存等方面。

## 单利模式的应用
 
 1. 普通单利模式
 ```

 var Singleton = function (name) {
        this.name = name
        this.instance = null
    }
    Singleton.prototype.getName = function () {
        console.log(this.name)
    }
    
    Singleton.getInstance = function (name) {
        if(!this.instance){
            this.instance = new Singleton(name)
        }
    }
    var a = Singleton.getInstance('张三')
    var b = Singleton.getInstance('李四')
    alert(a === b) // true

    或者：
    var Singleton2 = function (name) {
            this.name = name
        }
        Singleton2.prototype.getName = function () {
            console.log(this.name)
        }
        
        Singleton2.getInstance = (function () {
            var instance = null;
            return function (name) {
                if(!instance){
                instance = new Singleton2(name)
                
                }
                return instance
            }
        })()
        var c = Singleton2.getInstance('张三')
        var d = Singleton2.getInstance('李四')
        alert(c === d) // true


        
 ```
 总结：虽然通过 Singleton.getInstance 来获取 Singleton 类的唯一对象，这种方式相对简单，但有 一个问题，就是增加了这个类的“不透明性”，Singleton 类的使用者必须知道这是一个单例类， 跟以往通过 new XXX 的方式来获取对象不同，这里偏要使用 Singleton.getInstance 来获取对象。

 2. 透明单利模式
 ```
 var Singleton = (function () {
        var instance = null 
        var Singleton = function (name) {
            if(instance){
                return instance
            }
            this.name = name
            this.init()
            return instance = this; 
        }
        Singleton.prototype.init = function () {
            this.getName()
            
        }
        Singleton.prototype.getName = function () {
            console.log(this.name)
            
        }
        return Singleton

     })()
     var a = new Singleton('张三')
     var b = new Singleton('李四')

 ```
 总结：假设我们某天需要利用这个类从单例类变成 一个普通的可产生多个实例的类，那我们必须得改写 Singleton 构造函数，把控制创建唯一对象 的那一段去掉，这种修改会给我们带来不必要的烦恼

 3. 代理实现单例模式

 ```
 var CreateDiv = function( html ){
         this.html = html;
         this.init(); 
     };

    CreateDiv.prototype.init = function(){
        var div = document.createElement( 'div' ); 
        div.innerHTML = this.html; 
        document.body.appendChild( div );
    };
    var ProxySingletonCreateDiv = (function(){
        var instance;
        return function( html ){
            if ( !instance ){
                instance = new CreateDiv( html );
            }
        return instance; 
        }
    })();
 ```

