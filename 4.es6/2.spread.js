// ... 展开运算符

// 把两个数组合并成一个数组
let arr1 = [1,2,3];
let arr2 = [4,5,6];

// let arr3 = arr1.concat(arr2);  // 数组拼接
// let arr3 = [...arr1,...arr2];  // 展开+运算
// console.log(arr3);


// 把两个对象合并成一个对象
// 深拷贝 (拷贝后无关)  浅拷贝 (拷贝后还有关系,堆内存的应用关系还是公用的)
// let school = {name:'zfpx'};
// let my = {age:{count:18}};
// // 把原来的my放在新对象里,用一个新的age吧原来的age也拷贝一份
// let newMy = {...my,age:{...my.age}};
// let all = {...school,...newMy};
// my.age.count = 20;
// console.log(all);

//我们可以把对象先转化成字符串   再把字符串转换成对象
let school = {name:'zfpx',fn:function () {}};
let my = {age:{count:18},name:'xxm'};

let all =JSON.parse(JSON.stringify({...school,...my}));
my.age.count = 20;
console.log(all); // { name: 'xxm', age: { count: 18 } }   不支持函数类型
