// lodash debounce throttle

// after(3,fn(){})  调用三次之后,执行fn
var person = {
    name: "xxm",
    age: "19"
};

 function after(times, callback) {  // 满足一个特点就是高阶函数
    return function () {
        if (--times === 0) {
            callback(person);
        }
    }
}

var out = after(3, function (param) {
    console.log(param);
});

out();
out();
out();
