## DOM 原生方法getBoundingClientRect（）获取元素相对视口位置

1. DOMRect 对象包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的
2. 当计算边界矩形时，会考虑视口区域（或其他可滚动元素）内的滚动操作，也就是说，当滚动位置发生了改变，top和left属性值就会随之立即发生变化（因此，它们的值是相对于视口的，而不是绝对的）。如果你需要获得相对于整个网页左上角定位的属性值，那么只要给top、left属性值加上当前的滚动位置（通过window.scrollX和window.scrollY），这样就可以获取与当前的滚动位置无关的值。
```
<div id="box"></div>

<style>
    body{
        margin: 0;
        padding: 0
    }
    #box {
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: #ccc;
        margin: 0;
        padding: 0;
        border: 2px solid #000;
        top:20px;
        left: 20px
        
    }
</style>

<script>
    

    var oBox = document.getElementById("box");
    console.log(oBox.getBoundingClientRect());
    // 打印结果
    // bottom: 124 顶部距离盒子底部的距离（包括bordder）
    // height: 104 盒子高度（）
    // left: 20    盒子左边距离视口左边的距离 
    // right: 124  盒子右边距离视口左侧的距离
    // top: 20     盒子顶部距离视口顶部的距离
    // width: 104  盒子的宽度
    

    
</script>

```