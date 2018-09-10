var username = "tom";
var obj = {
    username:"jack",
    age:20
}
/* 1.exports 是指向的 module.exports 的引用
2.module.exports 初始值为一个空对象 {}，所以 exports 初始值也是 {}
3.require() 返回的是 module.exports 而不是 exports */
exports.ob = obj;

//module.exports=obj
