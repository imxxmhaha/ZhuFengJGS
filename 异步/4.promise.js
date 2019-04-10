// 1.回调低于  2.多个异步请求在同一时间合并结果
// promise  自带的
// promise使用时,需要new promise
let p = new Promise(function (resolve, reject) {

});

// 1 Promise  承诺 就是一个类型
// 2 new Promise时需要传递一个executor执行器(同步执行的)
// 3 executor 中有两个参数resolve成功   reject代表的是失败

