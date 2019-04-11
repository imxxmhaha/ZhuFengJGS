// function * read() {  //生成器会配合yield 来使用 ,如果碰到yield会暂停执行
//     yield 1; // 产出
//     yield 2;
//     yield 3;
// }
// // 生成器返回的迭代器  迭代器是有next方法  调用next可以返回value和done
// let it = read();
// // console.log(it); //Object [Generator] {}
//
// console.log(it.next());  //第一次next是不能传递参数的
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// async + await  es7 =>  generator +
let fs = require('../2.promise/node_modules/mz/fs');

function * read() {
    let r =   yield fs.readFile('name.txt','utf8');
    let age = yield fs.readFile('age.txt','utf8');
    let  e = yield r+age;
    return e;
}

let co = require('co');
co(read()).then(data=>{
    console.log(data);
});



// let it = read();
// let {value,done} =  it.next();
// value.then(data=>{
//     let {value,done} = it.next(data.toString().trim());
//     value.then(result=>{
//        let {value,done} =  it.next(result);
//       console.log(value);
//     })
// })
