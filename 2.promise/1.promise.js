// Promise   是一个类  承诺  允诺  (异步解决方案)
// pending 等待状态 -> fulfilled 成功态
// pending 等待状态 -> rejected 失败态
// 成功态和失败态  不能相互转化
// executor函数   而且会立即执行,参数是resolve 函数  reject函数
// 每个promise实例 都有一个then方法
let promise = new Promise(function (resolve, reject) { //executor
    console.log(1);
    resolve('玩具少');
    reject('玩具多');
});

// onfulfilled,onrejected
promise.then(function (val) {
    console.log(val,'success');
},function (err) {
    console.log(err,'error');
});

console.log(2);





