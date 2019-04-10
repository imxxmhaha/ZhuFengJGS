let fs = require('fs');

// 发布 订阅
function EventRmitter(){
    this._arr = [];
}
EventRmitter.prototype.on = function(callback){  // on 订阅  先订阅才发布
  this._arr.push(callback);
};

EventRmitter.prototype.emit = function(){ // 发布, 发布时 需要让on的方法一次执行
    this._arr.forEach(fn=>fn.apply(this,arguments))
};

let e = new EventRmitter();
let person = {}
e.on(function(key,value){
    person[key] = value;
    if(Object.keys(person).length === 2){
        console.log(person);
    }
});

fs.readFile('./name.txt','utf-8',function (err,data) {
    if(err) return console.log(err);
    e.emit('name',data);
});

fs.readFile('./age.txt','utf-8',function (err,data) {
    if(err) return console.log(err);
    e.emit('age',data);
});
