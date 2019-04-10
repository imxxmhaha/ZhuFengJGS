// generator  生成  iterator  迭代器 (迭代器有一个next方法,每次调用后都会返回value,done两个属性)

// 类数组  有长度  有索引  是个对象  能被迭代

// 给一个对象添加迭代器, 可以使他被迭代
// 这个函数执行后返回的是一个迭代器
// let obj = {0:1,1:2,2:3,length:3,[Symbol.iterator]:function () {
//     let me = this;
//     let index = 0;
//     return { // 迭代器
//         next(){
//             console.log(index);
//             return {value:me[index],done:index++ ===me.length}
//         }
//     }
// }};

let obj = {0:1,1:2,2:3,length:3,[Symbol.iterator]:function * () {
        let index = 0;
        while(index !== this.length){
            yield this[index++];
        }
    }};

function arg(){
    let arr = [...obj];
    console.log(arr);
    console.log(Array.isArray(arr));
}

arg(1,2,3,4,5);
