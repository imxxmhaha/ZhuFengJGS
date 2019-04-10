// 有一个函数可以接受一个函数,可以根据条件选择执行这个函数
// 只要接受参数是函数,或者返回值是函数 都算高阶函数
function after(times, callback) {

    return function () {
        if (--times === 0) {
            callback();
        }
    }
}

let fn = after(3, function () {
    console.log('fn 被调用了三次');
})

fn();
fn();
fn();


// 读取一个文件  3s后才能获取结果

function read(callback) {
    setTimeout(() => {
        let r = 'zfpx'
        callback(r)
    },3000)
}

read(function(result){
    console.log(result);
});


// 文件读取
// 异步的方法都不支持try catch
let fs = require('fs')  // fileSystem
fs.readFile('1.txt','utf-8',function (err,data) {
    console.log(data);
});

