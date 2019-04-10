// 观察者模式   基于发布订阅模式
// 发布订阅   发布和订阅 两者无关
//     类比于java中的消息队列   生产者生产消息到broker  消费者去broker去消费消息  面向broker

// 观察者模式  观察者  和  被观察者
// 被观察者  应该存放着观察者  我家有个小宝宝 有一个状态
// 被观察者状态变化  要更新自己身上的所有的观察者
//    举个栗子,爸爸妈妈在观察小宝宝,小宝宝不开心了 要及时更新状态,通知爸爸妈妈 我不开心了

class Subject{  // 小宝宝
    constructor(){
        this.state = '开心';
        this.arr = [];
    }
    attach(observer){  //装载观察者的   类似于订阅
        this.arr.push(observer);
    }
    setState(newState){  // 更新自己的状态   类似于发布
        this.state = newState;
        this.arr.forEach(observer=>observer.update(newState));
    }
}

class Observer{  // 我

    constructor(who){
        this.who = who;
    }

    update(newState){
        console.log(this.who+newState+'了');
    }
}

let subject = new Subject();
let my1 = new Observer('我');
let my2 = new Observer('媳妇');

subject.attach(my1); // 装载观察者
subject.attach(my2);
subject.setState('大哭');
