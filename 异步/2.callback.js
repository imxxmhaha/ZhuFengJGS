let fs = require('fs');

// 多个异步同时执行,在某一个时刻拿到最终的结果
let person = {}
// 哨兵函数
// function out(){
//     if(Object.keys(person).length ===3){
//         console.log(person)
//     }
// }
function after(times,callback){
    return function(){
        if(--times === 0){
            callback(person);
        }
    }

}

let out = after(3,function (param) {
    console.log(param);
})

fs.readFile('./name.txt','utf8',function (err,data) {
    person.name = data;
    out();
})

fs.readFile('./age.txt','utf8',function (err,data) {
    person.age = data;
    out();
})

fs.readFile('./address.txt','utf8',function (err,data) {
    person.address = data;
    out();
})




