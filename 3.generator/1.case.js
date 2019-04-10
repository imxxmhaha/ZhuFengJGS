// generator  生成  iterator  迭代器

// 类数组  有长度  有索引  是个对象  能被迭代

function arg(){
    let arr = [...arguments];
    console.log(arr);
    console.log(Array.isArray(arr));
}

arg(1,2,3,4,5);
