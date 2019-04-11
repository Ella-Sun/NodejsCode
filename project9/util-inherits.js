/*
util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。

JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。
JavaScript 没有 提供对象继承的语言级别特性，而是通过原型复制来实现的。
*/
var util = require('util');

function Base() {
	this.name = 'base';
	this.base = 1991;
	this.sayHello = () => console.log('Hello ' + this.name);
}

//不知道为什么不可以这么定义 显示undefined
// Base.prototype.showName = () => console.log(this.name);
Base.prototype.showName = function() { 
    console.log(this.name);
}; 

function Sub() {
	this.name = 'sub';
}

//定义一个继承自Base 的Sub
util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();

console.log(objBase);

var objSub = new Sub();
objSub.showName();
/*
注意：Sub 仅仅继承了Base 在原型中定义的函数，
而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。

同时，在原型中定义的属性不会被console.log 作 为对象的属性输出。
如果我们去掉 objSub.sayHello(); 这行的注释，将会出现错误
*/
// objSub.sayHello(); 
console.log(objSub);