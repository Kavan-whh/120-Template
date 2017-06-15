var index = require('./index.js');
var o={
  create(){
    console.log('fun');
  }
}
o.create()
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return this.name + ' says hello. ';
    }
}

console.log(new Person("cindy").greet());

var asyncFun = async function() {
    var set = setTimeout(function() {
        console.log(3);
    }, 1000)
    var f1 = await set;
    console.log(1);
    var f2 = await set;
    console.log(1);
    var f2 = await set;

};
asyncFun()
