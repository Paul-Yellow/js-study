## 策略模式的定义
**策略模式的定义是:** 定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换
> 一个基于策略模式的程序至少由两部分组成。第一个部分是一组策略类，策略类封装了具体 的算法，并负责具体的计算过程。 第二个部分是环境类 Context，Context 接受客户的请求，随后 把请求委托给某一个策略类

## 策略模式的应用
1. 计算奖金
> 需求：绩效为 S 的人年 终奖有 4 倍工资，绩效为 A 的人年终奖有 3 倍工资，而绩效为 B 的人年终奖是 2 倍工资
```
基于类的实现方式：
// 定义算法类
    var performanceS = function() {};
    performanceS.prototype.calculate = function(salary) {
        return salary * 4;
    };
    var performanceA = function() {};
    performanceA.prototype.calculate = function(salary) {
        return salary * 3;
    };
    var performanceB = function() {};
    performanceB.prototype.calculate = function(salary) {
        return salary * 2;
    };

    // 定义奖金规则类
    var Bonus = function() {
        this.salary = null;
        this.strategy = null;
    };
    // 添加工资
    Bonus.prototype.setSalary = function(salary) {
        this.salary = salary;
    };
    // 添加奖金评级
    Bonus.prototype.setStrategy = function(strategy) {
        this.strategy = strategy;
    };
    // 获取奖金
    Bonus.prototype.getBonus = function() {
       return this.strategy.calculate(this.salary);
    };
   
    var bonus = new Bonus();
    bonus.setSalary(10000);

    bonus.setStrategy(new performanceS());
    console.log(bonus.getBonus()); // 输出:40000 

    bonus.setStrategy( new performanceA() ); // 重新设置策略对象
    console.log(bonus.getBonus()); // 输出:30000

JavaScript版本：

    var strategies = {
            S: function(salary) {
                return salary * 4;
            },
            A: function(salary) {
                return salary * 3;
            },
            B: function(salary) {
                return salary * 2;
            }
        };
        var calculateBonus = function(salary, level) {
            return strategies[level](salary);
        };
        console.log(calculateBonus(10000, 'S'));// 40000
        console.log(calculateBonus(10000, 'B'));// 20000



```



## 侧率模式的优缺点