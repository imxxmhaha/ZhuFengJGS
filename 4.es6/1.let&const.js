//  var  要求全部改用const let
//  var  声明的变量(污染全局变量,window.a)
//  var  导致变量提升的问题
// 1)
// var a = 1;
// console.log(window.a);


// 2) 使用var 会导致变量提升的问题
// console.log(a); //undefined   // function var  都会导致变量提升(使用之前)
// var a = 1;
// console.log(a); // 1


// 3)  var  可以被重复声明  let可以解决重复定义的问题
// var a = 1;
// var a = 2;
// var a = 3;
// console.log(a);

// 4) var 作用域的问题 (常见的作用域 全局作用域  函数作用域)
// {
//     var a = 'a';
//     let b = 'b';
// }
// console.log(a);
// console.log(b); //ReferenceError: b is not defined

let a = 100;
{
    console.log(a); // 输出100
}

// let a = 100;
// {
//     // 如果当前作用域没有定义a  会从上级去查找a
//     // 如果当前作用域定义了啊  会以本作用域为准
//     // 同时let 定义的变量a  不会造成变量提升,所以不能提前使用
//     console.log(a); // ReferenceError: a is not defined
//     let a = 200;
// }

// for (let i = 0; i <10 ; i++) {
//     setTimeout(()=>{
//         console.log(i);// 依次打印0~9
//     })
// }
// for (var i = 0; i <10 ; i++) {
//     setTimeout(()=>{
//         console.log(i);// 打印全是10
//     })
// }




// const 常亮   不会变的量
// const PI = '3.14';
// PI = 3.15; // 报错
// console.log(PI);

// 如果PI是引用数据类型  只要在内存中的地址是同一个都行
const PI = {r:'3.14'};
PI.r = 3.15
console.log(PI);

// 全部使用 let+const
