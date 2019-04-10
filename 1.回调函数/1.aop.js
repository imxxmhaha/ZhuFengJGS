// var myFunc = function(arr){
//     console.log(1);
//     console.log(arr);   //输出 [1, 2, 2, 3, 4, 6, 7]
// }
//
// Function.prototype.before = function(fn){
//     var _this = this;       //用来保存调用这个函数的引用，如myFunc调用此函数，则_this指向myFunc
//     return function(){      //返回一个函数，相当于一个代理函数，也就是说，这里包含了原函数和新函数，原函数指的是myFunc，新函数指的是fn
//         fn.apply(this,arguments);   //修正this的指向，将this指针指向fn，将myFunc接收的参数传给fn处理。
//         return _this.apply(this,arguments);     //执行原函数
//     }
// }
//
// myFunc = myFunc.before(function(arr){
//     console.log(2);
//     console.log(arr);   //输出 [3, 2, 1, 6, 2, 7, 4]
//     arr.sort();
// });
//
// myFunc([3,2,1,6,2,7,4]);   //先输出2,再输出1

// 1.首先由一个目标函数
// var myFn = function (arr) {
//     console.log(1);
//     console.log(arr);   //输出 [1, 2, 2, 3, 4, 6, 7]
// }
//
// // 2.定义aop切面规则
// Function.prototype.before = function (fn) {
//     var _this = this;       //用来保存调用这个函数的引用，如myFunc调用此函数，则_this指向myFunc
//     return function () {      //返回一个函数，相当于一个代理函数，也就是说，这里包含了原函数和新函数，原函数指的是myFunc，新函数指的是fn
//         fn.apply(this, arguments);   //修正this的指向，将this指针指向fn，将myFunc接收的参数传给fn处理。
//         return _this.apply(this, arguments);     //执行原函数
//     }
// }
//
// // 3. 定义aop切面函数
// var aopFn = function (arr) {
//     console.log(2);
//     console.log(arr);   //输出 [3, 2, 1, 6, 2, 7, 4]
//     arr.sort();
//
// }
//
//
// myFn = myFn.before(aopFn);
// myFn([3, 2, 1, 6, 2, 7, 4]);   //先输出2,再输出1


// 1.定义目标函数
var myFn = function (name,age) {
    console.log("姓名:"+name+", age:"+age);
}

//2.定义切面规则,方法前执行
Function.prototype.before = function(callback){
    var me = this;
    return function () {   // 这个函数的this 指的是myFn() 前面的,谁调用的指向的就是谁
        // 1.目标函数之前 织入的函数
        callback.apply(this,arguments);

        // 2.目标函数
        me.apply(this,arguments);
    }
}

//3.定义切面规则,方法后执行
Function.prototype.after = function (callback) {
    var me = this;
    return function () {
        // 1.先执行原函数
        me.apply(this,arguments);
        // 2.执行后置通知
        callback.apply(this,arguments);
    }
}

//4.定义前置通知函数
var beforeFn = function (name,age) {
    console.log("你好 "+age+"岁的"+name+",我是前置通知");
}

// 5.定义后置通知函数
var afterFn = function(name,age){
    console.log("你好 "+age+"岁的"+name+",我是后置通知");
}

//6.调用
myFn = myFn.before(beforeFn).after(afterFn);
myFn("小鸣哥","19")


