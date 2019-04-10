let fs = require('fs'); //fileSystem
// let mzfs = require('mz/fs');
// mzfs.readFile('./name.txt','utf-8').then(data=>{
//     console.log(data);
// })

// function read(url){
//     return new Promise((resolve, reject) => {
//         fs.readFile(url,'utf-8',function (err,data) {
//             if(err) return reject(err);
//             resolve(data);
//         })
//     })
// }
// let promise1 = read('name.txt');
// promise1.then(value => console.log(value))


// function promisify(fn) {
//     return function () { // ['name.txt','utf-8']
//         return new Promise((resolve, reject) => {
//             fn(...arguments,function (err,data) {
//                 if(err) reject(err);
//                 resolve(data);
//             })
//         })
//     }
// }
//
// let read = promisify(fs.readFile);
// read('./name.txt','utf-8').then(result=>{
//     console.log(result);
// });
// let write = promisify(fs.writeFile)
// write('./name.txt',123).then(data=>{
//     console.log("写入成功");
// })

// Promise.all([promise1,promise2...promisen])  --- 参数里面是n个异步任务
// then() 里面是resolve处理后的结果,data 是一个数组  数组里面依次按顺序存储的是每个异步任务的结果集
// Promise.all([read('name.txt'),read('age.txt'),1,2,3]).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// });


// Promise.race([read('name.txt'),read('age.txt')]).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// });
