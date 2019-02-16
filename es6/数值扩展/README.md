## ES6中把Number相关一些全局的方法，移到了 Number类上
### 第一类行为不一样
1. Number.isFinite()
```
用来检查一个数值是否为有限的（finite），即不是Infinity

```
2. Number.isNaN()
```
Number.isNaN()用来检查一个值是否为NaN

```
**它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。**

### 第二类行为一样

1. Number.parseInt()

2. Number.parseFloat()

**这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。**

## 新增方法

1. Number.isInteger()

```
Number.isInteger()用来判断一个数值是否为整数

```
## Math对象的扩展 
ES6 在 Math 对象上新增了 17 个与数学相关的方法。所有这些方法都是静态方法，只能在 Math 对象上调用。现在之记录几种可能会用到的。

1. Math.trunc()
```
Math.trunc方法用于去除一个数的小数部分，返回整数部分
```

2. Math.sign()

```
Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值
```



## 注意事项
JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值