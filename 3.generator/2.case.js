function * read() {  //生成器会配合yield 来使用 ,如果碰到yield会暂停执行
    yield 1; // 产出
    yield 2;
    yield 3;
}
// 生成器返回的迭代器  迭代器是有next方法
let it = read();
// console.log(it); //Object [Generator] {}

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

