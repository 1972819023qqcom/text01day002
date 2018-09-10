function People(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

//原型和原型链  的区别？   是什么原型   peopletype 和  

/* People.prototype = {
    sayHello:function(){
        
        console.log(this.name+","+this.age+","+this.sex+"1")
        
    }
} */


People.prototype.sayHello =function(){
    console.log(this.name+","+this.age+","+this.sex+"1")
}

module.exports = People;        //将People抛出

