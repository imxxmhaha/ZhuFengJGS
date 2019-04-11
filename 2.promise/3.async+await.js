let fs = require('../2.promise/node_modules/mz/fs');

// 1.callback  多个请求并发  不好管理  链式调用  导致回调嵌套
// 2.promise   优点:可以优雅的处理异步 处理错误, 基于回调的,还是会有嵌套问题
// 3.generator + co   dva  让代码像同步  不能支持try  catch
// 4.async + await  异步问题  而且支持 try catch
async function read() {
    try{
        let name = await fs.readFile('name.txt','utf8');
        let age = await fs.readFile('age.txt','utf8');
        let e = await [name,age];
        // throw new Error("我错了");
        return e;
    }catch (e) {
        console.log(e);
    }
}

// async  函数执行后返回的是一个promise
// 如果被try +catch  那么这个promise返回的就是真

read().then(data=>{
    console.log(data);
});
