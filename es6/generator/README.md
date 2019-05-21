## 基本概念 
1. Generator 函数是一个状态机，封装了多个内部状态。
2. 函数体内部使用yield表达式，定义不同的内部状态。
3. 执行 Generator 函数会返回一个遍历器对象，必须调用遍历器对象的next方法，使得指针移向下一个状态。
4. next方法返回一个对象，它的value属性就是当前 **yield表达式的值**，done属性是布尔值，false表示遍历还没有结束,true 表示便利结束。如：
```
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

hw.next()
// { value: 'hello', done: false }


```
## yield 表达式 & next()
1. Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
2. yield表达式本身没有返回值，或者说总是返回undefined
3. next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值
4. 通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为

## for...of 循环
1. for...of循环可以自动遍历 Generator 函数运行时生成的Iterator对象，且此时不再需要调用next方法
2. 一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象，所以上面代码的return语句返回的6，不包括在for...of循环之中
3. 使用for...of就不用调用next()方法了，但是这里for...of 拿到的值就是next()方法返回的value值.
```
function* iterEntries(obj) {
  let keys = Object.keys(obj);
  for (let i=0; i < keys.length; i++) {
    let key = keys[i];
    yield [key, obj[key]];
  }
}

let myObj = { foo: 3, bar: 7 };

// for...of 拿到的值就是yield表达式的值，所以才能结构。
for (let [key, value] of iterEntries(myObj)) {
  console.log(key, value);
}
// foo 3
// bar 7

```
## Generator的异步应用
```
 function showLoadingScreen() {
        console.log('step1');
    }
    function loadUIDataAsynchronously() {
        setTimeout(() => {
            loader.next("异步操作sync"); // 把结果传递出去
        }, 2000);
    }
    function hideLoadingScreen() {
        console.log('step3');
    }
    function* loadUI() {
        showLoadingScreen();
        var res = yield loadUIDataAsynchronously();
        console.log(res) //拿到异步执行的结果
        hideLoadingScreen();
    }
    var loader = loadUI();
    
   loader.next()
```
## Generator 函数的this
1. Generator 函数总是返回一个遍历器，而不是this对象，ES6 规定这个遍历器是 Generator 函数的实例，也继承了 Generator 函数的prototype对象上的方法。
2. 获取正常this方式：
```
 function* F() {
        yield this.name = 'generator'
    }

    F.prototype.getName = function() {
        console.log(this.name) //undefind 这里拿不到定义的状态
        console.log(this) // F {<suspended>}
        console.log('gen') // 'gen'
    };
    // 声明一个空的对象
    var obj = {};
    var f = F.call(obj);
    f.next()
    f instanceof F; // true
    f.getName(); //标注在实例方法中
    console.log(obj.name) //这里也是只用执行了next()方法后才能打印出  generator' ，否则就是undefined

```
或
```

 function* F() {
        yield this.name = 'generator'
    }

    F.prototype.getName = function() {
        console.log(this.name) //undefind 这里拿不到定义的状态
        console.log(this) // F {<suspended>}
        console.log('gen') // 'gen'
    };
    // F自己原型
    var f = F.call(F.prototype);
    f.next()
    f instanceof F; // true
    f.getName(); //标注在实例方法中
    console.log(f.name) //这里也是只用执行了next()方法后才能打印出  generator' ，否则就是undefined
```
