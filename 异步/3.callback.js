let fs = require('fs')
// 发布订阅,先把需要订阅的内容保存到队列里,当发布时让数组中的函数依次执行即可
let person = {}

let Dep = {
    arr:[],
    on(fn) {
        this.arr.push(fn)
    },
    emit() {
        if(Object.keys(person).length === 3){
            this.arr.forEach(function (fn) {
                fn();
            })
        }
    }
}

// 观察者模式基于发布订阅  vue  观察者模式
Dep.on(function out() {
        console.log(person);
    }
)
Dep.on(function out() {
        console.log('方法执行结束了');
    }
)

fs.readFile('./name.txt', 'utf8', function (err, data) {
    person.name = data;
    Dep.emit();
})

fs.readFile('./age.txt', 'utf8', function (err, data) {
    person.age = data;
    Dep.emit();
})

fs.readFile('./address.txt', 'utf8', function (err, data) {
    person.address = data;
    Dep.emit();
})
