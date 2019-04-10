// 并发调用接口 两个ajax   ajax1=> name  ajax2 => age   = name+age
let fs = require('fs'); //fileSystem
let person = {};

function after(times, callback) {  // 满足一个特点就是高阶函数
    return function () {
        if (--times === 0) {
            callback(person);
        }
    }
}

var out = after(2, function (param) {
    console.log(param);
})

fs.readFile('name.txt','utf-8',function (err,data) {
    if(err) return console.log(err);
    // console.log(data);
    person.name = data;
    out();
})

fs.readFile('age.txt','utf-8',function (err,data) {
    if(err) return console.log(err);
    // console.log(data);
    person.age = data;
    out();
})



